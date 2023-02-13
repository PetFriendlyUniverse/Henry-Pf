import React from "react";

function modal({ children, onClose }) {
  return (
    <div>
      <button></button>
      {children}
    </div>
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
