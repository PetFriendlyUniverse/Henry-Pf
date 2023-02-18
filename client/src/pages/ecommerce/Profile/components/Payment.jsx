import React from "react";

function Payment() {
  return (
    <div class="flex flex-col justify-between py-6 sm:flex-row">
      <div class="w-full px-4 sm:w-1/2 sm:px-0 md:w-2/3 lg:w-3/4 xl:w-4/5 2xl:w-5/6">
        <div class="flex flex-col pt-2 sm:flex-row md:flex-row">
          <div class="mb-2 px-10 sm:mb-0">
            <h6 className="font-bold">Tarjeta</h6>
            <p>{`Buenos Aires`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
