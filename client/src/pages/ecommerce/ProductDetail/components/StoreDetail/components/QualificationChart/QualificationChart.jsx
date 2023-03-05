import { qualificationAdapter } from "../../adapters/qualificationAdapter";
import DispatchtimeImg from "./components/DispatchtimeImg";
import RatingIcon from "./components/RatingIcon";
import SupportImg from "./components/SupportImg";
//type debe ser support / dispatchtime || qualification (number)
function QualificationChart({ type, qualification }) {
  if (!type || !qualification) return <h2>skeleton</h2>;

  return (
    <article className="flex aspect-[2/1.5] w-52 flex-col items-center justify-between rounded-xl border bg-customProfile p-4 sm:w-80 lg:-tracking-[1px] ">
      <picture className="relative aspect-[2/1.5] w-1/2">
        {type == "dispatchtime" ? (
          <DispatchtimeImg color={"rgb(75,85,99"} />
        ) : (
          <SupportImg color={"rgb(75,85,99"} />
        )}
        <RatingIcon rating={qualification} />
      </picture>
      <p className="text-center text-sm font-semibold text-blue-500 md:text-lg">
        {qualificationAdapter(type, qualification, "title")}
      </p>
      <p className="text-center text-sm text-gray-400">
        {qualificationAdapter(type, qualification, "message")}
      </p>
    </article>
  );
}

export default QualificationChart;
