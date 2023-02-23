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
    fetch(`${apiUrl}/api/delete/${id}`,{
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

  const handleUpdate = (id,currtitle,currimg,currbrand,curritemtag,currprice,currinventory) => {
    const updateditle = prompt("Enter updated title", currtitle);
    const updatedimg = prompt("Enter updated ", currimg);
    const updateditemtag = prompt("Enter updated ",curritemtag );
    const updatedbrand = prompt("Enter updated ",currbrand );
    const updatedprice = prompt("Enter updated ",currprice );
    const updatedinventory = prompt("Enter updated ",currinventory );


    const data = {
      title: updateditle || currtitle,
      img: updatedimg || currimg,
      brand: updatedbrand || currbrand,
      price: updatedprice || currprice,
      item_tag: updateditemtag || curritemtag,
      inventory: updatedinventory || currinventory,


    }

    fetch(`${apiUrl}/api/update/${id}`,{
      method:'PATCH',
      headers:{
        "Content-type":"application/json",
        "Authorization":localStorage.getItem("token")
      },
      body:JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      // eslint-disable-next-line no-restricted-globals
      location.reload();
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
