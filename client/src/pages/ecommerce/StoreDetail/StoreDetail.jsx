import QualificationChart from "./components/QualificationChart/QualificationChart";

function StoreDetail() {
  return (
    <section className="min-h-[90vh] w-full bg-gray-100">
      <div className="h-80 w-full bg-gray-200 pt-16"></div>
      <div className="relative -top-36 mx-auto flex lg:min-h-[700px] lg:w-2/3">
        <div className=" w-1/4 p-6">
          <h2 className="my-4 text-xl font-bold">_Store.name_</h2>
          <p className="text-sm">
            _store.(timestampCreation)_años en Pet Friendly Universe
          </p>
          <h3 className="mt-32">Reputación</h3>
          <p>+_cantidadVentas_ en los últimos 365 días</p>
          <hr className="mt-8 w-24 border-gray-100 " />
          <h3 className="mt-8">Ubicación</h3>
          <p>_Store.locality_ , _Store.province_</p>
        </div>
        <div className="w-3/4 border border-black px-16 lg:min-h-[40vh]">
          <div className="flex h-[350px] w-full gap-4">
            <QualificationChart />
            <QualificationChart />
          </div>
        </div>
      </div>
    </section>
  );
}

export default StoreDetail;
