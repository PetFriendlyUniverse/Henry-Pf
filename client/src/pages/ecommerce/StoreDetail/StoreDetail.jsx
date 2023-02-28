function StoreDetail() {
  return (
    <section className="min-h-[90vh] w-full bg-gray-100">
      <div className="h-80 w-full bg-green-200 pt-16"></div>
      <div className="relative -top-36 mx-auto flex bg-blue-300 lg:min-h-[700px] lg:w-2/3">
        <div className=" w-1/4 bg-red-200 p-6">
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
        <div className="h-20 w-3/4 bg-green-300 p-12"></div>
      </div>
    </section>
  );
}

export default StoreDetail;
