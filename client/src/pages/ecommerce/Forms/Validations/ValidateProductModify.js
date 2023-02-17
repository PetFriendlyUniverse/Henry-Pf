export const validateProductModify = (property, value) => {
  let error = {};
  if (property === "name" && !value) {
    error.name = "You must enter a name";
  } else if (property === "name") {
    if (value.length > 50) {
      error.name = "The name should not exceed 50 characters";
    } else {
      error.name = "";
    }
  }
  if (property === "img") {
    const imgValidation = /^(http|https):\/\/.+/;
    if (!imgValidation.test(value)) {
      error.img = "The URL must start with http or https";
    } else {
      error.img = "";
    }
  }
  if (property === "price" && value <= 0) {
    error.price = "The price must be greater than 0";
  } else if (property === "hp") {
    error.price = "";
  } else if (property === "description") {
    if (value.length > 100) {
      error.description = "The description cannot exceed 100 characters";
    } else if (value.length < 10) {
      error.description = "The description must have at least 10 characters";
    } else {
      error.description = "";
    }
  }
  if (property === "stock" && value <= 0) {
    error.stock = "The stock must be greater than 0";
  } else if (property === "stock") {
    error.stock = "";
  }
  if (property === "specie" && !value) {
    error.specie = "You must enter a species";
  } else if (property === "specie") {
    const nameValidation = /^[a-zA-Z\s]*$/;
    if (!nameValidation.test(value)) {
      error.specie = "The species must only contain letters";
    } else if (value.length > 30) {
      error.specie = "The species should not exceed 30 characters";
    } else {
      error.specie = "";
    }
  }
  if (property === "breed" && !value) {
    error.breed = "You must enter a breed";
  } else if (property === "breed") {
    const nameValidation = /^[a-zA-Z\s]*$/;
    if (!nameValidation.test(value)) {
      error.breed = "The breed must only contain letters";
    } else if (value.length > 30) {
      error.breed = "The breed should not exceed 30 characters";
    } else {
      error.breed = "";
    }
  }
  if (property === "brand" && !value) {
    error.brand = "You must enter a brand";
  } else if (property === "brand") {
    const nameValidation = /^[a-zA-Z\s]*$/;
    if (!nameValidation.test(value)) {
      error.brand = "The brand must only contain letters";
    } else if (value.length > 50) {
      error.brand = "The brand should not exceed 50 characters";
    } else {
      error.brand = "";
    }
  }
  if (property === "weight" && value <= 0.0) {
    error.weight = "The weight must be greater than 0";
  } else if (property === "weight") {
    error.weight = "";
  }
  if (property === "color") {
    const nameValidation = /^[a-zA-Z\s]*$/;
    if (!nameValidation.test(value)) {
      error.color = "The color must only contain letters";
    } else if (value.length > 30) {
      error.color = "The color should not exceed 30 characters";
    } else {
      error.color = "";
    }
  }
  if (property === "size") {
    const nameValidation = /^[a-zA-Z\s]*$/;
    if (!nameValidation.test(value)) {
      error.size = "The size must only contain letters";
    } else if (value.length > 30) {
      error.size = "The size should not exceed 3 characters";
    } else {
      error.size = "";
    }
  }
  return error;
};
