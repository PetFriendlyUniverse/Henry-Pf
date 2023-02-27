import React from "react";
import { ValidationProfile } from "../ecommerce/Forms/Validations/Profile";
import { useState } from "react";

function FormPassword() {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const validatePassword2 = () => {
    if (password.campo.length > 0) {
      if (password.campo !== password2.campo) {
        setPassword2((prevState) => {
          return { ...prevState, value: "false" };
        });
      } else {
        setPassword2((prevState) => {
          return { ...prevState, value: "true" };
        });
      }
    }
  };
  return (
    <>
      <form action="">
        <label htmlFor="">Contraseña (max: 20 caracteres)</label>
        <input
          type="password"
          name="password"
          value={password}
          placeholder=""
        />

        <label htmlFor="">Repetir constraseña</label>
        <input
          type="password"
          name="password2"
          value={password2}
          placeholder=""
        />
      </form>
    </>
  );
}

export default FormPassword;
