function UbicationStore({
  province,
  locality,
  zip_code,
  street_name,
  street_number,
}) {
  return (
    <div className="flex w-full flex-col justify-between py-6 px-4 pt-2 sm:w-1/2 sm:px-0 md:w-2/3 lg:w-3/4 xl:w-4/5 xl:flex-row 2xl:w-5/6">
      <div className="mb-2 sm:mb-0 md:px-7 lg:px-10">
        <h6 className="font-bold">Provincia:</h6>
        <p>{province || "Actualmente no tienes una provincia "}</p>
      </div>
      <div className="mb-2 sm:mb-0 md:px-7 lg:px-10">
        <h6 className="font-bold">Localidad</h6>
        <p>{locality || "Actualmente no tienes una localidad"}</p>
      </div>
      <div className="mb-2 sm:mb-0 md:px-7 lg:px-10">
        <h6 className="font-bold">Codigo Postal</h6>
        <p>{zip_code || "Actualmente no tienes un codigo postal"}</p>
      </div>
      <div className="mb-2 sm:mb-0 md:px-7 lg:px-10">
        <h6 className="font-bold">Calle</h6>
        <p>{street_name || "Actualmente no tienes una calle"}</p>
      </div>
      <div className="mb-2 sm:mb-0 md:px-7 lg:px-10">
        <h6 className="font-bold">Numeracion</h6>
        <p>{street_number || "Actualmente no tienes una numeracion"}</p>
      </div>
    </div>
  );
}

export default UbicationStore;
