import React from "react";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="maindiv_container">
      <div className="left_container">
        <div className="left_wrap">
          <div className="h1_shipping">
            <h1 className="h1">1.Shipping Address</h1>
          </div>

          <div className="form_wrap">
            <form action="">
              <div className="text_wrap">
                <div className="">Ship to India</div>
                <div className="">*required</div>
              </div>
              <div className="name_part">
                <div className="first_name">
                  <input type="text" placeholder="Enter Your First Name" />
                </div>
                <div className="last_name">
                  <input type="text" placeholder="Enter Your Last Name" />
                </div>
              </div>
              <div className="company_name">
                <input type="text" placeholder="Enter Your Company Name" />
              </div>
              <div className="street_adrs">
                <input type="text" placeholder="Type Your Address" />
              </div>
              <div className="house">
                <input type="text" placeholder="Apt/House" />
              </div>
              <div className="city_part">
                <div className="city">
                  <input type="text" placeholder="City" />
                </div>
                <div className="state">
                  <input type="text" placeholder="State" />
                </div>
                <div className="zip">
                  <input type="text" placeholder="Zip" />
                </div>
              </div>
              <div className="email_phone">
                <div className="email">
                  <input type="text" placeholder="Email Address" />
                </div>
                <div className="phone">
                  <input type="text" placeholder="Enter Your Phone Number" />
                </div>
              </div>
            </form>
            <div className="checkbox_part">
              <div className="checkbox">
                <input type="checkbox" />
              </div>
              <div className="text_box">
                Please send me deals, free tips & Reward news!
              </div>
            </div>
          </div>
        </div>
        <div className="save_button_box">
          <button className="btn">Save and Continue</button>
        </div>
      </div>
      <div className="right_container">
        <div className="container2">
          <div className="order-summery">
            <p className="order_text">Order Summery</p>
            <p className="edit_cart">Edit Cart</p>
          </div>
          <div className="div_first_image">
            <div className="image">
              <img
                className="add_img"
                src="https://www.adorama.com/images/130x130/car.jpg"
                alt="img"
              />
            </div>
            <div className="add_detail">
              <p>EOS R Full-Frame Mirrorless Digital Camera, Black</p>
              <p>Qty.1</p>
            </div>
            <div className="add_price">Rs.1399</div>
          </div>

          <div className="div_sec_price">
            <div className="subt">
              <p>Subtotal</p>
              <p>Rs.1399.00</p>
            </div>
            <div className="ship">
              <p>Shipping</p>
              <p>Rs.64.33</p>
            </div>
            <div className="tax">
              <p>Taxes</p>
              <p>Rs.0.00</p>
            </div>
            <div className="ot">
              <p>Order Total</p>
              <p>Rs.1,463.33</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
