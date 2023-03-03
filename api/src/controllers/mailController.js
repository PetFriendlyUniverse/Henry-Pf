const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN;

const confirmMail = async (name, lastname, mail) => {
  const contentHtml = `
    <h1>Bienvenido a Pet Friendly Universe!!</h1>
    <h3>Hola ${name}, por favor haga click en el siguiente link para confirmar su cuenta</h3>
    <a href="http://${process.env.ORIGIN}:${process.env.FRONTEND_PORT}/confirm-email"><h4>Confirmar Cuenta</h4</a>
    <p>Si no fuiste tu el que creo la cuenta puedes ignorar este correo`;

  // prettier-ignore
  const OAuth2Client = new google.auth.OAuth2( CLIENT_ID, CLIENT_SECRET, REDIRECT_URI );

  OAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  try {
    const accessToken = await OAuth2Client.getAccessToken();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "petfriendyleuniverse@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
        expires: 3600,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    const mailInfo = {
      //ENVIO DEL MAIL
      from: "Pet Friendly Universe <petfriendyleuniverse@gmail.com>",
      to: `${name} ${lastname} <${mail}>`,
      subject: `Pet Friendly Universe -- Confirmar tu cuenta`,
      text: `Confirma tu cuenta de nuestra pagina "Pet Friendly Universe"`,
      html: contentHtml,
    };

    const result = await transporter.sendMail(mailInfo);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

const sendResetPasswordEmail = async (email, resetToken) => {
  const contentHtml = `
    <h1>Reestablecer contraseña en Pet Friendly Universe</h1>
    <p>Para resetear tu contraseña, por favor haz click en el siguiente link:</p>
    <a href="http://${process.env.ORIGIN}:${process.env.FRONTEND_PORT}/change-password?t=${resetToken}">
      Reestablecer Contraseña
    </a>
    <p>Si no has solicitado resetear tu contraseña, por favor ignora este correo.</p>
  `;

  const OAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
  );

  OAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  try {
    const accessToken = await OAuth2Client.getAccessToken();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "petfriendyleuniverse@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
        expires: 3600,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    const mailInfo = {
      from: "Pet Friendly Universe <petfriendyleuniverse@gmail.com>",
      to: email,
      subject: "Reestablecer contraseña en Pet Friendly Universe",
      html: contentHtml,
    };

    const result = await transporter.sendMail(mailInfo);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

const notificationBuy = async (name, lastname, mail) => {
  const contentHtml = `
    <h1>Felicidades por tu compra!!</h1>
    <h3>Hola ${name} ${lastname}, queremos confirmarte que has realizado una compra en nuestra pagina</h3>
    <h4>Muchas gracias por confiar en la tienda, Hasta pronto!!</h4>
    `;

  // prettier-ignore
  const OAuth2Client = new google.auth.OAuth2( CLIENT_ID, CLIENT_SECRET, REDIRECT_URI );

  OAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  try {
    const accessToken = await OAuth2Client.getAccessToken();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "petfriendyleuniverse@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
        expires: 3600,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    const mailInfo = {
      //ENVIO DEL MAIL
      from: "Pet Friendly Universe <petfriendyleuniverse@gmail.com>",
      to: `${name} ${lastname} <${mail}>`,
      subject: `Pet Friendly Universe -- Confirmar tu cuenta`,
      text: `Confirma tu cuenta de nuestra pagina "Pet Friendly Universe"`,
      html: contentHtml,
    };

    const result = await transporter.sendMail(mailInfo);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

const notificationSell = async (name, lastname, mail) => {
  const contentHtml = `
    <h1>Felicidades por tu venta!!</h1>
    <h3>Hola ${name}, queremos comentarte que has realizado una venta en nuestra pagina</h3>
    <h4>Muchas gracias por confiar en la tienda y publicar tus productos, esperamos que siga asi!!</h4>
    <p>Felicidades nuevamente, hasta pronto</p>`;

  // prettier-ignore
  const OAuth2Client = new google.auth.OAuth2( CLIENT_ID, CLIENT_SECRET, REDIRECT_URI );

  OAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  try {
    const accessToken = await OAuth2Client.getAccessToken();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "petfriendyleuniverse@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
        expires: 3600,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    const mailInfo = {
      //ENVIO DEL MAIL
      from: "Pet Friendly Universe <petfriendyleuniverse@gmail.com>",
      to: `${name} ${lastname} <${mail}>`,
      subject: `Pet Friendly Universe -- Confirmar tu cuenta`,
      text: `Confirma tu cuenta de nuestra pagina "Pet Friendly Universe"`,
      html: contentHtml,
    };

    const result = await transporter.sendMail(mailInfo);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  confirmMail,
  sendResetPasswordEmail,
  notificationBuy,
  notificationSell,
};
