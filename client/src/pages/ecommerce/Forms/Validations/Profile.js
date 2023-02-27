const ValidationProfile = (property, value) => {
  let userRegex = /^[a-zA-Z0-9_]+$/;
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
    if (!userRegex.test(value)) {
      error.user = "Por favor ingrese su nickname sin números o signos";
    } else if (value.length > 15) {
      error.user = "El nickname es demasiado largo";
    } else {
      error.user = "";
    }
  }

  if (property === "name" && !value) {
    error.name = "Ingrese su nombre";
  } else if (property === "name") {
    if (!stringRegex.test(value)) {
      error.name = "Por favor ingrese su nombre sin números o signos";
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
      error.lastname = "Por favor ingrese su apellido sin números o signos";
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
      error.mail = "El email no es válido";
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
        "La contraseña debe contener 8 caracteres mínimo, minúscula, mayúscula, número y signo especial";
    } else if (value.length > 20) {
      error.password = "La contraseña es demasiado larga";
    } else {
      error.password = "";
    }
  }

  if (property === "area_code" && value <= 0) {
    error.area_code = "Ingrese su código de area";
  } else if (property === "area_code") {
    if (!numberRegex.test(value)) {
      error.area_code = "Por favor ingrese bien el código de area";
    } else if (value.length > 7) {
      error.area_code = "Demasiado largo";
    } else {
      error.area_code = "";
    }
  }

  if (property === "number" && !value) {
    error.number = "Debe ingresar un numero telefónico";
  } else if (property === "number") {
    if (!numberRegex.test(value)) {
      error.number = "Por favor ingrese un teléfono sin letras o signos";
    } else if (value.length > 30 || value.length < 6) {
      error.number = "Por favor ingrese un teléfono valido";
    } else {
      error.number = "";
    }
  }

  if (property === "province" && !value) {
    error.province = "Ingrese su provincia";
  } else if (property === "province") {
    if (!stringRegex.test(value)) {
      error.province = "Por favor ingrese su provincia sin números o signos";
    } else if (value.length > 15) {
      error.province = "El nombre es demasiado largo";
    } else {
      error.province = "";
    }
  }

  if (property === "locality" && !value) {
    error.locality = "Ingrese su localidad";
  } else if (property === "locality") {
    if (!stringNumberRegex.test(value)) {
      error.locality = "Por favor ingrese su localidad sin números o signos";
    } else if (value.length > 15) {
      error.locality = "El nombre es demasiado largo";
    } else {
      error.locality = "";
    }
  }

  if (property === "zip_code" && value <= 0) {
    error.zip_code = "Ingrese un código postal";
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
    error.street_name = "Ingrese el nombre de su calle";
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

  if (property === "area_code_emergency" && value <= 0) {
    error.area_code_emergency = "Ingrese su código de area";
  } else if (property === "area_code_emergency") {
    if (!numberRegex.test(value)) {
      error.area_code_emergency = "Por favor ingrese bien el código de área";
    } else if (value.length > 7) {
      error.area_code_emergency = "Demasiado largo";
    } else {
      error.area_code_emergency = "";
    }
  }

  if (property === "emergency_number" && value <= 0) {
    error.emergency_number = "Ingrese un número de emergencia";
    if (!numberRegex.test(value)) {
      error.emergency_number =
        "Por favor ingrese un número de emergencia válido";
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
