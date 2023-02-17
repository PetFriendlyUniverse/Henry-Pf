import React from "react";
import s from "./Login.module.css";

function Login() {
  return (
    <>
      <div className="flex h-screen items-center justify-center pt-20">
        <div class={s.main}>
          <input type="checkbox" id={s["chk"]} aria-hidden="true" />

          <div class={s.login}>
            <form class={s.form}>
              <label htmlFor={s["chk"]} aria-hidden="true">
                Log in
              </label>

              <input
                class={s.input}
                type="email"
                name="email"
                placeholder="Email"
                required=""
              />
              <input
                class={s.input}
                type="password"
                name="pswd"
                placeholder="Password"
                required=""
              />
              <button>Log in</button>
            </form>
          </div>

          <div class={s.register}>
            <form class={s.form}>
              <label htmlFor={s["chk"]} aria-hidden="true">
                Register
              </label>
              <input
                class={s.input}
                type="text"
                name="txt"
                placeholder="Username"
                required=""
              />
              <input
                class={s.input}
                type="email"
                name="email"
                placeholder="Email"
                required=""
              />
              <input
                class={s.input}
                type="password"
                name="pswd"
                placeholder="Password"
                required=""
              />
              <button>Register</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
