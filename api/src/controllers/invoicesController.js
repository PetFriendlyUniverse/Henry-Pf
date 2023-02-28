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

const createInvoice = async (
  userId,
  products,
  paymentId,
  merchantOrder,
  status
) => {
  try {
    const user = await User.findByPk(userId);
    const newInvoice = await Invoices.create({
      userId,
      paymentId,
      merchantOrder,
      status,
    });
    await user.addInvoice(newInvoice.id);

    const invoiceProducts = await Invoices_Products.bulkCreate(products);

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
