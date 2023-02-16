export const validateProductData = (property, value) => {
  let error = {};
  if (property === "name" && !value) {
    error.name = "Debes ingresar un nombre";
  } else if (property === "name") {
    if (value.length > 50) {
      error.name = "El nombre no debe superar los 50 caracteres";
    } else {
      error.name = "";
    }
  }
  if (property === "img") {
    const imgValidation = /^(http|https):\/\/.+/;
    if (!imgValidation.test(value)) {
      error.img = "La URL debe comenzar con http o https";
    } else {
      error.img = "";
    }
  }
  if (property === "price" && value <= 0) {
    error.price = "El precio debe ser mayor de 0";
  } else if (property === "hp") {
    error.price = "";
  }
  if (property === "description" && !value) {
    error.description = "Debes ingresar una descripción";
  } else if (property === "description") {
    if (value.length > 100) {
      error.description = "La descripción no puede superar los 100 caracteres";
    } else {
      error.description = "";
    }
  }
  if (property === "stock" && value <= 0) {
    error.stock = "El stock debe ser mayor de 0";
  } else if (property === "stock") {
    error.stock = "";
  }
  if (property === "specie" && !value) {
    error.specie = "Debes ingresar una especie";
  } else if (property === "specie") {
    const nameValidation = /^[a-zA-Z\s]*$/;
    if (!nameValidation.test(value)) {
      error.specie = "La especie solo debe contener letras";
    } else if (value.length > 30) {
      error.specie = "La especie no debe superar los 30 caracteres";
    } else {
      error.specie = "";
    }
  }
  if (property === "breed" && !value) {
    error.breed = "Debes ingresar una raza";
  } else if (property === "breed") {
    const nameValidation = /^[a-zA-Z\s]*$/;
    if (!nameValidation.test(value)) {
      error.breed = "La raza solo debe contener letras";
    } else if (value.length > 30) {
      error.breed = "La raza no debe superar los 30 caracteres";
    } else {
      error.breed = "";
    }
  }
  if (property === "brand" && !value) {
    error.brand = "Debes ingresar una marca";
  } else if (property === "brand") {
    const nameValidation = /^[a-zA-Z\s]*$/;
    if (!nameValidation.test(value)) {
      error.brand = "La marca solo debe contener letra";
    } else if (value.length > 50) {
      error.brand = "La marca no debe superar los 50 caracteres";
    } else {
      error.brand = "";
    }
  }
  if (property === "weight" && value <= 0.0) {
    error.weight = "El peso debe ser mayor de 0";
  } else if (property === "weight") {
    error.weight = "";
  }
  if (property === "color") {
    const nameValidation = /^[a-zA-Z\s]*$/;
    if (!nameValidation.test(value)) {
      error.color = "El color solo debe contener letra";
    } else if (value.length > 30) {
      error.color = "El color no debe superar los 30 caracteres";
    } else {
      error.color = "";
    }
  }
  if (property === "size") {
    const nameValidation = /^[a-zA-Z\s]*$/;
    if (!nameValidation.test(value)) {
      error.size = "El tamaño solo debe contener letras";
    } else if (value.length > 30) {
      error.size = "El tamaño no debe superar los 3 caracteres";
    } else {
      error.size = "";
    }
  }
  if (property === "StoreId" && value <= 0) {
    error.StoreId = "El id debe ser mayor de 0";
  } else if (property === "StoreId") {
    error.StoreId = "";
  }
  return error;
};
