export const ValidateStore = (property, value) => {
  let stringRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;
  let numberRegex = /^[0-9]+$/;

  let error = {};

  if (property === "name" && !value) {
    error.name = "Debe ingresar un nombre para su tienda";
  } else if (property === "name") {
    if (!stringRegex.test(value)) {
      error.name =
        "Por favor ingrese el nombre de la tienda sin numeros o signos";
    } else if (value.length > 30) {
      error.name = "El nombre no debe superar los 30 caracteres";
    } else {
      error.name = "";
    }
  }

  if (property === "phone" && !value) {
    error.phone = "Debe ingresar un numero telefonico para su tienda";
  } else if (property === "phone") {
    if (!numberRegex.test(value)) {
      error.phone =
        "Por favor ingrese un telefono para la tienda sin letras o signos";
    } else if (value.length > 30 || value.length < 6) {
      error.phone = "Por favor ingrese un telefono valido";
    } else {
      error.phone = "";
    }
  }

  if (property === "province" && !value) {
    error.province = "Por favor ingrese su provincia";
  } else if (property === "province") {
    if (!stringRegex.test(value)) {
      error.province =
        "Por favor ingrese el nombre de la provincia donde se encuentra su tienda sin numeros o signos";
    } else if (value.length > 30) {
      error.province = "La provincia no debe superar los 30 caracteres";
    } else {
      error.province = "";
    }
  }

  if (property === "locality" && !value) {
    error.locality = "Por favor ingrese su localidad";
  } else if (property === "locality") {
    if (!stringRegex.test(value)) {
      error.locality =
        "Por favor ingrese el nombre de la localidad donde se encuentra su tienda sin numeros o signos";
    } else if (value.length > 30) {
      error.locality = "La localidad no debe superar los 30 caracteres";
    } else {
      error.locality = "";
    }
  }

  if (property === "streets" && !value) {
    error.streets = "Por favor ingrese una direccion";
  } else if (property === "streets") {
    if (value.length > 100) {
      error.streets = "La direccion no debe superar los 100 caracteres";
    } else {
      error.streets = "";
    }
  }

  if (property === "description" && !value) {
    error.description = "Por favor ingrese una descripcion detallada";
  } else if (property === "description") {
    if (value.length > 2000) {
      error.description = "La descripcion no debe superar los 2000 caracteres";
    } else {
      error.description = "";
    }
  }

  return error;
};
