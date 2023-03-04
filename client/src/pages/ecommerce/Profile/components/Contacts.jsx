function Contacts({ area_code, number, mail }) {
  //  flex w-full flex-col justify-between py-6 px-4  pt-2
  return (
    <div className="w-11/12 max-w-md rounded-2xl border-2 px-4  ">
      {/* <div className="w-full rounded-2xl border-2  px-4 pt-2  sm:px-0  xl:flex-row ">
        <table className="flex w-full border-collapse flex-col ">
          <tbody>
            <tr className="flex justify-around bg-white py-1">
              <th className="w-1/2 border-r-2 border-gray-500 ">
                <h4 className="font-bold">Telefono:</h4>
              </th>
              <th className="w-1/2 ">
                <h4 className=" font-bold">Correo Electronico:</h4>
              </th>
            </tr>

            <tr className="flex justify-around bg-slate-200 py-1">
              <th className="w-1/2 border-r-2 border-white">
                <p>{!!area_code && !!number && `${area_code}- ${number}`}</p>
              </th>
              <th className="w-1/2">
                <p> {mail}</p>
              </th>
            </tr>
          </tbody>
        </table>
      </div> */}
      <div className="py-2">
        <div className="py-2">
          <h4 className="pl-2 font-bold">Teléfono:</h4>
        </div>
        <div className="rounded-lg bg-slate-200 py-1 font-semibold">
          <p className=" pl-4 text-xs sm:text-base">
            {!!area_code && !!number && `${area_code}- ${number}`}
          </p>
        </div>
      </div>
      <hr className="h-px bg-black " />
      <div className="py-2">
        <div className="py-2">
          <h4 className="pl-2 text-base font-bold">Correo Electrónico:</h4>
        </div>
        <div className="rounded-lg bg-slate-200 py-1 font-semibold">
          <span className="pl-4  text-xs sm:text-base"> {mail}</span>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
