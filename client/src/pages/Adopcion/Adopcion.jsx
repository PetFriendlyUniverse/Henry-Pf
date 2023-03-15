import PaginationInstagram from "./components/PaginationInstagram/PaginationInstagram.jsx";
import BannerOng from "./components/BannerOng/BannerOng";
import FormAdoption from "./components/FormAdoption/FormAdoption";
import PaginationAdoption from "./components/PaginationAdoption/PaginationAdoption.jsx";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function Adopcion() {
  const adopcion = useSelector((state) => state.Adopciones?.adopcion);
  console.log(adopcion);
  const id = localStorage.getItem("id");
  useEffect(() => {}, [adopcion]);
  return (
    <div className="flex h-full w-full flex-col items-center bg-adopcion pb-36 ">
      <h2 className="my-10 flex text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        <p className="text-russianviolet">Pet </p>
        <p className="text-cornflowerblue">Friendly </p>
        <p className="text-yellow-500">Universe</p>
      </h2>
      <BannerOng />

      <div className="  flex w-full flex-col justify-center  rounded-xl  px-6 lg:px-8">
        <PaginationInstagram />
        <PaginationAdoption />
        {id && (
          <div className="flex w-full justify-center ">
            <FormAdoption />
          </div>
        )}
      </div>
    </div>
  );
}

export default Adopcion;
