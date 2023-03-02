import { useState } from "react";
import { ValidationProfile } from "../ecommerce/Forms/Validations/Profile";
import s from "./ChangePassword.module.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ChangePassword() {
  const navigate = useNavigate();
  const query = window.location.search;
  const params = new URLSearchParams(query);
  const t = params.get("t");

  console.log("esto es t", t);

  const [password, setPassword] = useState("");

  const [newpassword, setnewpassword] = useState("");

  const handleChangenewpassword = (e) => {
    setnewpassword(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
  };

  return (
    <div className={s.login}>
      <form className={s.form} onSubmit={handleSubmit}>
        <label htmlFor={s["chk"]} aria-hidden="true">
          PET FRIENDLY
        </label>
        <input
          className={s.input}
          onChange={handleChangePassword}
          value={password}
          type="password"
          name="password"
          placeholder="Nueva contraseña"
          required={true}
        />
        {/* {errors.password && (
          <span className="ml-1 -mt-3 text-center text-sm tracking-wide text-red-700">
            {errors.password}
          </span>
        )} */}
        <input
          className={s.input}
          onChange={handleChangenewpassword}
          value={newpassword}
          type="password"
          name="password2"
          placeholder="Ingrese nuevamente la nueva contraseña"
          required={true}
        />
        {newpassword !== password && (
          <p className="text-xs text-red-700">{`Passwords does not match`}</p>
        )}
        <button>Ingresar</button>
      </form>
    </div>
  );
}

export default ChangePassword;
