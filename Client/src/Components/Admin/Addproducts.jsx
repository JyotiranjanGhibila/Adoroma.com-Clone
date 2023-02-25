import React, { useState } from 'react';
import './stylesadmin/Addproducts.css';

function AddProductForm({ onAddProduct }) {
  const [title, setTitle] = useState('');
  const [brand, setBrand] = useState('');
  const [img, setImg] = useState('');
  const [price, setPrice] = useState('');
  const [inventory, setInventory] = useState('');
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');
  const [itemTag, setItemTag] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      title,
      brand,
      img,
      price,
      inventory,
      category,
      rating,
      review,
      item_tag: itemTag,
    };
    fetch('https://taupe-raven-gear.cyclic.app/api/admin/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        setTitle('');
        setBrand('');
        setImg('');
        setPrice('');
        setInventory('');
        setCategory('');
        setRating('');
        setReview('');
        setItemTag('');
      })
      .catch((error) => console.error(error));
  };

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          className="form-control"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="brand">Brand:</label>
        <input
          id="brand"
          type="text"
          className="form-control"
          value={brand}
          onChange={(event) => setBrand(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="img">Image:</label>
        <input
          id="img"
          type="text"
          className="form-control"
          value={img}
          onChange={(event) => setImg(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="number"
          className="form-control"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="inventory">Inventory:</label>
        <input
          id="inventory"
          type="number"
          className="form-control"
          value={inventory}
          onChange={(event) => setInventory(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          className="form-control"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">--Select category--</option>
          <option value="photography">Photography</option>
          <option value="computer">Computer</option>
          <option value="gaming">Gaming</option>
          <option value="drone">Drone</option>
          <option value="video">Video</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Add Product</button>
    </form>
  );
}
export default AddProductForm;

