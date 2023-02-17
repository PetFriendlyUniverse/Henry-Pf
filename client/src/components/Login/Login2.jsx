import React from "react";
import s from "./Login2.module.css";

function Login2() {
  return (
    <>
      <div className="flex h-screen items-center justify-center pt-20">
        <div class="main">
          <input
            type="checkbox"
            id={s["chk"]}
            aria-hidden="true"
            // className="hidden checked~"
          />

          <div class="relative h-full w-full">
            <form class="flex flex-col gap-3.5 p-6">
              <label
                className="m-[25% 0 5%] flex cursor-pointer justify-center text-3xl font-bold text-white duration-500 ease-in-out"
                htmlFor={s["chk"]}
                aria-hidden="true"
              >
                Log in
              </label>

              <input
                class="h-10 w-full rounded bg-gray-300 p-2"
                type="email"
                name="email"
                placeholder="Email"
                required=""
              />

              <input
                class="h-10 w-full rounded bg-gray-300 p-2"
                type="password"
                name="pswd"
                placeholder="Password"
                required=""
              />
              <button className="h-10 bg-purple-800 text-base text-white">
                Log in
              </button>
            </form>
          </div>

          <div class="duration-800 translate-y-[-2%] animate-coloranim rounded-2xl bg-yellow-500 ease-in-out hover:translate-x-0">
            <form
              className={`flex flex-col gap-3.5 rounded-xl p-6 shadow-2xl lg:h-[550px] lg:w-2/5`}
            >
              <label
                className="flex cursor-pointer justify-center text-3xl font-bold text-purple-800 duration-500 ease-in-out"
                htmlFor={s["chk"]}
                aria-hidden="true"
              >
                Register
              </label>
              <label
                className="flex cursor-pointer justify-center text-3xl font-bold text-purple-800 duration-500 ease-in-out"
                htmlFor={s["chk"]}
                aria-hidden="true"
              ></label>
              <h3 className="mb-6">Registrate</h3>

              <div className="group relative z-0 mb-6 h-11 w-full">
                <input
                  type="text"
                  name="user"
                  className="peer block w-full appearance-none border-0 border-b-2  border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900  focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
                  placeholder=" "
                  autoComplete="off"
                />
                <label className="absolute top-3 -z-10 flex origin-[0] -translate-y-6 scale-75 transform cursor-pointer justify-center text-3xl font-bold text-purple-800 duration-500 ease-in-out peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
                  Nickname max: 15 caracteres
                </label>
              </div>
              <div className="group relative z-0 mb-6 h-11 w-full">
                <input
                  type="text"
                  name="mail"
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900  focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
                  placeholder=" "
                  autoComplete="off"
                />
                <label className="absolute top-3 -z-10 flex origin-[0] -translate-y-6 scale-75 transform cursor-pointer justify-center text-3xl font-bold text-purple-800 duration-500 ease-in-out peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
                  E-mail max: 50 caracteres
                </label>
              </div>

              <div className="group relative z-0 mb-6 h-11 w-full">
                <input
                  type="text"
                  name="password"
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
                  placeholder=" "
                  autoComplete="off"
                />
                <label className="absolute top-3 -z-10 flex origin-[0] -translate-y-6 scale-75  transform cursor-pointer justify-center text-3xl font-bold text-purple-800 duration-500 ease-in-out peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
                  Contraseña max: 20 caracteres
                </label>
              </div>
              <div className="group relative z-0 mb-6 h-11 w-full">
                <input
                  type="text"
                  name="repeatPassword"
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
                  placeholder=" "
                  autoComplete="off"
                />
                <label className="absolute top-3 -z-10 flex origin-[0] -translate-y-6 scale-75  transform cursor-pointer justify-center text-3xl font-bold text-purple-800 duration-500 ease-in-out peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
                  Confirmar Contraseña
                </label>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="group relative z-0 mb-6 h-11 w-full">
                  <input
                    type="text"
                    name="name"
                    className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
                    placeholder=" "
                    autoComplete="off"
                  />
                  <label className="absolute top-3 -z-10 flex origin-[0] -translate-y-6 scale-75 transform cursor-pointer justify-center text-3xl font-bold text-purple-800 duration-500 ease-in-out peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
                    Nombre max: 30 caracteres
                  </label>
                </div>
                <div className="group relative z-0 mb-6 h-11 w-full">
                  <input
                    type="text"
                    name="lastname"
                    className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
                    placeholder=" "
                    autoComplete="off"
                  />
                  <label className="absolute top-3 -z-10 flex origin-[0] -translate-y-6 scale-75  transform cursor-pointer justify-center text-3xl font-bold text-purple-800 duration-500 ease-in-out peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
                    Apellido max: 30 caracteres
                  </label>
                </div>
              </div>
              <div className="mb-7 grid md:grid-cols-2 md:gap-6">
                <div className="group relative z-0 mb-6 h-11 w-full">
                  <input
                    type="number"
                    name="phone"
                    className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
                    placeholder=" "
                    autoComplete="off"
                  />
                  <label className="absolute top-3 -z-10 flex origin-[0] -translate-y-6 scale-75  transform cursor-pointer justify-center text-3xl font-bold text-purple-800 duration-500 ease-in-out peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
                    Telefono max: 20 caracteres
                  </label>
                </div>
                {/* <div className="group relative z-0 mb-6 h-11 w-full">
            <input
      
              type="text"
              name="pets"
              value={form.pets}
              id="pets"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
              placeholder=" "
              autoComplete="off"
            />
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
              Mascotas
            </label>
            {!form.mail ? null : (
              <div>
                <p className="text-red-700">{`Por favor escribe un mail valido`}</p>
              </div>
            )}
          </div> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login2;
