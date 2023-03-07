import proPatas from "../../../../assets/imagenes/propatas.png";
import estoyAqui from "../../../../assets/imagenes/estoyAqui.png";

function BannerOng() {
  return (
    <div className="mx-auto flex w-full   justify-evenly  ">
      <a href="https://www.instagram.com/propatasrosario/">
        <img
          src={proPatas}
          alt="Pro Patas Rosario (ONG)"
          title="Pro Patas Rosario (ONG)"
          className="aspect-square w-48"
        />
      </a>

      <a href="https://es-la.facebook.com/EstoyAquiMendoza/">
        <img
          src={estoyAqui}
          alt="Estoy Aqui Mendoza (ONG)"
          title="Estoy Aqui Mendoza (ONG)"
          className="aspect-square w-48"
        />
      </a>
    </div>
  );
}

export default BannerOng;
