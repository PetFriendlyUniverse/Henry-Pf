import React from "react";
import { useSelector } from "react-redux";
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
      <div className="mx-auto flex w-full  flex-wrap items-center justify-center justify-items-center gap-7 md:max-w-2xl lg:m-0 lg:min-h-fit  lg:w-full   lg:gap-x-5 lg:gap-y-6   xl:gap-x-2  2xl:max-w-7xl  2xl:gap-x-10 2xl:gap-y-12  ">
        {skeletonMap.map((i) => (
          <CardSkeleton key={"cs" + i} />
        ))}
      </div>
    );
  else {
    return (
      <div className=" flex h-full w-full flex-wrap  items-center justify-center justify-items-center gap-2 lg:gap-20 lg:px-10">
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
                province={s?.province}
                img={s?.img}
                description={s?.description}
                UserImg={s?.User?.img}
                UserName={s?.User?.name}
                UserLastName={s?.User?.lastname}
                area_code={s?.User?.area_code}
                number={s?.User?.number}
              />
            );
          })
        )}
      </div>
    );
  }
}

export default CardContainer;
