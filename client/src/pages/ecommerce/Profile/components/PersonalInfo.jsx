function PersonalInfo({ lastname, name, user }) {
  return (
    <div className="w-3/4 max-w-md rounded-2xl border-2 px-4 ">
      <div className="py-2">
        <div className="py-2">
          <h4 className="pl-2 font-bold">Nombre completo:</h4>
        </div>
        <div className="rounded-lg bg-slate-200 py-1 font-semibold">
          <p className="pl-4 text-xs sm:text-base">
            {name} {lastname}
          </p>
        </div>
      </div>
      <hr className="h-px bg-black " />
      <div className="py-2">
        <div className="py-2">
          <h4 className="pl-2 font-bold">Nombre de Usuario:</h4>
        </div>
        <div className="rounded-lg bg-slate-200 py-1 font-semibold">
          <p className="pl-4 text-xs sm:text-base"> {user}</p>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
