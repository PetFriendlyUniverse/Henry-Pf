import Loader from "../../../../../components/Loader/Loader";
import QualificationChart from "./components/QualificationChart/QualificationChart";
import ReviewsGraph from "./components/ReviewsGraph/ReviewsGraph";
import { useGetStoreInfo } from "./hooks/useGetStoreInfo";

function StoreDetail() {
  const [isLoaded, store, averages, error] = useGetStoreInfo();
  // console.log(averages);

  // console.log(averages); //
  // averages ===>> { dispatchtimeAVG: "4.75000000", qualificationAVG: "3.6000000", supportAVG: "3.4000000" }
  const [qualificationAVG, dispatchtimeAVG, supportAVG] = [
    parseFloat(averages?.[0].qualificationAVG).toFixed(2),
    parseFloat(averages?.[0].dispatchtimeAVG).toFixed(2),
    parseFloat(averages?.[0].supportAVG).toFixed(2),
  ];

  if (error)
    return (
      <h2>
        Error ErrorError ErrorError ErrorError ErrorError ErrorError ErrorError
        Error
      </h2>
    );
  if (!isLoaded) return <Loader />;
  return (
    <div className="flex flex-col justify-around lg:flex-row">
      {/* ----------------------------- inicio seccion 1 ---------------------------  */}
      <div className="w-full rounded-lg p-1 lg:w-1/5 lg:p-4 lg:pl-8">
        <h2 className="mb-1 text-sm font-bold lg:mb-4 lg:text-xl ">
          {store?.name}
        </h2>
        <p className="text-sm text-gray-500">
          Nos acompaña desde {store?.createdAt?.split("T")[0]}
        </p>

        <hr className="mt-3 w-24 border-gray-300 lg:mt-8 " />
        <h3 className="mb-1 mt-2 text-sm font-bold lg:mb-4 lg:text-xl ">
          Ubicación
        </h3>
        <p className="mb-5 text-sm -tracking-[.5px] text-gray-500">
          {store?.locality}, {store?.province}
        </p>
      </div>
      {/* ----------------------------- fin seccion 1 ---------------------------  */}

      {/* ----------------------------- inicio seccion 2 ---------------------------  */}

      <ReviewsGraph data={{ qualificationAVG, dispatchtimeAVG, supportAVG }} />

      {/* ----------------------------- fin seccion 2 ---------------------------  */}

      {/* ----------------------------- inicio seccion 3 ---------------------------  */}
      <div className="flex w-1/3 justify-center gap-x-4">
        <QualificationChart
          type={"dispatchtime"}
          qualification={dispatchtimeAVG}
        />
        <QualificationChart type={"support"} qualification={supportAVG} />
      </div>
      {/* ----------------------------- fin seccion 3 ---------------------------  */}
    </div>
  );
}

export default StoreDetail;
