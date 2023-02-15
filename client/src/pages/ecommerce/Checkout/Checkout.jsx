function Checkout() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-slate-200 pt-20">
      <div className="my-4 flex h-screen max-h-[80vh] min-w-[60vw] flex-row items-center justify-center ">
        <div className="m-4 flex h-full w-4/6 flex-col  items-center justify-center rounded-lg border bg-white px-6 ">
          <div className="m-6 flex h-[8%] w-full items-center justify-center rounded-lg border bg-blue-200 px-6 text-center  text-xs  text-gray-600">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour
          </div>
          <div className=" flex h-3/6 w-full  items-center justify-center border">
            aca van los componentes de los productos comprados
          </div>
          <div className=" flex h-2/6 w-full items-center justify-center border">
            aca van las cards de los productos
          </div>
        </div>
        <div className=" flex h-4/6 w-2/6 flex-col self-start ">
          <div className="m-4 flex h-1/6 w-full  items-center justify-center rounded-lg bg-blue-200  text-lg text-blue-700">
            Tenes un cupon de descuento??
          </div>
          <div className="m-4 flex h-5/6 w-full flex-col items-center justify-between  p-2">
            <h1 className=" self-start text-3xl font-bold  text-gray-900">
              Resumen de mi orden
            </h1>
            <h3 className="self-start text-xl font-medium text-blue-700">
              Promociones aplicadas
            </h3>
            <span className="self-start text-gray-500">
              producto descripcion breve lorem iptsu
            </span>
            <hr className="my-2 h-[0.10rem] w-full border-0 bg-gray-400" />
            <div className="flex w-full justify-between">
              <span className="text-gray-500">subtotal</span>
              <span className="text-gray-500">1000.00</span>
            </div>
            <hr className="my-2 h-[0.10rem] w-full border-0 bg-gray-400" />
            <div className="flex w-full  justify-between text-lg">
              <h3 className=" font-bold text-gray-900">Total</h3>
              <h3 className=" font-bold  text-blue-700">1000.00</h3>
            </div>

            <button
              type="button"
              className=" w-full self-end rounded-lg bg-emerald-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-900"
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
