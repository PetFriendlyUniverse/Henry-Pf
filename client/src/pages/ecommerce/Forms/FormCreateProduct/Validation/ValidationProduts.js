export const validateProductData = (productData) => {
  let errors = {};
  if (!productData.name) {
    errors.name = "El nombre del producto es obligatorio.";
  } else if (productData.name.length < 2) {
    errors.name = "El nombre del producto debe tener al menos 2 caracteres.";
  } else if (productData.name.length > 30) {
    errors.name = "El nombre del producto no debe tener más de 30 caracteres.";
  }
  if (productData.img && !validURL(productData.img)) {
    errors.img = "La URL de la imagen no es válida.";
  }
  if (!productData.price) {
    errors.price = "El precio del producto es obligatorio.";
  } else if (isNaN(productData.price)) {
    errors.price = "El precio del producto debe ser un número.";
  } else if (productData.price <= 0) {
    errors.price = "El precio del producto debe ser mayor que cero.";
  }
  if (
    productData.description &&
    (productData.description.length < 2 || productData.description.length > 500)
  ) {
    errors.description =
      "La descripción del producto debe tener entre 2 y 500 caracteres.";
  }
  // Validar el campo 'stock'
  if (productData.stock === undefined || productData.stock <= 0) {
    errors.stock = "El stock del producto debe ser mayor que cero.";
  }
  // Validar el campo 'specie'
  if (!productData.specie) {
    errors.specie = "La especie del producto es obligatoria.";
  } else if (productData.specie.length < 1 || productData.specie.length > 25) {
    errors.specie =
      "La especie del producto debe tener entre 1 y 25 caracteres.";
  }
  // Validar el campo 'breed'
  if (!productData.breed) {
    errors.breed = "La raza del producto es obligatoria.";
  } else if (productData.breed.length < 1 || productData.breed.length > 25) {
    errors.breed = "La raza del producto debe tener entre 1 y 25 caracteres.";
  }
  // Validar el campo 'brand'
  if (!productData.brand) {
    errors.brand = "La marca del producto es obligatoria.";
  } else if (productData.brand.length < 1 || productData.brand.length > 25) {
    errors.brand = "La marca del producto debe tener entre 1 y 25 caracteres.";
  }
  if (
    productData.weight === undefined ||
    productData.weight <= 0 ||
    !/^\d+(\.\d{1})?$/.test(productData.weight)
  ) {
    errors.weight =
      "El peso del producto debe ser mayor que cero y tener un solo número después de la coma.";
  }
  // Validar el campo 'color'
  if (!productData.color || productData.color.length < 1) {
    errors.color = "El color del producto es obligatorio.";
  }
  // Validar el campo 'size'
  if (
    productData.size === undefined ||
    productData.size <= 0 ||
    productData.size > 3
  ) {
    errors.size =
      "El tamaño del producto debe ser mayor que cero y menor o igual a 3.";
  }
  if (!productData.storeId) {
    errors.storeId = "El ID de la tienda es obligatorio.";
  } else if (productData.storeId <= 0) {
    errors.storeId = "El ID de la tienda debe ser mayor que cero.";
  }
  return errors;
};
function validURL(url) {
  // Esta función verifica si una cadena es una URL válida utilizando una expresión regular
  // Retorna verdadero si es una URL válida y falso si no lo es.
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocolo
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))" + // dominio o dirección IP
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // puerto y ruta
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // parámetros de consulta
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragmento
  return pattern.test(url);
}
