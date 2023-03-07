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
    <div className="flex justify-center">
      <div className="w-4/6">
        <div className="">
          <img src={`${img}`} alt={`${img}`} className="w-full" />
        </div>
        <div>
          <p className="font-bold md:text-2xl lg:text-3xl">{`${name}`}</p>
        </div>
        <div>
          <Qualification />
        </div>
        <div>
          <p>Precio por hora: {`${price_hour}`} (c/u)</p>
          {price_day ? <p>Precio por dia: {`${price_day}`} (c/u)</p> : null}
        </div>
        <div>
          <p>
            Provincia:
            {province ? ` ${province} ` : " No disponible"}
          </p>
          <p>
            Localidad:
            {locality ? ` ${locality}` : " No disponible"}
          </p>
          {street_name && (
            <p>Direccion: {`${street_name} - ${street_number}`}</p>
          )}
        </div>
        <div>
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
