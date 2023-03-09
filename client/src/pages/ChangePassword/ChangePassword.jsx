import { useState } from "react";
import s from "./ChangePassword.module.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { validationPassword } from "./validationPassword";

function ChangePassword() {
  const navigate = useNavigate();
  const query = window.location.search;
  const params = new URLSearchParams(query);
  const t = params.get("t");

  const [password, setPassword] = useState("");
  const [newpassword, setnewpassword] = useState("");
  const [error, setError] = useState("");

  const handleChangenewpassword = (e) => {
    setnewpassword(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    setError(validationPassword(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== newpassword) {
      Swal.fire({
        icon: "error",
        title: "Las contraseñas deben coincidir!",
        showConfirmButton: true,
        timer: 1500,
      });
    }

    if (!error && password === newpassword) {
      try {
        await axios.put(`user/change-password/${t}`, { password });
        await Swal.fire({
          icon: "success",
          title: "Contraseña reestablecida!",
          showConfirmButton: true,
          timer: 1500,
        });
        navigate("/login");
      } catch (error) {
        await Swal.fire({
          icon: "error",
          title: error.response.data.error,
          showConfirmButton: true,
          timer: 1500,
        });
        navigate("/login");
      }
    }
  };

  return (
    <div className={s.login}>
      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.contenedor}>
          <label htmlFor={s["chk"]} aria-hidden="true">
            PET FRIENDLY
          </label>
          <input
            className={s.input}
            onChange={handleChangePassword}
            value={password}
            type="password"
            name="password"
            placeholder="  Nueva contraseña"
            required={true}
          />
          {error && (
            <span className="ml-1 -mt-3 text-center text-xs tracking-wide text-red-700">
              {error}
            </span>
          )}
          <input
            className={s.input}
            onChange={handleChangenewpassword}
            value={newpassword}
            type="password"
            name="password2"
            placeholder="  Ingrese nuevamente la contraseña"
            required={true}
          />
          {newpassword !== password && newpassword && (
            <p className="text-xs text-red-700">{`Las contraseñas no coinciden`}</p>
          )}
          <button>Ingresar</button>
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;
