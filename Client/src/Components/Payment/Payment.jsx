import React from "react";
import "./Payment.css";

const Payment = () => {
  return (
    <div class="container">
      <form action="">
        <div class="row">
          <div class="col">
            <h3 class="title">2.Deliverry Options </h3>

            <div className="delivery_image_container">
              <div className="delivery_to_ship">
                <h3 className="h3_ship">To Ship:</h3>
              </div>
              <div className="delivery_container">
                <div className="detail_container">
                  <div className="delivery_product_image_box">
                    <div className="delivery_product_image">
                      <img
                        className="prod_img"
                        src="https://www.adorama.com/images/130x130/car.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="delivery_product_detail">
                      <p>EOS R Full-Frame Mirrorless Digital Camera, Black</p>
                      <p>Qty.1</p>
                      <p style={{ color: "rgb(16,138,0)" }}>Stock</p>
                      <p>SKU: FPLFSMZLNIII</p>
                    </div>
                    <div className="delivery_add_price">Rs.1399</div>
                  </div>

                  <div className="delivery_div_sec_price">
                    <div className="delivery_subt">
                      <p>Subtotal</p>
                      <p>Rs.1399.00</p>
                    </div>
                    <div className="delivery_ship">
                      <p>Shipping</p>
                      <p>Rs.64.33</p>
                    </div>
                    <div className="delivery_tax">
                      <p>Taxes</p>
                      <p>Rs.0.00</p>
                    </div>
                    <div className="delivery_ot">
                      <p>Order Total</p>
                      <p>Rs.1,463.33</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <h3 class="title">3.Payment :</h3>

            <div class="inputBox">
              <span>cards accepted :</span>
              <img src="https://flyclipart.com/thumb2/672256.png" alt="" />
            </div>
            <div class="inputBox">
              <span>name on card :</span>
              <input type="text" placeholder="Card holder name" />
            </div>
            <div class="inputBox">
              <span>credit card number :</span>
              <input type="number" placeholder="Credit Card Number" />
            </div>
            <div class="inputBox">
              <span>exp month :</span>
              <input type="text" placeholder="Month/Year" />
            </div>

            <div class="flex">
              <div class="inputBox">
                <span>exp year :</span>
                <input type="number" placeholder="Exp Year" />
              </div>
              <div class="inputBox">
                <span>CVV :</span>
                <input type="text" placeholder="****" />
              </div>
            </div>
          </div>
        </div>

        <input type="submit" value="proceed to checkout" class="submit-btn" />
      </form>
    </div>
  );
};

export default Payment;
