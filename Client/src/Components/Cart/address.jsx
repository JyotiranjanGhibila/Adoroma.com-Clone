import { useState } from 'react';
import "./address.css"
import {Link} from "react-router-dom";

const AddressPage = ({ onNext }) => {
  const [address, setAddress] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(address);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress(prevAddress => ({
      ...prevAddress,
      [name]: value
    }));
  }

  return (
    <div className="address-container">
      <h2 className='heading'>Enter Shipping Address</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" value={address.firstName} onChange={handleChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={address.lastName} onChange={handleChange} />
        </label>
        <label>
          Street Address:
          <input type="text" name="streetAddress" value={address.streetAddress} onChange={handleChange} />
        </label>
        <label>
          City:
          <input type="text" name="city" value={address.city} onChange={handleChange} />
        </label>
        <label>
          State:
          <input type="text" name="state" value={address.state} onChange={handleChange} />
        </label>
        <label>
          Zip Code:
          <input type="text" name="zipCode" value={address.zipCode} onChange={handleChange} />
        </label>
        <label>
          Country:
          <input type="text" name="country" value={address.country} onChange={handleChange} />
        </label>
       <Link to="/payment"> <button className='submitbtn' type="submit">Next</button></Link>
      </form>
    </div>
  );
};

export default AddressPage;
