const validationProfile = (state) => {
  let stringRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;
  let numberRegex = /^[0-9]+$/;
  let emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let passwordRegex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

  //  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i; ES EL ANTERIOR REGEX de mail

  let error = {};

  if (!state.name) {
    error.name = "Please insert a name";
  } else {
    if (!stringRegex.test(state.name)) {
      error.name = "The name cannot contain numbers or signs";
    }
  }

  if (!state.lastname) {
    error.lastname = "Please insert a last name";
  } else {
    if (!stringRegex.test(state.lastname)) {
      error.lastname = "The last name cannot contain numbers or signs";
    }
  }

  if (!state.phone) {
    error.phone = "Please insert a last name";
  } else {
    if (!numberRegex.test(state.phone)) {
      error.phone = "The last name cannot contain numbers or signs";
    }
  }

  if (state.mail) {
    if (!emailRegex.test(state.mail)) {
      error.mail = "This not a valid mail";
    } else {
      error.mail = "";
    }
  }

  if (state.password) {
    if (!passwordRegex.test(state.password)) {
      error.password = "Wrong password";
    } else {
      error.password = "";
    }
  }
  return error;
};

export default validationProfile;
