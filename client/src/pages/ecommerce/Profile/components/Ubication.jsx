function Ubication({
  province,
  locality,
  zip_code,
  street_name,
  street_number,
}) {
  return (
    <div className="mx-2 h-full w-full  max-w-md rounded-2xl border-2 px-2 py-4">
      <div className="py-2">
        <div className="py-2">
          <h4 className="pl-2 font-bold">Provincia:</h4>
        </div>
        <div className="rounded-lg bg-slate-200 py-1 font-semibold">
          <p className="pl-4 text-xs sm:text-base">{province}</p>
        </div>
      </div>
      <div className="py-2">
        <div className="py-2">
          <h4 className="pl-2 font-bold">Localidad:</h4>
        </div>
        <div className="rounded-lg bg-slate-200 py-1 font-semibold">
          <p className="pl-4 text-xs sm:text-base">{locality}</p>
        </div>
      </div>
      <div className="py-2">
        <div className="py-2">
          <h4 className="pl-2 font-bold">Código postal:</h4>
        </div>
        <div className="rounded-lg bg-slate-200 py-1 font-semibold">
          <p className="pl-4 text-xs sm:text-base">{zip_code}</p>
        </div>
      </div>
      <div className="py-2">
        <div className="py-2">
          <h4 className="pl-2 font-bold">Calle:</h4>
        </div>
        <div className="rounded-lg bg-slate-200 py-1 font-semibold">
          <p className="pl-4 text-xs sm:text-base">{street_name}</p>
        </div>
      </div>
      <div className="py-2">
        <div className="py-2">
          <h4 className="pl-2 font-bold">Numeración:</h4>
        </div>
        <div className="rounded-lg bg-slate-200 py-1 font-semibold">
          <p className="pl-4 text-xs sm:text-base">{street_number}</p>
        </div>
      </div>
    </div>
  );
}

export default Ubication;
