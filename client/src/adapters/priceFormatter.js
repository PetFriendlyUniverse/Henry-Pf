const formatter = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
});

export const priceFormatter = (number) => formatter.format(number);
