const { Invoices, Invoices_Products } = require("../db");
const { Sequelize } = require("sequelize");
const axios = require("axios");

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

module.exports = {
  getInvoices,
  getInvoicesId,
};
