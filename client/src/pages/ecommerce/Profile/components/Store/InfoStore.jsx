function InfoStore({ name }) {
  return (
    // <div className="flex w-full flex-col justify-between py-6 px-4 pt-2 sm:w-1/2 sm:px-0 md:w-2/3 lg:w-3/4 xl:w-4/5 xl:flex-row 2xl:w-5/6">

    <div className="flex h-56 w-4/5 flex-col py-2 sm:w-3/5 2xl:w-2/5">
      <div className="py-2">
        <h4 className="pl-2 font-bold">Nombre de la Tienda:</h4>
      </div>
      <div className="rounded-lg bg-slate-200 py-1 font-semibold">
        <p className="pl-4 text-center text-xs sm:text-base">{name}</p>
      </div>
    </div>
  );
}

export default InfoStore;
