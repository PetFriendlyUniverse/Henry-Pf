import React from "react";
import s from "./Login.module.css";
import axios from "axios";
import { useState } from "react";
import { validationProfile } from "../../pages/ecommerce/Forms/Validations/Profile";
import LinkButton from "../Button/LinkButton";

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
      setForm({ ...form, [property]: [value] });
    } else {
      setForm({ ...form, [property]: value });
      setErrors({ ...errors, ...validationProfile(property, value) });
      //setError(validateProduct(property, value));
    }
  };
  const handleChangeRepeat = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setRepeat({ [property]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("user/create", form);
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
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center pt-20">
        <div class={s.main}>
          <input type="checkbox" id={s["chk"]} aria-hidden="true" />

          <div class={s.login}>
            <form class={s.form}>
              <label htmlFor={s["chk"]} aria-hidden="true">
                PET FRIENDLY
              </label>

              <input
                class={s.input}
                onChange={handleChange}
                type="email"
                name="mail"
                placeholder="Mail"
                required=""
              />
              <input
                class={s.input}
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="Contraseña"
                required=""
              />
              <button>Ingresar</button>
            </form>
          </div>

          <div class={s.register}>
            <form class={s.form} onSubmit={handleSubmit}>
              <label htmlFor={s["chk"]} aria-hidden="true">
                Registrarse
              </label>
              <input
                onChange={handleChange}
                type="text"
                name="user"
                value={form.user}
                class={s.input}
                placeholder="Usuario "
                autoComplete="off"
                required="true"
              />
              {errors.user && (
                <span className=" text-xs text-red-500">{errors.user}</span>
              )}
              <input
                onChange={handleChange}
                class={s.input}
                value={form.name}
                type="text"
                name="name"
                placeholder="Nombre"
                autoComplete="off"
                required="true"
              />
              {errors.name && (
                <span className="text-xs text-red-500">{errors.name}</span>
              )}
              <input
                onChange={handleChange}
                value={form.lastname}
                class={s.input}
                type="text"
                name="lastname"
                placeholder="Apellido "
                autoComplete="off"
                required="true"
              />
              {errors.lastname && (
                <span className="text-xs text-red-500">{errors.lastname}</span>
              )}
              <input
                onChange={handleChange}
                class={s.input}
                value={form.mail}
                type="email"
                name="mail"
                placeholder="Mail"
                required="true"
                autoComplete="off"
              />
              {errors.mail && (
                <span className="text-xs text-red-500">{errors.mail}</span>
              )}
              <input
                onChange={handleChange}
                value={form.phone}
                class={s.input}
                type="number"
                name="phone"
                placeholder=" Teléfono"
                autoComplete="off"
                required="true"
              />
              {errors.phone && (
                <span className="text-xs text-red-500">{errors.phone}</span>
              )}
              <input
                class={s.input}
                value={form.password}
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="Contraseña"
                autoComplete="off"
                required="true"
              />
              {errors.password && (
                <span className="text-xs text-red-500">{errors.password}</span>
              )}
              <input
                onChange={handleChangeRepeat}
                class={s.input}
                type="password"
                name="repeatPassword"
                value={repeat.repeatPassword}
                placeholder="Repetir Contraseña "
                autoComplete="off"
                required="true"
              />
              {errors.password === errors.repeatPassword ? null : (
                <div>
                  <p className="text-xs text-red-700">{`Passwords does not match`}</p>
                </div>
              )}
              <LinkButton />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
