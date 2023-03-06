import { useEffect, useState } from "react";

function PetCard(props) {
  console.log(props);
  return (
    <div className=" w-full justify-center bg-[url('https://petfood.com.ar/img/cms/symphony.png')] ">
      <div className="flex h-full flex-col  justify-center">
        <div className="flex justify-between">
          <label className="mb-2 block pr-2 text-sm font-medium text-gray-900">
            Nombre:
          </label>
          {props?.name}
        </div>
        <div className="flex justify-between pt-1">
          <label className="mb-2 block pr-2 text-sm font-medium text-gray-900">
            Especie:
          </label>
          <span>{props?.specie}</span>
        </div>
        <div className="flex justify-between pt-1">
          <label className="mb-2 block pr-2 text-sm font-medium text-gray-900">
            Raza
          </label>
          <span>{props?.raza}</span>
        </div>
        <div className="flex justify-between pt-1 pb-3">
          <label className="mb-2 block pr-2 text-sm font-medium text-gray-900">
            Edad
          </label>
          <span>{props?.age}</span>
        </div>
      </div>
    </div>
  );
}

export default PetCard;
