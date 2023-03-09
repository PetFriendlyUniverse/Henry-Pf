import { Carousel } from "flowbite-react";

function CardAdopciones({
  date,
  locality,
  province,
  img,
  description,
  UserImg,
  UserName,
  UserLastName,
  area_code,
  number,
  name,
  id,
}) {
  return (
    <article className="my-4 flex h-[500px] w-[328px] flex-col rounded-xl border-4 border-cornflowerblue  bg-white  shadow-lg ">
      <div className="flex items-center gap-4 text-xs">
        <time className="text-gray-500">{date.slice(0, 10)}</time>
        <span className="rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100">
          {province}, {locality}
        </span>
      </div>

      <Carousel>
        <img src={img} alt="" className=" border" />
      </Carousel>

      <div className="flex h-full flex-col justify-between  p-2">
        <h3 className="mt-3 text-lg  font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          Adopción RESPONSABLE
        </h3>
        <h5>{name}</h5>

        <span className="text-sm text-gray-600">{description}</span>

        <div className="mt-8 flex items-center gap-x-4">
          <img
            src={UserImg}
            alt=""
            className="h-10 w-10 rounded-full bg-gray-50"
          />
          <div className="flex items-center text-center text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <span className="">
                {UserName}, {UserLastName}
              </span>{" "}
              <span>
                {area_code}-{number}
              </span>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default CardAdopciones;
