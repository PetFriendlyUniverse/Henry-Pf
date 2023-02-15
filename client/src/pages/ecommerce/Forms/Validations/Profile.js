const validationProfile = (state) => {
  let stringRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;
  let numberRegex = /^[0-9]+$/;
  let emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let passwordRegex = /^[a-zA-ZÀ-ÿ\s]{1,20}$/;

  //  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i; ES EL ANTERIOR REGEX de mail

  let error = {};

  if (!state.user) {
    error.user = "Please insert a nickname";
  } else {
    if (state.user.length > 15) {
      error.user = "The nickname it's too long";
    } else if (!stringRegex.test(state.user)) {
      error.user = "The nickname cannot contain numbers or signs";
    }
  }

  if (!state.name) {
    error.name = "Please insert a name";
  } else {
    if (state.name.length > 30) {
      error.name = "The name it's too long";
    } else if (!stringRegex.test(state.name)) {
      error.name = "The name cannot contain numbers or signs";
    }
  }

  if (!state.lastname) {
    error.lastname = "Please insert a last name";
  } else {
    if (state.lastname.length > 30) {
      error.lastname = "The last name it's too long";
    } else if (!stringRegex.test(state.lastname)) {
      error.lastname = "The last name cannot contain numbers or signs";
    }
  }

  if (!state.mail) {
    error.mail = "Please insert a email";
  } else {
    if (state.mail.length > 50) {
      error.mail = "The email is too long";
    } else if (!emailRegex.test(state.mail)) {
      error.mail = "This not a valid email";
    }
  }

  if (!state.password) {
    error.password = "Insert a password";
  } else {
    if (state.password.length > 20) {
      error.password = "The password is too long";
    } else if (!passwordRegex.test(state.password)) {
      error.password = "Try another password";
    } else {
      if (state.password !== state.repeatPassword) {
        error.repeatPassword = "Password does not match";
      }
    }
  }

  if (!state.phone) {
    error.phone = "Please insert a last name";
  } else {
    if (state.phone.length > 20) {
      error.phone = "The number phone it's too long";
    } else if (!numberRegex.test(state.phone)) {
      error.phone = "The last name cannot contain numbers or signs";
    }
  }

  return error;
};

export default validationProfile;
