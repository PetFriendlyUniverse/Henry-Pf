import Profile from "../../../assets/general/profile.svg";
import Instagram from "../../../assets/socialmedia/instagram.svg";
import WhatsApp from "../../../assets/socialmedia/whatsapp.svg";

function CardsAccounts() {
  return (
    <div>
      <div className="pb-10">
        <button className="rounded-l bg-cornflowerblue px-2">
          Buscar Usuarios
        </button>
        <input type="text" />
      </div>
      <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-gray-200  dark:border-gray-700 md:max-w-xl md:flex-row">
        <div>
          <img
            src={Profile}
            alt=""
            class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          />
          <div className="">
            <button className="rounded-lg bg-red-700 p-1 hover:bg-red-900">
              Suspender
            </button>
          </div>
        </div>
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-black ">
            Nombre del Usuario
          </h5>
          <p class="mb-3 font-normal text-black ">Finalidad del Usuario</p>
          <div>
            <p class="mb-3 font-normal text-black ">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div>
              <ul className="flex justify-center py-2">
                <li className="px-5">
                  <button>
                    <img src={Instagram} alt="" className="w-6" />
                  </button>
                </li>
                <li className="px-5">
                  <button>
                    <img src={WhatsApp} alt="" className="w-6" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsAccounts;
