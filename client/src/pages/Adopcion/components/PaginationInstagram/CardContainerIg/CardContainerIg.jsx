import React from "react";
import CardSkeleton from "../../../../../components/Card/CardSkeleton";
import useGetPostIg from "../../../../../hooks/useGetPostIg";
import { InstagramEmbed } from "react-social-media-embed";

// totalPagesIg: 1,
// currentPageIg: 1,
// postPerPageIg: 4,

function CardContainerIg() {
  const [loading, instagramUrls, postPerPageIg] = useGetPostIg();
  const skeletonMap = [];
  for (let index = 0; index < postPerPageIg; index++) {
    skeletonMap.push(index);
  }
  if (loading)
    return (
      <div className="mx-auto flex w-full  flex-wrap items-center justify-center justify-items-center gap-7 md:max-w-2xl lg:m-0 lg:min-h-fit  lg:w-full   lg:gap-x-5 lg:gap-y-6   xl:gap-x-2  2xl:max-w-7xl  2xl:gap-x-10 2xl:gap-y-12  ">
        {skeletonMap.map((i) => (
          <CardSkeleton key={"cs" + i} />
        ))}
      </div>
    );
  else {
    return (
      <div className=" flex h-full w-full flex-wrap  items-center justify-center justify-items-center gap-2 lg:gap-20 lg:px-10">
        {instagramUrls?.length === 0 ? (
          <div className="min-h-[50vh]">
            <h2>No se encotraron coincidencias con los datos solicitados</h2>
          </div>
        ) : (
          <div className="  flex w-full flex-wrap  justify-center  gap-2  rounded-xl ">
            {instagramUrls?.map((i) => {
              return (
                <div
                  key={i.id}
                  className="flex h-[500px] w-[328px] justify-center"
                >
                  <InstagramEmbed url={i.url} width={328} height={500} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default CardContainerIg;
