import React from "react";
import useGetAdopciones from "../../../../hooks/useGetAdopciones";

function CardContainer() {
  const [loading, adoption] = useGetAdopciones();
  if (loading)
    return (
      <div className="flex h-screen w-full flex-col content-center items-center py-72">
        <Loader />
      </div>
    );

  return (
    <div className="mx-auto flex h-full w-full flex-wrap items-center justify-center justify-items-center gap-7 sm:w-4/5 sm:grid-cols-2 md:max-w-2xl lg:m-0 lg:min-h-fit  lg:w-full  lg:grid-cols-3 lg:gap-x-5 lg:gap-y-6 xl:max-w-5xl xl:grid-cols-4 xl:gap-x-2  2xl:max-w-7xl  2xl:gap-x-10 2xl:gap-y-12  ">
      {adoption?.length === 0 ? (
        <div className="min-h-[50vh]">
          <h2>No se encotraron coincidencias con los datos solicitados</h2>
        </div>
      ) : (
        adoption?.map((s) => {
          return (
            <Card
              key={s?.id}
              id={s?.id}
              date={s?.date}
              location={s?.location}
              name={s?.name}
              img={s?.img}
              user={s?.user}
              username={s?.username}
              userPhone={s.userPhone}
              place={s.place}
            />
          );
        })
      )}
    </div>
  );
}

export default CardContainer;
