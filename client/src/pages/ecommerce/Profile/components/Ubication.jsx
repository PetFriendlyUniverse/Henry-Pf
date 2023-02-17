import React from "react";

function Ubication() {
  return (
    <div>
      <div className="flex justify-between pt-6">
        <div className="w-[600px] pl-16">
          <div className="flex justify-between pt-2">
            <div>
              <h6 className="font-bold">Provincia:</h6>
              <p>{`Buenos Aires`}</p>
            </div>
            <div>
              <h6 className="font-bold">Localidad</h6>
              <p>{`Villa Gessell`}</p>
            </div>
            <div>
              <h6 className="font-bold">Direccion</h6>
              <p>{`Calle Falsa 123`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ubication;
