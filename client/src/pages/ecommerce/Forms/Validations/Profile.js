const validationProfile = (property, value) => {
  let stringRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;
  let numberRegex = /^[0-9]+$/;
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
      error.user = "Por favor ingrese su apodo sin numeros o signos";
    } else if (value.length > 15) {
      error.user = "El apodo es demaciado largo";
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
      error.name = "El nombre es demaciado largo";
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
      error.lastname = "El apellido es demaciado largo";
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
      error.mail = "El email es demaciado largo";
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

  if (property === "phone" && value <= 0) {
    if (!numberRegex.test(value)) {
      error.phone = "Por favor ingrese su numero de telefono";
    } else if (value.length > 15) {
      error.phone = "El numero de telefono es demaciado largo";
    } else {
      error.phone = "";
    }
  }

  if (property === "emergencyphone" && value <= 0) {
    error.emergencyphone = "Ingrese un numero de emergencia";
    if (!numberRegex.test(value)) {
      error.emergencyphone = "Por favor ingrese un numero de emergencia";
    } else if (value.length > 15) {
      error.emergencyphone = "El un numero de emergencia es demaciado largo";
    } else {
      error.emergencyphone = "";
    }
  }

  return error;
};

const validatePassword = (password, repeatPassword) => {
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

export { validationProfile, validatePassword };
