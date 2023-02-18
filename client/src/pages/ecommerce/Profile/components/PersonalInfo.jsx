function PersonalInfo() {
  return (
    <div class="flex w-full flex-col justify-between py-6 px-4 pt-2 sm:w-1/2 sm:px-0 md:w-2/3 lg:w-3/4 xl:w-4/5 xl:flex-row 2xl:w-5/6">
      <div class="mb-2 sm:mb-0 md:px-7 lg:px-10">
        <h6 className="font-bold">Nombre completo:</h6>
        <p>{`Jennifer Aniston`}</p>
      </div>
      <div class="mb-2 sm:mb-0 md:px-7 lg:px-10">
        <h6 className="font-bold">Nombre de Usuario:</h6>
        <p>{`JennAniston`}</p>
      </div>
      <div class="mb-2 sm:mb-0 md:px-7 lg:px-10">
        <h6 className="font-bold">Contraseña:</h6>
        <p>{`***************`}</p>
      </div>
    </div>
  );
}

export default PersonalInfo;
