import React from "react";
import 

function modal({ children, onClose }) {
  return (
    <modal>
      <div class="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div class="signup">
          <form>
            <label for="chk" aria-hidden="true">
              Sign up
            </label>
            <input type="text" name="txt" placeholder="User name" required="" />
            <input type="email" name="email" placeholder="Email" required="" />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <button>Sign up</button>
          </form>
        </div>

        <div class="login">
          <form>
            <label for="chk" aria-hidden="true">
              Login
            </label>
            <input type="email" name="email" placeholder="Email" required="" />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <button>Login</button>
            <button onClick={onClose}></button>
          </form>
        </div>
      </div>
    </modal>
  );
}

export default modal;

{
  /*
// ejemplo de uso

<Modal>
  contenido
  del 
  modal
</Modal> 

*/
}
