import Loader from "../../../../../components/Loader/Loader";
import QualificationChart from "./components/QualificationChart/QualificationChart";
import ReviewsGraph from "./components/ReviewsGraph/ReviewsGraph";
import { useGetStoreInfo } from "./hooks/useGetStoreInfo";

function StoreDetail() {
  const [isLoaded, store, averages, error] = useGetStoreInfo();
  // console.log(averages);

  let qualificationAVG, dispatchtimeAVG, supportAVG;
  if (!!averages?.[0].qualificationAVG) {
    qualificationAVG = parseFloat(averages?.[0].qualificationAVG).toFixed(2);
    dispatchtimeAVG = parseFloat(averages?.[0].dispatchtimeAVG).toFixed(2);
    supportAVG = parseFloat(averages?.[0].supportAVG).toFixed(2);
  }

  // averages ===>> { dispatchtimeAVG: "4.75000000", qualificationAVG: "3.6000000", supportAVG: "3.4000000" }

  if (error)
    return (
      <h2>
        Error ErrorError ErrorError ErrorError ErrorError ErrorError ErrorError
        Error
      </h2>
    );
  if (!isLoaded) return <Loader />;
  return (
    <div className="flex w-full flex-col flex-wrap items-center justify-center sm:flex-row sm:gap-y-4 md:justify-around lg:flex-row lg:items-start lg:justify-start  lg:gap-x-0">
      {/* ----------------------------- inicio seccion 1 ---------------------------  */}
      <div className="w-full rounded-lg p-1 sm:w-1/2 sm:self-start lg:w-1/5 lg:p-4 lg:pl-8">
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

      {/* ----------------------------- inicio seccion 2 ---------------------------  */}

      {!!qualificationAVG ? (
        <>
          <ReviewsGraph
            data={{ qualificationAVG, dispatchtimeAVG, supportAVG }}
          />

          <div className="flex w-full flex-col items-center  justify-center gap-1 xsm:flex-row xsm:items-start sm:w-2/3  sm:flex-row md:gap-x-4 lg:w-5/12">
            <QualificationChart
              type={"dispatchtime"}
              qualification={dispatchtimeAVG}
            />
            <QualificationChart type={"support"} qualification={supportAVG} />
          </div>
        </>
      ) : (
        <p className="font-semibold sm:text-xs md:text-base lg:text-base">
          Actualmente esta tienda no posee reseñas
        </p>
      )}
    </div>
  );
}

export default StoreDetail;
