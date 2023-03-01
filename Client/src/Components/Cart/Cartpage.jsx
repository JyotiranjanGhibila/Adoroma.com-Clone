import { Button } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./cart.css";

const CartPage = () => {
  const authState = useSelector((state) => state.auth.cart);
  const { cart } = useSelector((state) => state.auth);
  const [cartItems, setCartItems] = useState(authState);
  const [discountCode, setDiscountCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);

  const deleteItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.itemId !== itemId);
    setCartItems(updatedCartItems);
  };
  const increaseQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleDiscountApply = () => {
    // Generate a random discount code
    const discountCode = Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase();
    setDiscountCode(discountCode);
    setDiscountApplied(true);
  };

  const handleDiscountRemove = () => {
    setDiscountCode("");
    setDiscountApplied(false);
  };

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const createStripeCheckout = async () => {
    try {
      axios
        .post(
          "https://tame-pear-firefly-kit.cyclic.app/stripe-create-checkout",
          cart
        )
        .then((res) => {
          console.log(res);
          window.location.href = res.data.url;
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const discountedPrice = discountApplied ? totalPrice * 0.9 : totalPrice;

  return (
    <div className="cart-container">
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#333" }}>
        Cart Page
      </h2>

      {cartItems.map((item) => (
        <div key={item.itemId} className="cart-item">
          <img src={item.img} alt="Product" className="cart-item__image" />
          <div className="cart-item__details">
            <h3 className="cart-item__title">{item.title}</h3>
            <p className="cart-item__price">Price: ${item.price}</p>
            <div className="cart-item__quantity">
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <p>{item.quantity}</p>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
            </div>
            <button
              onClick={() => deleteItem(item.itemId)}
              className="cart-item__delete-button"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      <p className="cart-total-price">Total Price: ${totalPrice}</p>

      {discountApplied ? (
        <div className="discount-applied">
          <p>Discount applied with code: {discountCode}</p>
          <button onClick={handleDiscountRemove}>Remove discount</button>
        </div>
      ) : (
        <div className="discount">
          <input
            type="text"
            placeholder="Discount Code"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
          />
          <button onClick={handleDiscountApply}>Apply Discount</button>
        </div>
      )}

      <p className="cart-total-price">
        Final Price: ${discountedPrice.toFixed(2)}
      </p>
      <Button colorScheme="yellow" onClick={createStripeCheckout}>
        Checkout Here
      </Button>
    </div>
  );
};

export default CartPage;
