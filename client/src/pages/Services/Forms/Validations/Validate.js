export const Validate = (property, value) => {
  let stringRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/;
  let numberRegex = /^[0-9]+$/;
  let stringNumberRegex = /^[a-zA-Z0-9 ]*$/;

  let error = {};

  /* 
    description: "", */

  if (property === "name" && !value) {
    error.name = "Ingrese un nombre";
  } else if (property === "name") {
    if (!stringNumberRegex.test(value)) {
      error.name = "Por favor ingrese un nombre sin números o signos";
    } else if (value.length > 30) {
      error.name = "El nombre es demasiado largo";
    } else {
      error.name = "";
    }
  }

  if (property === "area_code" && value <= 0) {
    error.area_code = "Ingrese su código de área de su tienda";
  } else if (property === "area_code") {
    if (!numberRegex.test(value)) {
      error.area_code = "Por favor ingrese bien el código de área";
    } else if (value.length > 7) {
      error.area_code = "Demasiado largo";
    } else {
      error.area_code = "";
    }
  }

  if (property === "number" && !value) {
    error.number = "Debe ingresar un número telefónico para su tienda";
  } else if (property === "number") {
    if (!numberRegex.test(value)) {
      error.number = "Por favor ingrese un teléfono sin letras o signos";
    } else if (value.length > 30 || value.length < 6) {
      error.number = "Por favor ingrese un teléfono válido";
    } else {
      error.number = "";
    }
  }

  if (property === "zip_code" && value <= 0) {
    error.zip_code = "Ingrese el código postal de su Tienda";
  } else if (property === "zip_code") {
    if (!numberRegex.test(value)) {
      error.zip_code = "Por favor ingrese bien el código postal";
    } else if (value.length > 7) {
      error.zip_code = "No válido";
    } else {
      error.zip_code = "";
    }
  }

  if (property === "street_name" && !value) {
    error.street_name = "Ingrese el nombre de la calle de su Tienda";
  } else if (property === "street_name") {
    if (!stringNumberRegex.test(value)) {
      error.street_name = "Por favor ingrese el nombre de su calle sin signos";
    } else if (value.length < 4) {
      error.street_name = "El nombre es demasiado corto";
    } else if (value.length > 15) {
      error.street_name = "El nombre es demasiado largo";
    } else {
      error.street_name = "";
    }
  }

  if (property === "street_number" && value <= 0) {
    error.street_number = "Ingrese su numeración";
  } else if (property === "street_number") {
    if (!numberRegex.test(value)) {
      error.street_number = "Por favor ingrese la numeración correcta";
    } else if (value.length > 7) {
      error.street_number = "No válido";
    } else {
      error.street_number = "";
    }
  }

  if (property === "description" && value <= 0) {
    error.description = "Ingrese una descripción/ofertas para su Tienda";
  } else if (property === "description") {
    if (!stringNumberRegex.test(value)) {
      error.description = "Por favor ingrese una descripción sin signos";
    } else if (value.length > 2000) {
      error.description = "Demasiado largo";
    } else {
      error.description = "";
    }
  }

  if (property === "mail" && !value) {
    error.mail = "Ingrese su correo electrónico";
  } else if (property === "mail") {
    let mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!mailRegex.test(value)) {
      error.mail = "Ingrese un correo electrónico válido";
    } else if (value.length > 50) {
      error.mail = "El correo electrónico es demasiado largo";
    } else {
      error.mail = "";
    }
  }

  if (property === "price_hour" && value <= 0) {
    error.price_hour = "Ingrese por favor un precio por hora";
  } else if (property === "price_hour") {
    if (!numberRegex.test(value)) {
      error.price_hour = "Por favor ingrese el precio sin signos ni letras";
    } else if (value > 20000) {
      error.price_hour = "Valor demasiado alto";
    } else {
      error.price_hour = "";
    }
  }

  if (property === "price_day" && value <= 0) {
    error.price_day = "Ingrese por favor un precio por dia";
  } else if (property === "price_day") {
    if (!numberRegex.test(value)) {
      error.price_day = "Por favor ingrese el precio sin signos ni letras";
    } else if (value > 70000) {
      error.price_day = "Valor demasiado alto";
    } else {
      error.price_day = "";
    }
  }

  return error;
};
