const ValidationProfile = (property, value) => {
  let stringRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/;
  let numberRegex = /^[0-9]+$/;
  let stringNumberRegex = /^[a-zA-Z0-9 ]*$/;
  let emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let passwordRegex =
    /^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,64}$/;
  // /^[a-zA-Z0-9À-ÿ\s]{1,20}$/;

  //  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i; ES EL ANTERIOR REGEX de mail

  let error = {};

  if (property === "user" && !value) {
    error.user = "Ingrese su nickname";
  } else if (property === "user") {
    if (!stringRegex.test(value)) {
      error.user = "Por favor ingrese su nickname sin numeros o signos";
    } else if (value.length > 15) {
      error.user = "El nickname es demasiado largo";
    } else {
      error.user = "";
    }
  }

  if (property === "name" && !value) {
    error.name = "Ingrese su Nombre";
  } else if (property === "name") {
    if (!stringRegex.test(value)) {
      error.name = "Por favor ingrese su nombre sin numeros o signos";
    } else if (value.length > 15) {
      error.name = "El nombre es demasiado largo";
    } else {
      error.name = "";
    }
  }

  if (property === "lastname" && !value) {
    error.lastname = "Ingrese su apellido";
  } else if (property === "lastname") {
    if (!stringRegex.test(value)) {
      error.lastname = "Por favor ingrese su apellido sin numeros o signos";
    } else if (value.length > 15) {
      error.lastname = "El apellido es demasiado largo";
    } else {
      error.lastname = "";
    }
  }

  if (property === "mail" && !value) {
    error.mail = "Ingrese un email";
  } else if (property === "mail") {
    if (!emailRegex.test(value)) {
      error.mail = "El email no es valido";
    } else if (value.length > 50) {
      error.mail = "El email es demasiado largo";
    } else {
      error.mail = "";
    }
  }

  if (property === "password" && !value) {
    error.password = "Ingrese la contraseña";
  } else if (property === "password") {
    if (!passwordRegex.test(value)) {
      error.password =
        "La contraseña debe contener 8 caracteres minimo, minuscula, mayuscula, numero y signo especial";
    } else if (value.length > 20) {
      error.password = "La contraseña es demasiado larga";
    } else {
      error.password = "";
    }
  }

  if (property === "area_code" && value <= 0) {
    if (!numberRegex.test(value)) {
      error.area_code = "Por favor ingrese el codigo de area";
    } else if (value.length > 7) {
      error.area_code = "Demasiado largo";
    } else {
      error.area_code = "";
    }
  }

  if (property === "number" && value <= 0) {
    if (!numberRegex.test(value)) {
      error.number = "Por favor ingrese su numero de telefono";
    } else if (value.length > 15) {
      error.number = "El numero es demasiado largo";
    } else {
      error.number = "";
    }
  }

  if (property === "province" && !value) {
    error.province = "Ingrese su Provincia";
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
    error.locality = "Ingrese su Localidad";
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
    if (!numberRegex.test(value)) {
      error.zip_code = "Por favor ingrese el codigo postal";
    } else if (value.length > 7 || value.length < 2) {
      error.zip_code = "No valido";
    } else {
      error.zip_code = "";
    }
  }

  if (property === "street_name" && !value) {
    error.street_name = "Ingrese su Provincia";
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
    if (!numberRegex.test(value)) {
      error.street_number = "Por favor ingrese la numeracion correcta";
    } else if (value.length > 7) {
      error.street_number = "No valido";
    } else {
      error.street_number = "";
    }
  }

  if (property === "area_code_emergency" && value <= 0) {
    if (!numberRegex.test(value)) {
      error.area_code_emergency = "Por favor ingrese el codigo de area";
    } else if (value.length > 7) {
      error.area_code_emergency = "No valido";
    } else {
      error.area_code_emergency = "";
    }
  }

  if (property === "emergency_number" && value <= 0) {
    error.emergency_number = "Ingrese un numero de emergencia";
    if (!numberRegex.test(value)) {
      error.emergency_number = "Por favor ingrese un numero de emergencia";
    } else if (value.length > 15) {
      error.emergency_number = "Demasiado largo";
    } else {
      error.emergency_number = "";
    }
  }

  return error;
};

const ValidatePassword = (password, repeatPassword) => {
  // NECESITA = {password: state.password, repeatPassword: repeatPassword}
  if (password !== repeatPassword)
    return { errorRepeat: "Las contraseñas no coinciden" };
  return { errorRepeat: "" };

  /* let error = {};
  if (password !== repeatPassword) {
    error.errorRepeat = "Las contraseñas no coinciden";
  } else error.errorRepeat = "";
  return error; */
};

export { ValidationProfile, ValidatePassword };
