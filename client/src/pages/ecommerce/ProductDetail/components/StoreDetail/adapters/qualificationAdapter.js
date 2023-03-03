const adapter = {
  support: {
    5: ["Brinda una excelente atención", "Sus clientes están muy satisfechos"],
    4: ["Brinda muy buena atención", "Sus clientes están satisfechos"],
    3: ["Brinda una atención regular", "Sus clientes están satisfechos"],
    2: ["Brinda una mala atención", "Sus clientes no están satisfechos"],
    1: ["No brinda atención", "Sus clientes estan descontentos"],
  },
  dispatchtime: {
    5: [
      "Despacha sus productos en excelente tiempo y forma",
      "Sus clientes están muy satisfechos",
    ],
    4: [
      "Despacha sus productos en muy buen tiempo y forma",
      "Sus clientes están satisfechos",
    ],
    3: [
      "Despacha sus productos en tiempo y forma",
      "Sus clientes están satisfechos",
    ],
    2: [
      "Despacha sus productos con algo de retraso y en condiciones regulares",
      "Sus clientes están algo insatisfechos",
    ],
    1: [
      "No despacha sus productos en el tiempo acordado y en malas condiciones",
      "Sus clientes están muy insatisfechos",
    ],
  },
};

export const qualificationAdapter = (type, qualification, titleOrMessage) => {
  const qual = Math.ceil(qualification);
  return titleOrMessage == "title"
    ? adapter[type][qual][0]
    : adapter[type][qual][1];
};
