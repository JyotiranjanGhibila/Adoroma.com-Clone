import React from "react";
import "./CartItem.css";


const CartItem = () => {
  return (
    <div className="cartitem">
      <div className="cartitem1">
        <div className="cartitem_image_div">
          <img
            className="cartitem_image"
            src="https://www.adorama.com/images/300x300/zoomlioniii_1.jpg"
            alt="product name"
          />
        </div>
        <div className="cartitem_detail">
          <div className="cartitem_detail_partition">
            <div className="cartitem_detail_name">
              <h1>
                Flashpoint Zoom Li-on III R2 TTL Speedlight Flash for Nikon
                Cameras
              </h1>
            </div>
            <div className="cartitem_detail_options">
              <select className="cartitem_detail_select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </div>
            <div className="cartitem_detail_price">$169.00/e</div>
            <div className="cartitem-deleteBtn">
              <i className="fas fa-trash"></i>
            </div>
          </div>
        </div>
      </div>
      {/* ................................................................ */}
      <div className="cartitem2">
        <div className="cartitem2_text">
          <div className="cartitem2_text_box">
            <div className="cartitem2_text_box_set">
              <div>
                <p>Save for Later |</p>
              </div>
              <div>
                <p>Accessories |</p>
              </div>
              <div>
                <p>Move to WishList |</p>
              </div>
            </div>
          </div>
        </div>
        {/* ............................................................ */}
        <div className="vippro">
          <div className="vipro_box_set">
            <div className="vippro_box1">
              <div className="vippro_box1_img">
                <img
                  src="https://adorama.com/col/UIimages/VIp360/VIPPRO-Logo.png"
                  alt="vipprologo"
                />
              </div>
            </div>
            <div className="vippro_text_box">
              <p>Free 2-Day Shipping, 1 Year Drops & Spills and more!</p>
            </div>
            <div className="vipro_price_text_set">
              <div className="vippro_text_box_price">
                <p>$49.99</p>
              </div>
              <div className="vippro_text_box_price_button">
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
        {/* ........................................................... */}
        <div className="adorama">
          <div className="adorama_box_set">
            <div className="adorama_box1">
              <div className="adorama_box1_img">
                <img
                  src="	https://www.adorama.com/col/_ado-protect-extend/ado-protect-extend-logo.svg"
                  alt="adorma"
                />
              </div>
            </div>
            <div className="adorama_text_box">
              <select className="adorama_text_box_select">
                <option value="Adorama Protect 1-year Protection Plan">
                  <p>Adorama Protect 1-year Protection Plan</p> $12.99
                </option>
                <option value="Adorama Protect 2-year Protection Plan">
                  <p>Adorama Protect 2-year Protection Plan</p>
                  $19.99
                </option>
                <option value="Adorama Protect 3-year Protection Plan">
                  <p>Adorama Protect 3-year Protection Plan</p>
                  $29.99
                </option>
              </select>
            </div>
            <div className="adorama_price_text_set">
              <div className="adorama_text_box_price">
                <p>$12.99</p>
              </div>
              <div className="adorama_text_box_price_button">
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p style={{ fontSize: "12px", color: "rgb(33, 126, 214)" }}>
            Available to U.S. customers only. Covers accidental damage &
            failure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
