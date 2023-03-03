function HomeServices() {
  return (
    <div className="scrollbar scrollbar-rounded-xl scrollbar-thumb-blue-500 scrollbar-track-blue-300 w-full bg-adopcion lg:flex lg:min-h-screen lg:flex-col lg:gap-12 lg:bg-slate-500 lg:pt-16 xl:items-center">
      {/* <Recomendados />
      <div className="gap-10  lg:mx-auto lg:flex lg:h-full lg:w-full lg:gap-0 lg:px-4 xl:min-h-screen xl:gap-0 2xl:pl-10">
        <div className="h-fit w-full border-2  lg:top-[115px]  lg:mt-[70px] lg:flex lg:w-64 lg:border-2 lg:border-[#645e9d] lg:p-2 lg:pl-2 xl:w-64 ">
          <Filters />
        </div>

        <Paginator />
      </div> */}

      <div className="flex  items-center justify-center  ">
        <div className="mx-auto flex h-full w-4/5 items-center justify-center">
          <div className="flex w-1/2 flex-col items-center justify-center gap-16">
            <h2 className="text-center text-5xl font-bold uppercase">
              Este sector se encuentra
              <span className="text-russianviolet"> en construcción</span>
            </h2>
          </div>
          <div className="flex w-1/2 items-end">
            <img
              src="https://img.freepik.com/premium-vector/dog-handler-volunteering-with-pets-dog-walking-service-vector-illustration_131590-418.jpg?w=2000"
              alt=""
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeServices;
