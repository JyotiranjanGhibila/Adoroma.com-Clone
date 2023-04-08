import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCart } from "../../redux/auth/authSlice";
import "./products.css";

const ProductList = ({ apiUrl }) => {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("price_low_to_high");

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, [apiUrl]);

  const handleaAddToCart = async (itemId, quantity) => {
    axios
      .post(
        "https://taupe-raven-gear.cyclic.app/api/cart/add-to-cart",
        {
          itemId,
          quantity,
        },
        {
          headers: {
            Authorization: user?.token,
          },
        }
      )
      .then((res) => dispatch(setCart(res.data.items)))
      .catch((err) => console.log(err));
  };

  const sortProducts = (order) => {
    switch (order) {
      case "price_low_to_high":
        setProducts([...products].sort((a, b) => a.price - b.price));
        break;
      case "price_high_to_low":
        setProducts([...products].sort((a, b) => b.price - a.price));
        break;
      case "rating_low_to_high":
        setProducts([...products].sort((a, b) => a.rating - b.rating));
        break;
      case "rating_high_to_low":
        setProducts([...products].sort((a, b) => b.rating - a.rating));
        break;
      default:
        break;
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="sorting-table">
            <h4 className="sorting-title">Sort By:</h4>
            <select
              className="form-select"
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value);
                sortProducts(e.target.value);
              }}
            >
              <option value="price_low_to_high">Price: Low to High</option>
              <option value="price_high_to_low">Price: High to Low</option>
              <option value="rating_low_to_high">Rating: Low to High</option>
              <option value="rating_high_to_low">Rating: High to Low</option>
            </select>
          </div>
        </div>
        <div className="col-md-9">
          <div>
            {products.map((product) => (
              <div className="product-card " key={product._id}>
                <img
                  src={product.img}
                  className="card-img-left"
                  alt={product.title}
                />
                <div className="card-body">
                  <h4 className="card-title">{product.title}</h4>
                  <p className="card-text">{product.brand}</p>
                  <p className="card-text card-price">${product.price}</p>
                  <p className="card-text card-rating">
                    Rating: {product.rating}
                  </p>
                  <p className="card-text card-tag">{product.item_tag}</p>
                  <button
                    className="cart-button"
                    onClick={() => handleaAddToCart(product._id, 1)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
