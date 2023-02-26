const passport = require("passport");
const { User } = require("../db");
const jwt = require("jsonwebtoken");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, JWT_SECRET } = process.env;

passport.use(
  "auth-google",
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "https://petfriendly-backend.onrender.com/auth/google",
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        const [user, created] = await User.findOrCreate({
          where: {
            mail: profile.emails[0].value,
          },
          defaults: {
            name: profile.name.givenName,
            lastname: profile.name.familyName,
            user: profile.displayName,
            img: profile.photos[0].value,
            password: "google", // Puedes establecer una contraseña temporal para usuarios de Google
            enable: true,
          },
        });

        if (created) {
          console.log("Usuario creado:", user.toJSON());
        } else {
          console.log("Usuario encontrado:", user.toJSON());
        }

        const token = jwt.sign({ id: user.id }, JWT_SECRET, {
          expiresIn: "1h",
        });
        done(null, { user: user.toJSON(), token });
      } catch (error) {
        console.error("Error en la estrategia de Google:", error);
        done(error);
      }
    }
  )
);
