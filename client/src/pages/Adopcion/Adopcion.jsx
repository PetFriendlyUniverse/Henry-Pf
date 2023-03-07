import { InstagramEmbed } from "react-social-media-embed";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPronvinciasAsync } from "../../redux/features/ubicaciones/ubicacionesActions";
import PaginatorAdoption from "./components/PaginarionAdoption.jsx/PaginationAdoption";
import BannerOng from "./components/BannerOng/BannerOng";
import FormAdoption from "./components/FormAdoption/FormAdoption";

function Adopcion() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPronvinciasAsync());
  }, []);

  return (
    <div className="mb-36 flex h-full w-full flex-col items-center bg-adopcion ">
      <h2 className="my-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Pro Patas Rosario & Pet Friendly Universe
      </h2>
      <BannerOng />
      <div className="flex justify-center bg-transparent pb-24 sm:py-32">
        <div className=" border-fray-200 flex w-full flex-col justify-center rounded-xl border-2 px-6 py-10 pb-28 lg:px-8">
          {/* este div de abajo tiene los embeed de instagram */}
          <div className="  mt-10 flex  w-full  flex-wrap  justify-center gap-2  border-t border-gray-200 pt-10 lg:mx-0 lg:max-w-none   lg:grid-cols-3 lg:gap-20 ">
            <div className="my-4 flex w-96 justify-center">
              <InstagramEmbed
                url="https://www.instagram.com/reel/CpSf8fJuQbl/"
                width={328}
                height={500}
              />
            </div>

            <div className="my-4 flex justify-center">
              <InstagramEmbed
                url="https://www.instagram.com/reel/CpRDz4vtIq1/"
                width={328}
                height={500}
              />
            </div>
            <div className="my-4 flex justify-center">
              <InstagramEmbed
                url="https://www.instagram.com/p/CpOrZgNuF3L/"
                width={328}
                height={500}
              />
            </div>
            <div className="my-4 flex justify-center">
              <InstagramEmbed
                url="https://www.instagram.com/reel/CpEDBusNcB4/"
                width={328}
                height={500}
              />
            </div>
            <div className="my-4 flex justify-center">
              <InstagramEmbed
                url="https://www.instagram.com/p/CpDhrWJJuDQ/"
                width={328}
                height={500}
              />
            </div>
            <div className="my-4 flex justify-center">
              <InstagramEmbed
                url="https://www.instagram.com/p/Co-KvuyOZ_I/"
                width={328}
                height={500}
              />
            </div>

            {/* <!-- More posts... --> */}
          </div>
          {/* el de abajo es el div de la card */}
          <div className=" z-10 mt-10 flex h-full  w-full flex-wrap justify-center gap-2 border-t  border-gray-200 pt-10  lg:mx-0 lg:max-w-none   lg:grid-cols-3 lg:gap-20 2xl:h-[600px]">
            <PaginatorAdoption />
          </div>
          {/* abajo esta el formulario para subir adopciones para el user*/}
          <div className="mt-96 flex w-full justify-center">
            <FormAdoption />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adopcion;
