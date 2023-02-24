import React, { useState, useEffect } from "react";
import "./stylesadmin/products.css"
const ProductList = ({ apiUrl }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [apiUrl]);

  const handleDelete = (id) => {
    fetch(`https://taupe-raven-gear.cyclic.app/api/admin/delete/${id}`,{
      method:'DELETE',
      headers:{
      }
    })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    })
    .catch((err) => console.log(err))
  };

  const handleUpdate = (id,currtitle,currimg,currbrand,currprice,curritemtag,currinventory) => {
    const updateditle = prompt("Enter updated title", currtitle);
    const updatedimg = prompt("Enter updated image ", currimg);
    const updateditemtag = prompt("Enter updated item_tag ",curritemtag );
    const updatedbrand = prompt("Enter updated brand ",currbrand );
    const updatedprice = prompt("Enter updated price",currprice );
    const updatedinventory = prompt("Enter updated inventory",currinventory );
    const price = Number(updatedprice);


    const data = {
      title: updateditle || currtitle,
      img: updatedimg || currimg,
      brand: updatedbrand || currbrand,
      price: isNaN(price) ? currprice : price,
      item_tag: updateditemtag || curritemtag,
      inventory: updatedinventory || currinventory,


    }

    fetch(`https://taupe-raven-gear.cyclic.app/api/admin/update/${id}`,{
      method:'PATCH',
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      // eslint-disable-next-line no-restricted-globals
      // location.reload();
    })
    .catch((err) => console.log(err))
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-item" key={product.id}>
          <div className="product-image">
            <img src={product.img} alt={product.title} />
          </div>
          <div className="product-details">
            <h3>{product.title}</h3>
            <div>{product.brand}</div>
            <div className="product-rating">
              Rating: {product.rating} stars ({product.review} reviews)
            </div>
            <div className="product-price">
              <div className="product-regular-price">${product.price}</div>
              <div className="product-inventory">
                {product.inventory} in stock
              </div>
            </div>
            <div className="product-item-tag">{product.item_tag}</div>
            <div className="product-buttons">
              <button className="update-btn" onClick={() => handleUpdate(product._id,product.title,product.brand,product.img,product.price,product.item_tag,product.inventory)}>
                Update
              </button>
              <button className="delete-btn" onClick={() => handleDelete(product._id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
