import PaginationInstagram from "./components/PaginationInstagram/PaginationInstagram.jsx";
import BannerOng from "./components/BannerOng/BannerOng";
import FormAdoption from "./components/FormAdoption/FormAdoption";
import PaginationAdoption from "./components/PaginationAdoption/PaginationAdoption.jsx";

function Adopcion() {
  return (
    <div className="mb-36 flex h-full w-full flex-col items-center bg-adopcion ">
      <h2 className="my-10 flex text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        <p className="text-russianviolet">Pet </p>
        <p className="text-cornflowerblue">Friendly </p>
        <p className="text-yellow-500">Universe</p>
      </h2>
      <BannerOng />

      <div className="  flex w-full flex-col justify-center gap-10 rounded-xl  px-6 py-10 pb-28 lg:px-8">
        <PaginationInstagram />
        <PaginationAdoption />
        <div className="flex w-full justify-center">
          <FormAdoption />
        </div>
      </div>
    </div>
  );
}

export default Adopcion;
