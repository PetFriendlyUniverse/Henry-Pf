import React from "react";
import s from "./Login.module.css";
import axios from "axios";
import { useState } from "react";
import { ValidationProfile } from "../../pages/ecommerce/Forms/Validations/Profile";
import LinkButton from "../Button/LinkButton";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    mail: "",
    password: "",
  });
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
  // const [repeat, setRepeat] = useState({
  //   repeatPassword: "",
  // });
  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    if (property === "pets") {
      //Esto todavia no hay que tenerlo en cuenta
      setForm({ ...form, [property]: [value] });
    } else {
      setForm({ ...form, [property]: value });
      setErrors({ ...errors, ...ValidationProfile(property, value) }); //NO CAMBIAR ESTO POR DIOS
    }
  };
  const handleChangeLogin = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setLogin({ ...login, [property]: value });
  };
  // const handleChangeRepeat = (e) => {
  //   const property = e.target.name;
  //   const value = e.target.value;
  //   // setRepeat({ [property]: value });
  // };
  const handletSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post("user/login", login).then(async (res) => {
        console.log("then");
        const token = res.data.token;
        const id = res.data.id;
        localStorage.setItem("token", token);
        localStorage.setItem("id", id);
        await Swal.fire({
          icon: "success",
          title: "El ingreso se ha sido realizado con éxito!",
          showConfirmButton: true,
          timer: 1500,
        });
        navigate("/shop");
      });
    } catch (error) {
      console.log("error");
      Swal.fire({
        icon: "error",
        title: "Usuario o contraseña incorrecto!",
        showConfirmButton: true,
        timer: 1500,
      });
    }
  };

  const handleClickGoogle = () => {
    window.location.href = "http://localhost:3001/auth";
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
        .catch(
          Swal.fire({
            icon: "error",
            title: "El registro no se ha sido realizado!",
            showConfirmButton: true,
            timer: 1500,
          })
        );
      setForm({
        user: "",
        name: "",
        lastname: "",
        mail: "",
        password: "",
        phone: "",
      });
      // setRepeat({
      //   repeatPassword: "",
      // });
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
            <form onSubmit={handletSubmitLogin} className={s.form}>
              <label htmlFor={s["chk"]} aria-hidden="true">
                PET FRIENDLY
              </label>

              <input
                className={s.input}
                onChange={handleChangeLogin}
                value={login.mail}
                type="email"
                name="mail"
                placeholder="Mail"
                required=""
              />
              <input
                className={s.input}
                onChange={handleChangeLogin}
                value={login.password}
                type="password"
                name="password"
                placeholder="Contraseña"
                required=""
              />
              <button>Ingresar</button>
              <div className={s.loginGoogle}>
                <button type="button" onClick={handleClickGoogle}>
                  Click para seguir con google
                </button>
              </div>
            </form>
          </div>
          <div className={s.register}>
            <form className={s.form} onSubmit={handleSubmit}>
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
                placeholder="Teléfono"
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
              {/* <input
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
              )} */}
              <LinkButton component={"Registrate"} />
              <button type="button" onClick={handleClickGoogle}>
                Click para registrarte con google
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
