import { useState } from "react";

function FormProfile() {
  const [form, setForm] = useState({
    mail: "",
    password: "",
    name: "",
    lastname: "",
    phone: "",
    pets: [],
  });
  const [error, setError] = useState({
    mail: "",
    password: "",
    name: "",
    lastname: "",
    phone: "",
  });
  return (
    <div>
      <form>
        <div className="group relative z-0 mb-6 w-full">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="dark:focus:border-blue-500 focus:border-blue-600 peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            className="peer-focus:text-blue-600 peer-focus:dark:text-blue-500 absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium dark:text-gray-400"
          >
            Email address
          </label>
        </div>
        <div className="group relative z-0 mb-6 w-full">
          <input
            type="password"
            name="floating_password"
            id="floating_password"
            className="dark:focus:border-blue-500 focus:border-blue-600 peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white"
            placeholder=" "
            required
          />
          <label
            for="floating_password"
            className="peer-focus:text-blue-600 peer-focus:dark:text-blue-500 absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium dark:text-gray-400"
          >
            Password
          </label>
        </div>
        <div className="group relative z-0 mb-6 w-full">
          <input
            type="password"
            name="repeat_password"
            id="floating_repeat_password"
            className="dark:focus:border-blue-500 focus:border-blue-600 peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white"
            placeholder=" "
            required
          />
          <label
            for="floating_repeat_password"
            className="peer-focus:text-blue-600 peer-focus:dark:text-blue-500 absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium dark:text-gray-400"
          >
            Confirm password
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="group relative z-0 mb-6 w-full">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="dark:focus:border-blue-500 focus:border-blue-600 peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white"
              placeholder=" "
              required
            />
            <label
              for="floating_first_name"
              className="peer-focus:text-blue-600 peer-focus:dark:text-blue-500 absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium dark:text-gray-400"
            >
              First name
            </label>
          </div>
          <div className="group relative z-0 mb-6 w-full">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className="dark:focus:border-blue-500 focus:border-blue-600 peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white"
              placeholder=" "
              required
            />
            <label
              for="floating_last_name"
              className="peer-focus:text-blue-600 peer-focus:dark:text-blue-500 absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium dark:text-gray-400"
            >
              Last name
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="group relative z-0 mb-6 w-full">
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="floating_phone"
              id="floating_phone"
              className="dark:focus:border-blue-500 focus:border-blue-600 peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white"
              placeholder=" "
              required
            />
            <label
              for="floating_phone"
              className="peer-focus:text-blue-600 peer-focus:dark:text-blue-500 absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium dark:text-gray-400"
            >
              Phone number (123-456-7890)
            </label>
          </div>
          <div className="group relative z-0 mb-6 w-full">
            <input
              type="text"
              name="floating_company"
              id="floating_company"
              className="dark:focus:border-blue-500 focus:border-blue-600 peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white"
              placeholder=" "
              required
            />
            <label
              for="floating_company"
              className="peer-focus:text-blue-600 peer-focus:dark:text-blue-500 absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium dark:text-gray-400"
            >
              Company (Ex. Google)
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 sm:w-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormProfile;
