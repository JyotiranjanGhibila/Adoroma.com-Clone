import { useState } from 'react';
import './payment.css';
import {Link,useNavigate} from "react-router-dom";

const PaymentPage = ({ onBack, onComplete }) => {
    let navigate=useNavigate();
  const [payment, setPayment] = useState({
    cardName: '',
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: ''
  });
  const [loading, setLoading] = useState(false);
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const [showAlert, setShowAlert] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!payment.cardName || !payment.cardNumber || !payment.expiryMonth || !payment.expiryYear || !payment.cvv) {
      setShowAlert(true);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setPaymentSuccessful(true);
      setLoading(false);
      setShowAlert(false);
      alert("Payment Successful!");
      navigate("/")
    }, 2000);
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayment(prevPayment => ({
      ...prevPayment,
      [name]: value
    }));
  }

  return (
    <div className="payment-container">
      <h2 className="heading">Enter Payment Information</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Cardholder Name:
          <input type="text" name="cardName" value={payment.cardName} onChange={handleChange} />
        </label>
        <label>
          Card Number:
          <input type="text" name="cardNumber" value={payment.cardNumber} onChange={handleChange} />
        </label>
        <div className="expiry-cvv">
          <label>
            Expiry Month:
            <input type="text" name="expiryMonth" value={payment.expiryMonth} onChange={handleChange} />
          </label>
          <label>
            Expiry Year:
            <input type="text" name="expiryYear" value={payment.expiryYear} onChange={handleChange} />
          </label>
          <label>
            CVV:
            <input type="text" name="cvv" value={payment.cvv} onChange={handleChange} />
          </label>
        </div>
        {showAlert && <p className="error-message">Please fill all fields!</p>}
        <div className="payment-buttons">
          {loading && <div className="loader"></div>}
          {!loading && !paymentSuccessful && <button className="submit-btn" type="submit">Complete Order</button>}
          {paymentSuccessful && <p className="success-message">Payment Successful!</p>}
        </div>
      </form>
    </div>
  );
}

export default PaymentPage;
