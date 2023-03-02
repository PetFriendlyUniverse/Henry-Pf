const { sequelize, QueryTypes } = require("sequelize");
const { Invoices, Invoices_Products, User, Product } = require("../db");
const Colors = require("../models/FilterModels/Colors");

const getInvoices = async () => {
  const invoices = await Invoices.findAll({
    include: [
      {
        model: Product,
        through: {
          attributes: ["unitPrice", "amount"],
        },
      },
    ],
  });
  return invoices;
};

const getInvoicesId = async (id) => {
  try {
    const invoices = await Invoices.findOne({
      where: {
        id,
      },
      include: [
        {
          model: Product,
          through: {
            attributes: ["unitPrice", "amount"],
          },
        },
      ],
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

    await user.addInvoices(newInvoice);
    //console.log(products); //   {id:1 ,unitPrice:2000, quantity:5}
    await products.forEach((element) => {
      newInvoice.addProducts(element.id, {
        through: {
          unitPrice: element.unitPrice,
          amount: element.quantity,
        },
      });
    });

    const invoiceWithProducts = await Invoices.findByPk(newInvoice.id, {
      include: [
        {
          model: Product,
          through: {
            attributes: ["unitPrice", "amount"],
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
