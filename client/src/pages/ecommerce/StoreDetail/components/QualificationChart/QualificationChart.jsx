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

//type debe ser support / dispatchtime || qualification (number)
function QualificationChart({ type = "support", qualification = 3 }) {
  return (
    <article className="flex h-full w-full flex-col items-center justify-between rounded-sm bg-gray-100  p-10 shadow-md shadow-gray-600">
      <picture className="h-3/4 w-3/4 bg-gray-600">
        imagenimagenimagenimagen imagenimagenimagenimagen
        imagenimagenimagenimagen imagenimagenimagenimagen
        imagenimagenimagenimagen imagenimagenimagenimagen
        imagenimagenimagenimagen imagenimagenimagenimagen
      </picture>
      <h3 className=" text-xl font-semibold">
        {adapter[type][qualification][0]}
      </h3>
      <p>{adapter[type][qualification][1]}</p>
    </article>
  );
}

export default QualificationChart;
