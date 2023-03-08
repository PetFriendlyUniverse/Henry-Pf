export const GeneralValidations = (property, value) => {
  let stringRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/;
  let numberRegex = /^[0-9]+$/;
  let stringNumberRegex = /^[a-zA-Z0-9 ]*$/;

  let error = {};

  /* 
    description: "", */

  if (property === "province" && !value) {
    error.province = "Ingrese la provincia en la que se encuentra su Tienda";
  } else if (property === "province") {
    if (!stringRegex.test(value)) {
      error.province = "Por favor ingrese su Provincia sin números o signos";
    } else if (value.length > 15) {
      error.province = "El nombre es demasiado largo";
    } else {
      error.province = "";
    }
  }

  if (property === "locality" && !value) {
    error.locality = "Ingrese la localidad en la que se encuentra su Tienda";
  } else if (property === "locality") {
    if (!stringNumberRegex.test(value)) {
      error.locality = "Por favor ingrese su Localidad sin números o signos";
    } else if (value.length > 15) {
      error.locality = "El nombre es demasiado largo";
    } else {
      error.locality = "";
    }
  }

  if (property === "description" && !value) {
    error.description = "Por favor ingrese una descripción extensa";
  } else if (property === "description") {
    if (property.includes("http://")) {
      error.description = "No aceptamos links en la descripción";
    } else {
      error.description = "";
    }
  }

  return error;
};
