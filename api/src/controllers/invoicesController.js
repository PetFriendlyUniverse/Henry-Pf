const { Invoices, Invoices_Products, User, Product } = require("../db");

const getInvoices = async () => {
  const invoices = await Invoices.findAll();
  return invoices;
};

const getInvoicesId = async (id) => {
  try {
    const invoices = await Invoices.findOne({
      where: {
        id,
      },
    });
    return invoices;
  } catch (error) {
    return { error: error.message };
  }
};

const createInvoice = async (UserId, products) => {
  try {
    const newInvoice = await Invoices.create();
    const user = await User.findByPk(UserId);
    await user.addInvoice(newInvoice.id);
    const productsBulk = Object.keys(products).map((key) => {
      return {
        InvoiceId: newInvoice.id,
        ProductId: key,
        amount: products[key],
      };
    });

    const invoiceProducts = await Invoices_Products.bulkCreate(productsBulk);

    const invoiceWithProducts = await Invoices.findByPk(newInvoice.id, {
      include: [
        {
          model: Product,
          through: {
            attributes: [],
          },
        },
      ],
    });
    return invoiceWithProducts;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = {
  getInvoices,
  getInvoicesId,
  createInvoice,
};
