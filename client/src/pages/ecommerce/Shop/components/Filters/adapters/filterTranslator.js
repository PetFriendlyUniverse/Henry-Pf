const translator = {
  Breeds: "Raza",
  Brands: "Marca",
  Weight: "Peso",
  Species: "Especie",
  Size: "Tamaño",
};
export default function filterTranslator(filter) {
  return translator[filter];
}
