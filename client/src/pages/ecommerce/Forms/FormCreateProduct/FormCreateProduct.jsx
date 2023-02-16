import { useState } from "react";
import axios from "axios";
import { validateProductData } from "./Validation/validateProductData";
// name,img,price,description,stock,specie,breed,brand,weight,color,size

function FormCreateProduct() {
  const [form, setForm] = useState({
    name: "",
    img: "",
    price: 0,
    description: "",
    stock: 0,
    specie: "",
    breed: "",
    brand: "",
    weight: 0.0,
    color: "",
    size: "",
    storeId: 0,
  });
  const [error, setError] = useState({
    name: "",
    img: "",
    price: "",
    description: "",
    stock: "",
    specie: "",
    breed: "",
    brand: "",
    weight: "",
    color: "",
    size: "",
    storeId: "",
  });

  const changeHandler = (e) => {
    let property = e.target.name;
    let value = e.target.value;
    setError(validateProductData(property, value));
    setForm({ ...form, [property]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      ...form,
      weight: parseFloat(form.weight),
      price: parseInt(form.price),
      stock: parseInt(form.stock),
      StoreId: parseInt(form.storeId),
    };
    console.log(data);
    axios.post("/products/create", data);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form
        onSubmit={submitHandler}
        className="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md"
      >
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={form.name}
            name="name"
            onChange={changeHandler}
          />
          {error.name && <span className="text-red-500">{error.name}</span>}
        </div>
        <div>
          <label>Image: </label>
          <input
            type="text"
            value={form.img}
            name="img"
            onChange={changeHandler}
          />
          {error.img && <span className="text-red-500">{error.img}</span>}
        </div>
        <div>
          <label>Price: </label>
          <input
            type="text"
            value={form.price}
            name="price"
            onChange={changeHandler}
          />
          {error.price && <span className="text-red-500">{error.price}</span>}
        </div>
        <div>
          <label>Description: </label>
          <input
            type="text"
            value={form.description}
            name="description"
            onChange={changeHandler}
          />
          {error.description && (
            <span className="text-red-500">{error.description}</span>
          )}
        </div>
        <div>
          <label>Stock: </label>
          <input
            type="number"
            value={form.stock}
            name="stock"
            onChange={changeHandler}
          />
          {error.stock && <span className="text-red-500">{error.stock}</span>}
        </div>
        <div>
          <label>Specie: </label>
          <input
            type="text"
            value={form.specie}
            name="specie"
            onChange={changeHandler}
          />
          {error.specie && <span className="text-red-500">{error.specie}</span>}
        </div>
        <div>
          <label>Breed: </label>
          <input
            type="text"
            value={form.breed}
            name="breed"
            onChange={changeHandler}
          />
          {error.breed && <span className="text-red-500">{error.breed}</span>}
        </div>
        <div>
          <label>Brand: </label>
          <input
            type="text"
            value={form.brand}
            name="brand"
            onChange={changeHandler}
          />
          {error.brand && <span className="text-red-500">{error.brand}</span>}
        </div>
        <div>
          <label>Weight: </label>
          <input
            type="text"
            value={form.weight}
            name="weight"
            onChange={changeHandler}
          />
          {error.weight && <span className="text-red-500">{error.weight}</span>}
        </div>
        <div>
          <label>Color: </label>
          <input
            type="text"
            value={form.color}
            name="color"
            onChange={changeHandler}
          />
          {error.color && <span className="text-red-500">{error.color}</span>}
        </div>
        <div>
          <label>Size: </label>
          <input
            type="text"
            value={form.size}
            name="size"
            onChange={changeHandler}
          />
          {error.size && <span className="text-red-500">{error.size}</span>}
        </div>
        <div>
          <label>StoreId: </label>
          <input
            type="number"
            value={form.storeId}
            name="storeId"
            onChange={changeHandler}
          />
          {error.storeId && (
            <span className="text-red-500">{error.storeId}</span>
          )}
        </div>
        <button
          type="submit"
          className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormCreateProduct;
