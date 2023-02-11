const {
  getInvoices,
  getInvoicesId,
} = require("../controllers/invoicesController");

const getAllInvoices = async (req, res) => {
  try {
    let invoices = await getInvoices();
    return res.status(200).json(invoices);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const getId = async (req, res) => {
  const { id } = req.params;
  try {
    let invoices = await getInvoicesId(id);
    return res.status(200).json(invoices);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getAllInvoices,
  getId,
};
