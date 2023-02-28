const adapter = {
  support: {
    3: ["Brinda buena atención", "Sus clientes están satisfechos"],
    2: ["Brinda la atención justa", "Sus clientes no están muy satisfechos"],
    1: ["No brinda buena atención", "Sus clientes estan descontentos"],
  },
  dispatchtime: {
    3: ["", ""],
    2: ["", ""],
    1: ["", ""],
  },
};

export const qualificationAdapter = (type, qualification, titleOrMessage) =>
  titleOrMessage == "title"
    ? adapter[type][qualification][0]
    : adapter[type][qualification][1];
