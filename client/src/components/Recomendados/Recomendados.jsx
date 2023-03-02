import eukanubalogo from "../../assets/imagenes/eukanubalogo.png";
import logofawna from "../../assets/imagenes/lolgofawna.png";
import pedigreelogo from "../../assets/imagenes/pedigree.png";
import proplanlogo from "../../assets/imagenes/proplan.jpg";
import vitalcanlogo from "../../assets/imagenes/vitalcanlogo.png";
import royalcaninlogo from "../../assets/imagenes/royal-canin.png";
import { useDispatch } from "react-redux";
import { setFilters } from "../../redux/features/products/productsSlice";
function Recomendados() {
  const dispatch = useDispatch();

  const handleclick = (value) => {
    dispatch(setFilters({ filter: "Brands", value }));
  };
  //  flex  w-full flex-wrap items-center justify-center gap-2 md:gap-6 lg:gap-8 2xl:gap-24
  return (
    <div className="mx-auto grid w-full grid-cols-3 justify-items-center lg:grid-cols-6">
      <button
        className="h-28 w-28 lg:h-36 lg:w-36 2xl:h-52 2xl:w-52"
        onClick={() => handleclick("Royal Canin")}
      >
        <img
          src={royalcaninlogo}
          alt=""
          className="w-full bg-blend-multiply brightness-[1.1]"
        />
      </button>
      <button
        className="h-28 w-28 lg:h-36 lg:w-36 2xl:h-52 2xl:w-52 "
        onClick={() => handleclick("Eukanuba")}
      >
        <img
          src={eukanubalogo}
          alt=""
          className="w-full bg-blend-multiply brightness-[1.1]"
        />
      </button>
      <button
        className=" h-28 w-28 lg:h-36 lg:w-36 2xl:h-52 2xl:w-52"
        onClick={() => handleclick("Fawna")}
      >
        <img src={logofawna} alt="" className="w-full" />
      </button>
      <button className=" h-28 w-28 lg:h-36 lg:w-36 2xl:h-52 2xl:w-52">
        <img
          src={pedigreelogo}
          alt=""
          className="w-full"
          onClick={() => handleclick("Pedigree")}
        />
      </button>
      <button
        className=" h-28 w-28 lg:h-36 lg:w-36 2xl:h-52 2xl:w-52"
        onClick={() => handleclick("Pro Plan")}
      >
        <img
          src={proplanlogo}
          alt=""
          className="w-full bg-blend-multiply brightness-[1.1]"
        />
      </button>
      <button
        className="h-28 w-28 lg:h-36 lg:w-36 2xl:h-52 2xl:w-52"
        onClick={() => handleclick("Vital")}
      >
        <img src={vitalcanlogo} alt="" className="w-full" />
      </button>
    </div>
  );
}

export default Recomendados;
