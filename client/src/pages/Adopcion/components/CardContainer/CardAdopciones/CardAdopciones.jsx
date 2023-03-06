import { useState } from "react";

// import { Carousel } from "flowbite-react";

function Card({
  name,
  id,
  date,
  description,
  location,
  img,
  userName,
  userPhone,
  place,
}) {
  const [value, setValue] = useState(1);

  return (
    <article className="my-4 flex h-[600px]  w-[328px] max-w-xl flex-col items-start justify-between border bg-white ">
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime="2020-03-16" className="text-gray-500">
          {date}
        </time>
        <a
          href="#"
          className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
        >
          {location}
        </a>
      </div>
      <Carousel>{img}</Carousel>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <a href="#">
            <span className="absolute inset-0"></span>
            Adopcion RESPONSABLE
          </a>
        </h3>
        <h5>Nombre: {name}</h5>
        <p className="line-clamp-3 mt-5 text-sm leading-6 text-gray-600">
          {description}
        </p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <img
          src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
          className="h-10 w-10 rounded-full bg-gray-50"
        />
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            <a href="#">
              <span className="absolute inset-0"></span>
              {userName}
              {userPhone}
            </a>
          </p>
          <p className="text-gray-600">{place} </p>
        </div>
      </div>
    </article>
  );
}

export default Card;
