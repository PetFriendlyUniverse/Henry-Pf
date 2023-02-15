import { useState } from "react";
import axios from "axios";
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
    setError(ValidationProduts(property, value));
    setForm({ ...form, [property]: value });
    console.log(form);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      ...form,
      weight: parseFloat(form.weight),
      price: parseInt(form.price),
      stock: parseInt(form.stock),
      StoreId: parseInt(form.StoreId),
    };
    console.log(data);
    axios.post("/products/create", data);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={form.name}
            name="name"
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Image: </label>
          <input
            type="text"
            value={form.img}
            name="img"
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Price: </label>
          <input
            type="text"
            value={form.price}
            name="price"
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Description: </label>
          <input
            type="text"
            value={form.description}
            name="description"
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Stock: </label>
          <input
            type="number"
            value={form.stock}
            name="stock"
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Specie: </label>
          <input
            type="text"
            value={form.specie}
            name="specie"
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Breed: </label>
          <input
            type="text"
            value={form.breed}
            name="breed"
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Brand: </label>
          <input
            type="text"
            value={form.brand}
            name="brand"
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Weight: </label>
          <input
            type="text"
            value={form.weight}
            name="weight"
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Color: </label>
          <input
            type="text"
            value={form.color}
            name="color"
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Size: </label>
          <input
            type="text"
            value={form.size}
            name="size"
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>StoreId: </label>
          <input
            type="number"
            value={form.storeId}
            name="storeId"
            onChange={changeHandler}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormCreateProduct;
