import React from "react";

function Payment() {
  return (
    <div className="flex w-full flex-col justify-between py-6 px-4 pt-2 sm:w-1/2 sm:px-0 md:w-2/3 lg:w-3/4 xl:w-4/5 xl:flex-row 2xl:w-5/6">
      <div className="mb-2 sm:mb-0 md:px-7 lg:px-10">
        <h6 className="font-bold">Tarjeta</h6>
        <p>{`ALGUNA TARJETA RANDOM`}</p>
      </div>
    </div>
  );
}

export default Payment;
