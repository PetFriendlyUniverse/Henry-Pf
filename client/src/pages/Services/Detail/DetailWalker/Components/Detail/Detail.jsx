import Qualification from "../Qualification/Qualification";

function Detail({
  name,
  img,
  price_hour,
  price_day,
  province,
  locality,
  area_code,
  number,
  mail,
  street_name,
  street_number,
}) {
  return (
    <div className="flex justify-center text-white">
      <div className="max-w-[600px] rounded-lg border-2 border-black bg-cornflowerblue p-2">
        <div className="flex justify-center">
          <img src={`${img}`} alt={`${img}`} className=" rounded-lg" />
        </div>
        <div className="flex justify-center py-4">
          <p className="font-bold md:text-2xl lg:text-3xl">{`${name}`}</p>
        </div>
        {/* <div>
          <Qualification />
        </div> */}
        <div className="px-10 py-2">
          <p className="">Precio por hora: {`${price_hour}`} (c/u)</p>
          {price_day ? <p>Precio por dia: {`${price_day}`} (c/u)</p> : null}
        </div>
        <div className="px-10 py-2">
          <p className="py-4">
            Provincia:
            {province ? ` ${province} ` : " No disponible"}
          </p>
          <p className="py-4">
            Localidad:
            {locality ? ` ${locality}` : " No disponible"}
          </p>
          {street_name && (
            <p>Dirección: {`${street_name} - ${street_number}`}</p>
          )}
        </div>
        <div className="px-10 py-2">
          <h6>Contacto:</h6>
          <div className="flex justify-evenly">
            {area_code ? <p>{`${area_code} - ${number}`}</p> : "No disponible"}
            {mail && <p>{`${mail}`}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
