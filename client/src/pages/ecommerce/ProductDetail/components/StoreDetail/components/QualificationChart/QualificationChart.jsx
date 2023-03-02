import { qualificationAdapter } from "../../adapters/qualificationAdapter";

//type debe ser support / dispatchtime || qualification (number)
function QualificationChart({ type, qualification }) {
  if (!type || !qualification) return <h2>skeleton</h2>;
  return (
    <article className="flex  aspect-[2/1.5] w-80 flex-col items-center justify-between rounded-xl border bg-customProfile p-4">
      <picture className="aspect-[2/1.5] w-full bg-gray-600">imagen</picture>
      <p className="text-center text-lg font-semibold text-blue-500">
        {qualificationAdapter(type, qualification, "title")}
      </p>
      <p className="text-center text-sm text-gray-400">
        {qualificationAdapter(type, qualification, "message")}
      </p>
    </article>
  );
}

export default QualificationChart;
