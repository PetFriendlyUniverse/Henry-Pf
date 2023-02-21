import React from "react";
import s from "./Login.module.css";
import axios from "axios";
import { useState } from "react";
import { validationProfile } from "../../pages/ecommerce/Forms/Validations/Profile";
import LinkButton from "../Button/LinkButton";
import Swal from "sweetalert2";

function Login() {
  const [form, setForm] = useState({
    user: "",
    name: "",
    lastname: "",
    mail: "",
    password: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    user: "",
    name: "",
    lastname: "",
    mail: "",
    password: "",
    phone: "",
  });
  const [repeat, setRepeat] = useState({
    repeatPassword: "",
  });
  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    if (property === "pets") {
      //Esto todavia no hay que tenerlo en cuenta
      setForm({ ...form, [property]: [value] });
    } else {
      setForm({ ...form, [property]: value });
      setErrors({ ...errors, ...validationProfile(property, value) }); //NO CAMBIAR ESTO POR DIOS
    }
  };
  const handleChangeRepeat = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setRepeat({ [property]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errorValues = Object.values(errors);
    const isFormValid = errorValues.every((val) => val === "");
    if (isFormValid) {
      axios
        .post("user/create", form)
        .then((res) =>
          Swal.fire({
            icon: "success",
            title: "El registro se ha sido realizado con éxito!",
            showConfirmButton: true,
            timer: 1500,
          })
        )
        .catch((err) => console.log(err));
      setForm({
        user: "",
        name: "",
        lastname: "",
        mail: "",
        password: "",
        phone: "",
      });
      setRepeat({
        repeatPassword: "",
      });
    } else {
      console.log("Hay errores en el formulario");
    }
  };

  // const handleClick = async () => {
  //   await Swal.fire({
  //     icon: "success",
  //     title: "El registro se ha sido realizado con éxito!",
  //     showConfirmButton: true,
  //     timer: 1500,
  //   });
  // };

  return (
    <>
      <div className="flex h-screen items-center justify-center pt-20">
        <div className={s.main}>
          <input type="checkbox" id={s["chk"]} aria-hidden="true" />

          <div className={s.login}>
            <form className={s.form}>
              <label htmlFor={s["chk"]} aria-hidden="true">
                Log in
              </label>

              <input
                className={s.input}
                onChange={handleChange}
                type="email"
                name="mail"
                placeholder="Email"
                required=""
              />
              <input
                className={s.input}
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="Password"
                required=""
              />
              <button>Log in</button>
            </form>
          </div>

          <div className={s.register}>
            <form className={s.form} onSubmit={handleSubmit}>
              <label htmlFor={s["chk"]} aria-hidden="true">
                Register
              </label>
              <div className="relative flex flex-col">
                <input
                  onChange={handleChange}
                  type="text"
                  name="user"
                  value={form.user}
                  className={s.input}
                  placeholder=" Username "
                  autoComplete="off"
                  required="true"
                />
                {errors.user && (
                  <span className=" absolute top-8 ml-1 text-xs text-red-500">
                    {errors.user}
                  </span>
                )}
              </div>
              <div className="relative flex flex-col">
                <input
                  onChange={handleChange}
                  className={s.input}
                  value={form.name}
                  type="text"
                  name="name"
                  placeholder=" Name "
                  autoComplete="off"
                  required="true"
                />
                {errors.name && (
                  <span className="absolute top-8 ml-1 text-xs text-red-500">
                    {errors.name}
                  </span>
                )}
              </div>
              <div className="relative flex flex-col">
                <input
                  onChange={handleChange}
                  value={form.lastname}
                  className={s.input}
                  type="text"
                  name="lastname"
                  placeholder=" Lastname "
                  autoComplete="off"
                  required="true"
                />
                {errors.lastname && (
                  <span className=" absolute top-8 ml-1 text-xs text-red-500">
                    {errors.lastname}
                  </span>
                )}
              </div>
              <div className="relative flex flex-col">
                <input
                  onChange={handleChange}
                  className={s.input}
                  value={form.mail}
                  type="email"
                  name="mail"
                  placeholder=" Email"
                  required="true"
                  autoComplete="off"
                />
                {errors.mail && (
                  <span className=" absolute top-8 ml-1 text-xs text-red-500">
                    {errors.mail}
                  </span>
                )}
              </div>
              <div className="relative flex flex-col">
                <input
                  onChange={handleChange}
                  value={form.phone}
                  className={s.input}
                  type="number"
                  name="phone"
                  placeholder=" Phone"
                  autoComplete="off"
                  required="true"
                />
                {errors.phone && (
                  <span className="absolute top-8 ml-1 text-xs text-red-500">
                    {errors.phone}
                  </span>
                )}
              </div>
              <div className="relative flex flex-col">
                <input
                  className={s.input}
                  value={form.password}
                  onChange={handleChange}
                  type="password"
                  name="password"
                  placeholder=" Password"
                  autoComplete="off"
                  required="true"
                />

                {errors.password && (
                  <span className="absolute top-8 ml-1 text-xs text-red-500">
                    {errors.password}
                  </span>
                )}
              </div>

              <div className="relative flex flex-col">
                <input
                  onChange={handleChangeRepeat}
                  className={s.input}
                  type="password"
                  name="repeatPassword"
                  value={repeat.repeatPassword}
                  placeholder=" Repeat Password "
                  autoComplete="off"
                  required="true"
                />
                {/* {errors.password === errors.repeatPassword ? null : (
                  <div>
                    <p className="absolute top-8 ml-1 text-xs text-red-700">{`Passwords does not match`}</p>
                  </div>
                )} */}
              </div>
              <button onSubmit={handleSubmit}>Registrar</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
