import { InstagramEmbed } from "react-social-media-embed";
import { getAllInstagramUrlByApi } from "../../redux/features/adopcion/adopcionActions";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPronvinciasAsync } from "../../redux/features/ubicaciones/ubicacionesActions";
import PaginatorAdoption from "./components/PaginarionAdoption.jsx/PaginationAdoption";
import BannerOng from "./components/BannerOng/BannerOng";
import FormAdoption from "./components/FormAdoption/FormAdoption";

function Adopcion() {
  const instagramUrl1 = useSelector((state) => state.Adopciones.instagramUrls);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPronvinciasAsync());
    dispatch(getAllInstagramUrlByApi());
  }, []);

  return (
    <div className="mb-36 flex h-full w-full flex-col items-center bg-adopcion ">
      <h2 className="my-10 flex text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        <p className="text-russianviolet">Pet </p>
        <p className="text-cornflowerblue">Friendly </p>
        <p className="text-yellow-500">Universe</p>
      </h2>
      <BannerOng />

      <div className="  flex w-full flex-col justify-center gap-10 rounded-xl  px-6 py-10 pb-28 lg:px-8">
        <div className="  flex w-full flex-wrap  justify-center  gap-2  rounded-xl ">
          {instagramUrl1?.map((i) => {
            return (
              <div
                key={i.id}
                className="flex h-[500px] w-[328px] justify-center"
              >
                <InstagramEmbed url={i.url} width={328} height={500} />
              </div>
            );
          })}
        </div>
        {/* <!-- More posts... --> */}
        {/* este div de abajo tiene los embeed de instagram de estoyaqui */}
        {/* <div className="  flex w-full flex-wrap  justify-center  gap-2  rounded-xl lg:mx-0 lg:max-w-none   lg:grid-cols-3  ">
          {" "}
          <div className="my-4 flex w-96 justify-center">
            <InstagramEmbed
              url="https://www.instagram.com/p/CpdsLCKvD-n/"
              width={328}
              height={500}
            />
          </div>
          <div className="my-4 flex w-96 justify-center">
            <InstagramEmbed
              url="https://www.instagram.com/p/CpddlEsvuxa/"
              width={328}
              height={500}
            />
          </div>
          <div className="my-4 flex w-96 justify-center">
            <InstagramEmbed
              url="https://www.instagram.com/p/CpdY4VlvLy1/"
              width={328}
              height={500}
            />
          </div>
        </div> */}
        {/* el de abajo es el div de la card */}
        <PaginatorAdoption />
        {/* abajo esta el formulario para subir adopciones para el user*/}
        <div className="flex w-full justify-center">
          <FormAdoption />
        </div>
      </div>
    </div>
  );
}

export default Adopcion;
