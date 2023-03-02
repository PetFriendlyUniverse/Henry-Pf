import { qualificationAdapter } from "../../adapters/qualificationAdapter";

//type debe ser support / dispatchtime || qualification (number)
function QualificationChart({ type, qualification }) {
  if (!type || !qualification) return <h2>skeleton</h2>;
  return (
    <article className="flex h-full w-full flex-col items-center justify-between rounded-xl border bg-customProfile p-10">
      <picture className="h-3/4 w-3/4 bg-gray-600">
        imagenimagenimagenimagen imagenimagenimagenimagen
        imagenimagenimagenimagen imagenimagenimagenimagen
        imagenimagenimagenimagen imagenimagenimagenimagen
        imagenimagenimagenimagen imagenimagenimagenimagen
      </picture>
      <p className="text-center text-xl font-semibold text-blue-500">
        {qualificationAdapter(type, qualification, "title")}
      </p>
      <p className="text-center ">
        {qualificationAdapter(type, qualification, "message")}
      </p>
    </article>
  );
}

export default QualificationChart;
