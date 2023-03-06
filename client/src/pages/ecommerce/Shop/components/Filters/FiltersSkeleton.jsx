import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function FiltersSkeleton() {
  const listSkeletonMap = [];
  for (let i = 0; i < 5; i++) {
    listSkeletonMap.push(i);
  }
  return (
    <>
      <SkeletonTheme baseColor="#9c9c9c" highlightColor="white" />
      <div className="ml-2 h-fit w-full border-2  lg:top-[115px]  lg:mt-[70px] lg:flex lg:w-64 lg:border-2 lg:border-gray-200 lg:p-2 lg:pl-2 xl:w-64 ">
        <aside className="h-full  lg:flex lg:w-full lg:flex-col lg:content-center lg:items-center  lg:justify-center  lg:bg-transparent lg:py-2  lg:text-center">
          <button className={`h-8 w-3/5 self-center  border   lg:cursor-auto`}>
            <Skeleton className="h-full py-2" />
          </button>

          <div
            className={`flex w-full 
       flex-col justify-evenly overflow-hidden sm:flex-row sm:justify-evenly lg:h-auto lg:flex-col lg:overflow-auto`}
          >
            {listSkeletonMap.map((i) => (
              <div className="flex flex-col" key={"flsk" + i}>
                <hr className="my-2 h-px border-0 bg-gray-200" />
                <button
                  className={`cursor-default  text-lg font-bold uppercase tracking-wider text-black
                  `}
                >
                  <Skeleton className="mb-2 h-6" />
                </button>
                <div className="w-10/12 self-center">
                  <Skeleton className="h-4" />
                </div>
                <div className="w-9/12 self-center">
                  <Skeleton className="h-4" />
                </div>
                <div className="w-11/12 self-center">
                  <Skeleton className="h-4" />
                </div>
                <div className="w-7/12 self-center">
                  <Skeleton className="h-4" />
                </div>
              </div>
            ))}
            {/* {<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<} */}
            <div className="flex flex-col">
              <hr className="my-2 h-px border-0 bg-gray-200" />
              <button className="h-8">
                <Skeleton className="h-6" />
              </button>

              <ul
                className={`  flex flex-col overflow-hidden text-center md:block`}
              >
                <>
                  <li
                    className={`my-1 mx-auto flex  cursor-pointer font-semibold lg:flex-col`}
                  >
                    <p className="ml-2  w-3/5 self-center">
                      <Skeleton className="h-4" />
                    </p>
                    <label className="relative w-4/5 self-center">
                      <Skeleton className="h-[6px]" />
                      <span className="absolute bottom-1 left-0 inline-block h-[20px] w-[20px]">
                        <Skeleton className="h-full w-full" circle={true} />
                      </span>
                    </label>
                    <p className="ml-2 w-3/5 self-center">
                      <Skeleton className="h-3" />
                    </p>
                  </li>
                  <li
                    className={`my-1 mx-auto  flex cursor-pointer font-semibold lg:flex-col`}
                  >
                    <p className="ml-2  w-3/5 self-center">
                      <Skeleton className="h-4" />
                    </p>
                    <label className="relative w-4/5 self-center">
                      <Skeleton className="h-[6px]" />
                      <span className="absolute bottom-1 right-0 inline-block h-[20px] w-[20px]">
                        <Skeleton className="h-full w-full" circle={true} />
                      </span>
                    </label>

                    <p className="ml-2  w-3/5 self-center">
                      <Skeleton className="h-3" />
                    </p>
                  </li>
                </>

                <button className=" w-2/5 py-1 ">
                  <Skeleton />
                </button>
              </ul>
            </div>
            {/* {<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<} */}
          </div>
        </aside>
      </div>
      {/* </SkeletonTheme> */}
    </>
  );
}

export default FiltersSkeleton;
