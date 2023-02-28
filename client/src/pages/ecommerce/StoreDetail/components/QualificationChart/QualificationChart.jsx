import { qualificationAdapter } from "../../adapters/qualificationAdapter";

//type debe ser support / dispatchtime || qualification (number)
function QualificationChart({ type = "support", qualification = 3 }) {
  return (
    <article className="flex h-full w-full flex-col items-center justify-between rounded-sm bg-cornflowerblue  p-10 shadow-md shadow-gray-600">
      <picture className="h-3/4 w-3/4 bg-gray-600">
        imagenimagenimagenimagen imagenimagenimagenimagen
        imagenimagenimagenimagen imagenimagenimagenimagen
        imagenimagenimagenimagen imagenimagenimagenimagen
        imagenimagenimagenimagen imagenimagenimagenimagen
      </picture>
      <h3 className="text-xl font-semibold">
        {qualificationAdapter(type, qualification, "title")}
      </h3>
      <p>{qualificationAdapter(type, qualification, "message")}</p>
    </article>
  );
}

export default QualificationChart;
