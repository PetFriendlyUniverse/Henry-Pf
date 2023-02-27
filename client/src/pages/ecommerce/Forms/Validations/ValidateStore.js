export const ValidateStore = (property, value) => {
  let stringRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/;
  let numberRegex = /^[0-9]+$/;
  let stringNumberRegex = /^[a-zA-Z0-9 ]*$/;

  let error = {};

  /* 
    description: "", */

  if (property === "name" && !value) {
    error.name = "Ingrese un nombre para su tienda";
  } else if (property === "name") {
    if (!stringNumberRegex.test(value)) {
      error.name = "Por favor ingrese un nombre sin numeros o signos";
    } else if (value.length > 15) {
      error.name = "El nombre es demasiado largo";
    } else {
      error.name = "";
    }
  }

  if (property === "area_code" && value <= 0) {
    error.area_code = "Ingrese su codigo de area de su tienda";
  } else if (property === "area_code") {
    if (!numberRegex.test(value)) {
      error.area_code = "Por favor ingrese bien el codigo de area";
    } else if (value.length > 7) {
      error.area_code = "Demasiado largo";
    } else {
      error.area_code = "";
    }
  }

  if (property === "number" && !value) {
    error.number = "Debe ingresar un numero telefonico para su tienda";
  } else if (property === "number") {
    if (!numberRegex.test(value)) {
      error.number = "Por favor ingrese un telefono sin letras o signos";
    } else if (value.length > 30 || value.length < 6) {
      error.number = "Por favor ingrese un telefono valido";
    } else {
      error.number = "";
    }
  }

  if (property === "province" && !value) {
    error.province = "Ingrese la provincia en la que se encuentra su Tienda";
  } else if (property === "province") {
    if (!stringRegex.test(value)) {
      error.province = "Por favor ingrese su Provincia sin numeros o signos";
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
      error.locality = "Por favor ingrese su Localidad sin numeros o signos";
    } else if (value.length > 15) {
      error.locality = "El nombre es demasiado largo";
    } else {
      error.locality = "";
    }
  }

  if (property === "zip_code" && value <= 0) {
    error.zip_code = "Ingrese el codigo postal de su Tienda";
  } else if (property === "zip_code") {
    if (!numberRegex.test(value)) {
      error.zip_code = "Por favor ingrese bien el codigo postal";
    } else if (value.length > 7) {
      error.zip_code = "No valido";
    } else {
      error.zip_code = "";
    }
  }

  if (property === "street_name" && !value) {
    error.street_name = "Ingrese el nombre de la calle de su Tienda";
  } else if (property === "street_name") {
    if (!stringNumberRegex.test(value)) {
      error.street_name = "Por favor ingrese el nombre de su calle sin signos";
    } else if (value.length > 15) {
      error.street_name = "El nombre es demasiado largo";
    } else {
      error.street_name = "";
    }
  }

  if (property === "street_number" && value <= 0) {
    error.street_number = "Ingrese su numeracion";
  } else if (property === "street_number") {
    if (!numberRegex.test(value)) {
      error.street_number = "Por favor ingrese la numeracion correcta";
    } else if (value.length > 7) {
      error.street_number = "No valido";
    } else {
      error.street_number = "";
    }
  }

  if (property === "description" && value <= 0) {
    error.description = "Ingrese una descripcion/ofertas para su Tienda";
  } else if (property === "description") {
    if (!stringNumberRegex.test(value)) {
      error.description = "Por favor ingrese una descripcion sin signos";
    } else if (value.length > 2000) {
      error.description = "Demasiado largo";
    } else {
      error.description = "";
    }
  }

  return error;
};
