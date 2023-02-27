function Contacts({
  area_code,
  number,
  area_code_emergency,
  emergency_number,
  mail,
}) {
  return (
    <div class="flex w-full flex-col justify-between py-6 px-4 pt-2 sm:w-1/2 sm:px-0 md:w-2/3 lg:w-3/4 xl:w-4/5 xl:flex-row 2xl:w-5/6">
      <div class="mb-2 sm:mb-0 md:px-7 lg:px-10">
        <h6 class="font-bold">Telefóno:</h6>
        <p class="text-sm">{`${area_code}-${number}`}</p>
      </div>
      <div class="mb-2 sm:mb-0 md:px-7 lg:px-10">
        <h6 class="font-bold">Contacto de Emergencia:</h6>
        <p class="text-sm">
          {`${area_code_emergency}-${emergency_number}` ||
            "Actualmente no tienes ningún contacto de emergencia"}
        </p>
      </div>
      <div class="mb-2 sm:mb-0 md:px-7 lg:px-10">
        <h6 class="font-bold">Mail:</h6>
        <p class="text-sm">{mail}</p>
      </div>
    </div>
  );
}

export default Contacts;
