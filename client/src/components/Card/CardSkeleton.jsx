import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CardSkeleton() {
  return (
    <SkeletonTheme baseColor="#9c9c9c" highlightColor="white">
      <div className="flex h-full w-full min-w-fit max-w-xs flex-col items-center justify-between overflow-hidden rounded-lg border text-center  sm:max-w-sm ">
        <div className=" h-56 w-full bg-[rgba(0,0,0,0.05)]">
          {/* <Carousel slide={false} indicators={false}> */}
          <Skeleton className="h-56 w-full " />
        </div>
        <div className=" px-3 pb-2">
          <Skeleton className="  flex w-full items-center justify-center " />
          <Skeleton className="  flex w-full items-center justify-center" />

          <div className=" flex w-full  items-center justify-center gap-2 ">
            <Skeleton className="my-1 rounded py-2 px-7 " />
            <Skeleton className="rounded py-2 px-7 " />
          </div>
          <div className="w-full ">
            <Skeleton className="p-1 text-center font-bold" />
          </div>
          {/* <div className="flex w-full items-center justify-around gap-1  p-1"> */}
          <div className=" flex w-full  items-center justify-center gap-2 ">
            <Skeleton className="my-1 rounded py-2 px-11  " />
            <Skeleton className="rounded py-2 px-11  " />
          </div>
        </div>
      </div>
      {/* </div> */}
    </SkeletonTheme>
  );
}

export default CardSkeleton;
