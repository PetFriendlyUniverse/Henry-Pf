function UbicationWalker({
  province,
  locality,
  zip_code,
  street_name,
  street_number,
}) {
  return (
    <div className="5 flex h-full w-full flex-col justify-between py-6 px-4  pt-2  ">
      <div className="h-full w-full rounded-2xl border-2  px-4 pt-2  sm:px-0  xl:flex-row ">
        <table className="flex h-full w-full border-collapse flex-col ">
          <tr className="flex h-full justify-around bg-white py-1">
            <th className="w-1/5 border-r-2 ">
              <h4 className="font-bold">Provincia:</h4>
            </th>
            <th className="w-1/5 border-r-2">
              <h4 className=" font-bold">Localidad:</h4>
            </th>
            <th className="w-1/5 border-r-2">
              <h4 className=" font-bold">Código Postal:</h4>
            </th>
            <th className="w-1/5 border-r-2">
              <h4 className=" font-bold">Calle:</h4>
            </th>
            <th className="w-1/5 ">
              <h4 className=" font-bold">Numeración:</h4>
            </th>
          </tr>

          <tr className="flex  justify-around bg-slate-200 py-1">
            <th
              className="w-1/5 border-r-2
             border-white"
            >
              <p>{province ? province : "No disponible"}</p>
            </th>
            <th className="w-1/5 border-r-2">
              <p> {locality ? locality : "No disponible"}</p>
            </th>
            <th className="w-1/5 border-r-2">
              <p> {zip_code ? zip_code : "No disponible"}</p>
            </th>
            <th className="w-1/5 border-r-2">
              <p> {street_name ? street_name : "No disponible"}</p>
            </th>
            <th className="w-1/5 ">
              <p> {street_number ? street_number : "No disponible"}</p>
            </th>
          </tr>
        </table>
      </div>

      <div className="mb-2 sm:mb-0 md:px-7 lg:px-10"></div>
    </div>
  );
}

export default UbicationWalker;
