import React from "react";
import CardSkeleton from "../../../../components/Card/CardSkeleton";
import useGetAdopciones from "../../../../hooks/useGetAdopciones";
import CardAdopciones from "./CardAdopciones/CardAdopciones";

function CardContainer() {
  const [loading, adoption, adopcionPerPage] = useGetAdopciones();
  const skeletonMap = [];
  for (let index = 0; index < adopcionPerPage; index++) {
    skeletonMap.push(index);
  }
  if (loading)
    return (
      <div className="mx-auto flex w-full flex-wrap items-center justify-center justify-items-center gap-7 sm:w-4/5  md:max-w-2xl lg:m-0 lg:min-h-fit  lg:w-full   lg:gap-x-5 lg:gap-y-6   xl:gap-x-2  2xl:max-w-7xl  2xl:gap-x-10 2xl:gap-y-12  ">
        {skeletonMap.map((i) => (
          <CardSkeleton key={"cs" + i} />
        ))}
      </div>
    );
  else {
    return (
      <div className="mx-auto flex h-full w-full  flex-wrap  items-center justify-center justify-items-center gap-7 border-2 border-black ">
        {adoption?.length === 0 ? (
          <div className="min-h-[50vh]">
            <h2>No se encotraron coincidencias con los datos solicitados</h2>
          </div>
        ) : (
          adoption?.map((s) => {
            return (
              <CardAdopciones
                key={s?.id}
                id={s?.id}
                date={s?.createdAt}
                locality={s?.locality}
                img={s?.img}
                dogImg={s?.Img}
                UserImg={s?.User?.img}
                description={s?.description}
                UserName={s?.User?.user}
                area_code={s?.User?.area_code}
                number={s.User?.number}
              />
            );
          })
        )}
      </div>
    );
  }
}

export default CardContainer;
