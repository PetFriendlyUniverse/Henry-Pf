import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function LandingShopSkeleton() {
  return (
    <SkeletonTheme baseColor="#9c9c9c" highlightColor="white">
      <header className="clip-header relative flex w-full flex-col overflow-hidden  bg-cover bg-fixed bg-center bg-no-repeat pt-0 text-black sm:h-[350px] lg:h-[550px] lg:min-h-[400px]  xl:min-h-[400px]">
        <Skeleton className="absolute -top-20 h-0 w-0 object-cover contrast-125 sm:top-0 sm:h-full sm:w-full" />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="z-10 overflow-hidden sm:mx-auto  sm:grid sm:h-0 sm:w-0 sm:grid-cols-3 sm:items-center sm:justify-center sm:gap-1 md:justify-items-center lg:top-1/2 lg:grid-cols-6 lg:gap-4">
          <a
            onClick={() => {
              handleSetFilter("Perros");
            }}
            className="lg:col-start-1 lg:col-end-3 lg:h-3/5 lg:w-full xl:w-3/4"
            to="/shop"
          >
            <div className="relative flex h-[450px] items-center  justify-center   overflow-hidden sm:h-48 sm:w-48 md:h-52 md:w-52 lg:h-full lg:w-full">
              <div className=" absolute inset-0 z-10 bg-perros bg-cover bg-center bg-no-repeat duration-200  hover:scale-125 hover:contrast-125 lg:bg-cover "></div>
            </div>
          </a>

          <a
            onClick={() => {
              handleSetFilter("Gatos");
            }}
            className="lg:col-start-3 lg:col-end-5 lg:h-3/5 lg:w-full xl:w-3/4"
            to="/shop"
          >
            <div className="relative flex h-[450px] items-center  justify-center   overflow-hidden sm:h-48 sm:w-48 md:h-52 md:w-52 lg:h-full lg:w-full">
              <div className=" absolute inset-0 z-10  bg-gatos bg-cover bg-center bg-no-repeat duration-200 hover:scale-125 hover:contrast-125 lg:bg-cover "></div>
            </div>
          </a>

          <a
            className="lg:col-start-5 lg:col-end-8 lg:h-3/5 lg:w-full xl:w-3/4"
            to="/shop"
          >
            <div className="relative flex h-[450px] items-center  justify-center   overflow-hidden sm:h-48 sm:w-48 md:h-52 md:w-52 lg:h-full lg:w-full">
              <div className=" absolute inset-0 z-10 bg-contacto bg-cover bg-center bg-no-repeat duration-200  hover:scale-125 hover:contrast-125 lg:bg-cover "></div>
            </div>
          </a>
        </div>
      </header>
      <main className="bg-adopcion py-6 px-3 sm:px-5 md:px-10 lg:px-32 xl:px-52 2xl:px-80 ">
        <section className="mt-5 flex w-full flex-col items-center sm:grid sm:grid-cols-2 sm:gap-3">
          <div className="flex flex-col items-center justify-center sm:col-start-1 sm:col-end-3">
            <Skeleton />
            <h1>
              <Skeleton className="text-center font-bold uppercase sm:text-2xl" />
              <span className="font-bold uppercase text-cornflowerblue sm:text-2xl">
                <Skeleton />
              </span>
            </h1>
            <a to="/shop">
              <Skeleton className="my-3 mt-12 flex w-10/12 items-center justify-center gap-2  bg-gray-200 py-1 text-transparent sm:gap-5 sm:py-2  sm:px-4 lg:h-16" />
              <span></span>
              <span className=" text-xs uppercase text-transparent sm:text-base">
                ver nuestro shop completo
              </span>
            </a>
          </div>
          <div className="mt-8 flex w-full flex-col items-center sm:col-start-1 sm:col-end-2">
            <a to="/shop">
              <Skeleton className="my-3 flex w-4/5 items-center justify-center gap-2 bg-gray-200 py-1 text-white sm:gap-5 sm:py-2  sm:px-4 lg:h-16" />
              <span></span>
              <span className="text-xs uppercase text-transparent  sm:text-base">
                ver todos los articulos para perros
              </span>
            </a>
            <div>
              <Skeleton className=" mt-12 h-24 w-96  bg-gray-200 sm:h-64 xl:h-80 2xl:h-96" />
            </div>
          </div>
          <div className="mt-8 flex w-full flex-col items-center sm:col-start-2 sm:col-end-3">
            <a to="/shop">
              <Skeleton className="mb-3 mt-10  flex w-4/5 items-center justify-center gap-2 bg-gray-200 py-1 text-white sm:my-3 sm:gap-5 sm:py-2 sm:px-4 lg:h-16 " />
              <span></span>
              <span className="text-xs uppercase text-transparent  sm:text-base">
                ver todos los articulos para gatos
              </span>
            </a>

            <div>
              <Skeleton className=" mt-12 h-24 w-96  bg-gray-200 sm:h-64 xl:h-80 2xl:h-96" />
            </div>
          </div>
        </section>

        <section>
          <Skeleton className="clip-aboutUs mt-12 flex h-96 flex-col items-center justify-center gap-10   bg-gray-200 lg:px-52 xl:h-[500px] xl:px-64" />
          <div>
            <Skeleton className="flex flex-col items-center justify-center gap-2 pt-3 " />
            <h2 className="text-2xl font-bold text-yellow-400 sm:text-3xl">
              <Skeleton />
            </h2>
            <span className="text-xl font-bold uppercase text-green-500 sm:text-2xl">
              <Skeleton />
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 ">
            <h3 className="text-slate-2 00 text-2xl font-bold  uppercase sm:text-3xl">
              <Skeleton />
            </h3>
            <p className="p-2 text-center  text-slate-200 sm:px-10 ">
              <Skeleton />
            </p>
          </div>
        </section>
        <section>
          <Skeleton className="clip-payMethod mt-5 flex h-96 flex-col items-center justify-center gap-6 bg-gray-200 px-4 sm:h-[420px] lg:px-52 xl:h-[500px] xl:px-64" />
          <div className="">
            <p className="mt-3 text-center font-semibold uppercase sm:mt-5 sm:px-2 sm:text-xl">
              <Skeleton /> <br />
              <span className="text-blue-700">
                <Skeleton />
              </span>
            </p>
          </div>
          <div className="flex flex-col items-center"></div>
        </section>

        <section>
          <Skeleton className="from-slate-600bg-cover relative mt-5 flex h-96 flex-col items-center justify-center gap-8  bg-gray-200  bg-gradient-to-b bg-center bg-no-repeat px-4 lg:px-52 xl:h-[500px] xl:px-64" />
          <p className="text-center font-medium text-white sm:text-lg">
            <Skeleton />
          </p>
        </section>
        <section className="mt-5 ">
          <div className="flex  h-20 items-center ">
            <h4 className="w-full text-center text-2xl font-bold uppercase">
              <span className="text-cornflowerblue">
                <Skeleton />
              </span>{" "}
              <Skeleton />
            </h4>
          </div>
          <div>
            <Skeleton className="h-40 " />
          </div>
        </section>
      </main>
    </SkeletonTheme>
  );
}

export default LandingShopSkeleton;
