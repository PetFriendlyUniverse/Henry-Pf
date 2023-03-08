import { useEffect, useState } from "react";

function PetCard(props) {
  console.log(props);
  return (
    <div className="flex h-full w-full flex-col   justify-center bg-adopcion">
      <div className="flex justify-between">
        <span className="mb-2 block pr-2 text-sm font-medium text-gray-900">
          Nombre:
        </span>
        <span>{props.petInfo?.name}</span>
      </div>
      <div className="flex justify-between pt-1">
        <span className="mb-2 block pr-2 text-sm font-medium text-gray-900">
          Especie:
        </span>
        <span>{props.petInfo?.specie}</span>
      </div>
      <div className="flex justify-between pt-1">
        <span className="mb-2 block pr-2 text-sm font-medium text-gray-900">
          Raza:
        </span>
        <span>{props.petInfo?.race}</span>
      </div>
      <div className="flex justify-between pt-1">
        <span className="mb-2 block pr-2 text-sm font-medium text-gray-900">
          Tamaño:
        </span>
        <span>{props.petInfo?.size}</span>
      </div>
      <div className="flex justify-between pt-1 pb-3">
        <span className="mb-2 block pr-2 text-sm font-medium text-gray-900">
          Edad:
        </span>
        <span>{props.petInfo?.age}</span>
      </div>
      <div className="flex gap-4 self-end">
        <button className="rounded-md bg-ultraviolet px-2 py-1 font-semibold tracking-wider text-lightwhite">
          Editar
        </button>
        <button className="rounded-md bg-ultraviolet px-2 py-1 font-semibold tracking-wider text-lightwhite">
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default PetCard;
