import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ProductDetailSkeleton() {
  return (
    <SkeletonTheme baseColor="#9c9c9c" highlightColor="white">
      <div className=" flex  min-h-screen w-full  flex-col items-center  justify-center pt-0">
        {""}
        <div className=" max-w-[60vw] ">
          <div className="flex  flex-col rounded-xl md:flex-col lg:flex-row lg:gap-5">
            <picture className="block  w-full animate-pulse items-center justify-center lg:w-6/12">
              <img alt="" className="w-[460px]" />
              <Skeleton className="h-full" />
            </picture>
            <div className="inline-block w-full lg:w-6/12 ">
              <div>
                <h1 className="font-bold md:text-2xl lg:text-3xl">
                  <Skeleton />
                </h1>
                <button className="text-xs">
                  <Skeleton />
                </button>
                <span className="text-xs">
                  <Skeleton />
                </span>

                <div className="flex items-center">
                  <title>
                    <Skeleton />
                  </title>

                  <Skeleton />
                  <title>
                    <Skeleton />
                  </title>

                  <Skeleton />
                  <title>
                    <Skeleton />
                  </title>

                  <title>
                    <Skeleton />
                  </title>
                  <title>
                    <Skeleton />
                  </title>
                </div>
              </div>

              <div className="flex flex-col flex-wrap items-start gap-4 md:flex-row md:gap-8">
                <div>
                  <h3>
                    <Skeleton />
                  </h3>
                </div>
                <div>
                  <button className="flex items-center text-[12px] font-bold uppercase text-pink-700">
                    <Skeleton />
                  </button>
                  <button className="flex  items-center text-[12px] font-bold uppercase text-pink-700">
                    <Skeleton />
                  </button>
                </div>
              </div>
              <div>
                <span className="text-xs">
                  <Skeleton />
                </span>
                <h3>
                  <Skeleton />
                </h3>
                <div className=" md:w-1/5 lg:w-1/4">
                  <Skeleton />
                </div>
              </div>
              <div>
                <span>
                  {" "}
                  <Skeleton />
                </span>
                <div className="w-1/2">
                  <Skeleton />
                </div>
                <button className="my-2 rounded-lg bg-[#9c9c9c] py-2 px-4 md:min-w-full lg:w-1/2">
                  <Skeleton />
                </button>
              </div>
              <div className="text-sm">
                <div>
                  <Skeleton />
                  <span></span>
                </div>
                <div>
                  <Skeleton />
                </div>
                <div className="md:text-xs lg:text-sm ">
                  <Skeleton />
                </div>

                <div>
                  <Skeleton />
                  <span></span>
                </div>
                <div className="text-xs">
                  <Skeleton />
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <Skeleton />
                  </div>
                  <div>
                    <div className="text-xs">
                      <Skeleton />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 h-full min-h-[200px] w-full bg-gray-100">
          <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-300"></div>
          <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-300"></div>
          <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-300"></div>
          <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-300"></div>
          <div className="mt-4 flex items-center space-x-3"></div>
        </div>
      </div>
    </SkeletonTheme>
  );
}

export default ProductDetailSkeleton;
