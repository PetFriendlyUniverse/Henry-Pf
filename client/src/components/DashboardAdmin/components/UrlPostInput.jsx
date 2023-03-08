import { useState } from "react";
import axios from "axios";

function UrlPostInput() {
  const [inputValue, setInputValue] = useState("");

  const submitHandler = async () => {
    await axios.post("/adoption/instagram/create", {
      url: inputValue,
    });
  };

  return (
    <form className="h-full w-full flex-col py-4 " onSubmit={submitHandler}>
      <span>
        Ingrese el link de la publicacion de instagram que desee compartir
      </span>
      <div className="flex w-full justify-center  py-10">
        <input
          className="w-[200px] text-black  sm:w-2/6"
          type="text"
          placeholder="pega el link aqui"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className=" w-[80px] border-2 border-white sm:w-1/6"
          title="subir publicacion a adopciones"
        >
          Postear
        </button>
      </div>
    </form>
  );
}

export default UrlPostInput;
