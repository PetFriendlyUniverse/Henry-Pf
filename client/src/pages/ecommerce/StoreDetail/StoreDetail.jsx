import Loader from "../../../components/Loader/Loader";
import QualificationChart from "./components/QualificationChart/QualificationChart";
import RatingStars from "./components/RatingStars/RatingStars";
import { useGetStoreInfo } from "./hooks/useGetStoreInfo";

const starColor = (rating, starNumber) =>
  starNumber <= rating ? "text-yellow-400" : "text-gray-300";

function StoreDetail() {
  const [isLoaded, store, averages, error] = useGetStoreInfo();

  // console.log(averages); //
  // averages ===>> { dispatchtimeAVG: "4.7500000000000000", qualificationAVG: "3.6000000000000000", supportAVG: "3.4000000000000000" }
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
    <section className="min-h-[90vh] w-full bg-customProfile">
      <div className="h-60 w-full bg-gray-200"></div>
      <div className="relative -top-28 mx-auto flex lg:min-h-[700px] lg:w-2/3">
        <div className=" w-1/4 border border-black p-2">
          <h2 className="my-4 text-xl font-bold ">{store.name}</h2>
          <p className="text-sm">
            Nos acompaña desde {store.createdAt?.split("T")[0]}
          </p>
          <h3 className="mt-32 font-bold">Valoración</h3>
          <div class="mb-3 flex items-center" title={qualificationAVG}>
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
          </div>
          <hr className="mt-8 w-24 border-gray-100 " />
          <h3 className="mt-8 font-semibold">Ubicación</h3>
          <p className="text-sm -tracking-[.5px]">
            {store?.locality}, {store?.province}
          </p>
        </div>
        <div className="flex w-3/4 flex-col gap-6 px-16 lg:min-h-[40vh]">
          <div className="flex h-[350px] w-full gap-4">
            <QualificationChart
              type={"dispatchtime"}
              qualification={dispatchtimeAVG}
            />
            <QualificationChart type={"support"} qualification={supportAVG} />
          </div>
          <div className="h-[500px] w-full border border-black">
            <h2 className="mb-20 text-xl">
              Algun gráfico de estadísticas de las opiniones
            </h2>
            <p>comentarios random</p>
            <p>comentarios random</p>
            <p>comentarios random</p>
            <p>comentarios random</p>
            <p>comentarios random</p>
            <p>comentarios random</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StoreDetail;
