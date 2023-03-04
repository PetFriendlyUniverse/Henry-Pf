import React from "react";
import s from "./Login.module.css";
import axios from "axios";
import { useState } from "react";
import { ValidationProfile } from "../../pages/ecommerce/Forms/Validations/Profile";
import LinkButton from "../Button/LinkButton";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import close from "../../assets/general/close.svg";

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
  });
  const [errors, setErrors] = useState({
    user: "",
    name: "",
    lastname: "",
    mail: "",
    password: "",
  });
  const [repeatPassword, setRepeatPassword] = useState("");

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
  const handleChangeRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };
  const handletSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post("user/login", login).then(async (res) => {
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
        setTimeout(() => {
          localStorage.removeItem("token");
          localStorage.removeItem("token");
        }, 3600000);
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
    // window.location.href = "https://petfriendly-backend.onrender.com/auth";
    window.location.href = "http://localhost:3001/auth";
    setTimeout(() => {
      console.log("hola");
    }, 20000);
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    const errorValues = Object.values(errors);
    const isFormValid = errorValues.every((val) => val === "");
    if (isFormValid && repeatPassword === form.password) {
      try {
        Swal.fire({
          title: "Now loading",
          allowEscapeKey: false,
          allowOutsideClick: false,

          didOpen: () => {
            Swal.showLoading();
          },
        });
        await axios.post("user/create", form).then(async (res) => {
          await Swal.fire({
            icon: "success",
            title: "El registro se ha sido realizado con éxito!",
            showConfirmButton: true,
            timer: 1500,
            closeOnClickOutside: true,
            closeOnEsc: true,
          });
          setForm({
            user: "",
            name: "",
            lastname: "",
            mail: "",
            password: "",
          });
          setRepeatPassword("");
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "El registro no se ha sido realizado!",
          showConfirmButton: true,
          timer: 1500,
          closeOnClickOutside: true,
          closeOnEsc: true,
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Hay errores en el formulario",
        showConfirmButton: true,
        timer: 1500,
        closeOnClickOutside: true,
        closeOnEsc: true,
      });
    }
  };

  // ----------------------- Modal -----------------------//
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal((prev) => !prev);
  };
  const [mail, setMail] = useState("");
  const handleChageMail = ({ target }) => {
    setMail(target.value);
  };
  const submitConfirmMail = async (e) => {
    e.preventDefault();
    if (mail) {
      Swal.fire({
        title: "Verificando mail",
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      try {
        await axios.post("/user/reset-password", { mail: mail });
        await Swal.fire(
          "Le hemos enviado un correo electrónico de confirmación, por favor verifique su e-mail para continuar"
        );
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data.error,
          showConfirmButton: true,
          closeOnClickOutside: true,
          closeOnEsc: true,
        });
      }
      setMail("");
      setShowModal(false);
    } else {
      Swal.fire({
        icon: "warning",
        title: "Debe ingresar un correo",
        showConfirmButton: true,
        closeOnClickOutside: true,
        closeOnEsc: true,
      });
    }
  };

  // ----------------------- Modal -----------------------//
  return (
    <div className="relative w-full ">
      <div
        className={`fixed top-0 z-50 ${
          showModal ? "flex" : "hidden"
        } h-screen w-screen place-content-center  `}
      >
        <div
          onClick={handleShowModal}
          className={`fixed opacity-60 transition duration-1000 ease-in-out ${
            showModal ? s.modalBG : "hidden"
          } relative h-screen w-screen bg-black `}
        ></div>
        <form
          onSubmit={submitConfirmMail}
          className="absolute top-[45%] flex aspect-[2/1] w-[450px] max-w-[90%] translate-y-[-50%] flex-col items-center justify-center rounded-lg bg-russianviolet"
        >
          <h2 className="mb-8 text-xl text-white">RECUPERAR CONTRASEÑA</h2>
          <span
            onClick={handleShowModal}
            className="absolute top-2 right-2 self-end"
          >
            <img
              src={close}
              alt="Cerrar Modal"
              className="w-6 cursor-pointer transition-all duration-100 ease-in hover:scale-105"
            />
          </span>
          <input
            className="w-4/5 p-1"
            onChange={handleChageMail}
            type="email"
            placeholder="Ingresar e-mail"
            value={mail}
          />
          <button className="mt-4 w-4/5 rounded-sm bg-ultraviolet p-1 text-white hover:scale-y-105 active:scale-100">
            Enviar
          </button>
        </form>
      </div>
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
                required={true}
              />
              <input
                className={s.input}
                onChange={handleChangeLogin}
                value={login.password}
                type="password"
                name="password"
                placeholder="Contraseña"
                required={true}
              />
              <button>Ingresar</button>
              <button type="button" onClick={handleShowModal}>
                Olvidaste tu contraseña?
              </button>
              <button type="button" onClick={handleClickGoogle}>
                Seguir con Google
              </button>
              <div className={s.loginGoogle}>
                <div className="relative w-full"></div>
              </div>
            </form>
          </div>
          {/* ------------------------------------------  register   ----------------------------------------- */}
          <div className={s.register}>
            <form className={s.form} onSubmit={handleSubmitRegister}>
              <label htmlFor={s["chk"]} aria-hidden="true">
                REGISTRARSE
              </label>
              <input
                onChange={handleChange}
                type="text"
                name="user"
                value={form.user}
                className={s.input}
                placeholder="Usuario "
                autoComplete="off"
                required={true}
              />
              {errors.user && (
                <span className="ml-1 -mt-3 text-sm tracking-wide text-red-700">
                  {errors.user}
                </span>
              )}
              <input
                onChange={handleChange}
                className={s.input}
                value={form.name}
                type="text"
                name="name"
                placeholder="Nombre"
                autoComplete="off"
                required={true}
              />
              {errors.name && (
                <span className="ml-1 -mt-3 text-sm tracking-wide text-red-700">
                  {errors.name}
                </span>
              )}
              <input
                onChange={handleChange}
                value={form.lastname}
                className={s.input}
                type="text"
                name="lastname"
                placeholder="Apellido "
                autoComplete="off"
                required={true}
              />
              {errors.lastname && (
                <span className="ml-1 -mt-3 text-sm tracking-wide text-red-700">
                  {errors.lastname}
                </span>
              )}
              <input
                onChange={handleChange}
                className={s.input}
                value={form.mail}
                type="email"
                name="mail"
                placeholder="Mail"
                required={true}
                autoComplete="off"
              />
              {errors.mail && (
                <span className="ml-1 -mt-3 text-sm tracking-wide text-red-700">
                  {errors.mail}
                </span>
              )}
              <input
                className={s.input}
                value={form.password}
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="Contraseña"
                autoComplete="off"
                required={true}
              />
              {errors.password && (
                <span className="ml-1 -mt-3 text-center text-sm tracking-wide text-red-700">
                  {errors.password}
                </span>
              )}
              <input
                onChange={handleChangeRepeatPassword}
                className={s.input}
                type="password"
                name="repeatPassword"
                value={repeatPassword}
                placeholder="Repetir Contraseña "
                autoComplete="off"
                required={true}
              />
              {repeatPassword !== form.password && (
                <p className="text-xs text-red-700">{`Passwords does not match`}</p>
              )}
              <LinkButton component={"Registrate"} />
              <button type="button" onClick={handleClickGoogle}>
                Continuar con Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
