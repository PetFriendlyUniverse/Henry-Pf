import Loader from "../../../components/Loader/Loader";
import QualificationChart from "./components/QualificationChart/QualificationChart";
import { useGetStoreInfo } from "./hooks/useGetStoreInfo";

function StoreDetail() {
  const [isLoaded, storeInfo] = useGetStoreInfo();

  console.log(storeInfo);
  if (!isLoaded) return <Loader />;
  return (
    <section className="min-h-[90vh] w-full bg-customProfile">
      <div className="h-60 w-full bg-gray-200"></div>
      <div className="relative -top-28 mx-auto flex lg:min-h-[700px] lg:w-2/3">
        <div className=" w-1/4 border border-black p-2">
          <h2 className="my-4 text-xl font-bold ">{storeInfo.name}</h2>
          <p className="text-sm">
            Nos acompaña desde {storeInfo.createdAt.split("T")[0]}
          </p>
          <h3 className="mt-32 font-bold">Valoración</h3>
          <p>starsstarsstars</p>
          <hr className="mt-8 w-24 border-gray-100 " />
          <h3 className="mt-8 font-semibold">Ubicación</h3>
          <p className="text-sm -tracking-[.5px]">
            {storeInfo?.locality}, {storeInfo?.province}
          </p>
        </div>
        <div className="flex w-3/4 flex-col gap-6 px-16 lg:min-h-[40vh]">
          <div className="flex h-[350px] w-full gap-4">
            <QualificationChart />
            <QualificationChart />
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
