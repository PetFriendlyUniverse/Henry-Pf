const { confirmMail } = require("../controllers/mailController");

const postConfirmMailHandler = async (req, res) => {
  const { name, lastname, mail } = req.body;
  try {
    await confirmMail(name, lastname, mail);
    res.status(200).send("El email blabla se envio!");
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { postConfirmMailHandler };
