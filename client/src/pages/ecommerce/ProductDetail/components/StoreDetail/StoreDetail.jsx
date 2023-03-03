import Loader from "../../../../../components/Loader/Loader";
import QualificationChart from "./components/QualificationChart/QualificationChart";
import RatingStars from "./components/RatingStars/RatingStars";
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
    <div className="flex justify-around">
      {/* ----------------------------- inicio seccion 1 ---------------------------  */}
      <div className="w-1/5 rounded-lg p-4 pl-8">
        <h2 className="mb-4 text-xl font-bold ">{store?.name}</h2>
        <p className="text-sm">
          Nos acompaña desde {store?.createdAt?.split("T")[0]}
        </p>
        {/* <hr className="mt-8 w-24 border-gray-300 " /> */}
        {/* ------------------ stars  -------------- */}
        {/* <div className="flex items-center" title={qualificationAVG}>
          <RatingStars
            className={`h-5 w-5 ${starColor(qualificationAVG, 1)}`}
          />
          <RatingStars
            className={`h-5 w-5 ${starColor(qualificationAVG, 2)}`}
          />
          <RatingStars
            className={`h-5 w-5 ${starColor(qualificationAVG, 3)}`}
          />
          <RatingStars
            className={`h-5 w-5 ${starColor(qualificationAVG, 4)}`}
          />
          <RatingStars
            className={`h-5 w-5 ${starColor(qualificationAVG, 5)}`}
          />
          <p>{qualificationAVG} de 5</p>
        </div> */}
        {/* ------------------ fin stars  -------------- */}
        <hr className="mt-8 w-24 border-gray-300 " />
        <h3 className="mt-8 font-semibold">Ubicación</h3>
        <p className="text-sm -tracking-[.5px]">
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
