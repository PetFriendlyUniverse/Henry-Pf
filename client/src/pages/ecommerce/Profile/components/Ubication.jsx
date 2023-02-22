import React from "react";

function Ubication({ province, locality }) {
  return (
    <div class="flex w-full flex-col justify-between py-6 px-4 pt-2 sm:w-1/2 sm:px-0 md:w-2/3 lg:w-3/4 xl:w-4/5 xl:flex-row 2xl:w-5/6">
      <div class="mb-2 sm:mb-0 md:px-7 lg:px-10">
        <h6 className="font-bold">Provincia:</h6>
        <p>{province || "Actualmente no tienes una provincia registrada"}</p>
      </div>
      <div class="mb-2 sm:mb-0 md:px-7 lg:px-10">
        <h6 className="font-bold">Localidad</h6>
        <p>{locality || "Actualmente no tienes una localidad registrada"}</p>
      </div>
      {/* <div class="mb-2 sm:mb-0 md:px-7 lg:px-10">
        <h6 className="font-bold">Direccion</h6>
        <p>{`Calle Falsa 123`}</p>
      </div> */}
    </div>
  );
}

export default Ubication;
