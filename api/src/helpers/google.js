const passport = require("passport");
const { User } = require("../db");
const jwt = require("jsonwebtoken");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, JWT_SECRET, BACK_ORIGIN } =
  process.env;

passport.use(
  "auth-google",
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "https://henry-pf-production-f816.up.railway.app/auth/google",
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
        if (user.mail === "petfriendyleuniverse@gmail.com") {
          await user.update({ admin: true });
          console.log(
            `El usuario ${user.mail} ha sido promovido a administrador`
          );
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
