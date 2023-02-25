import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import "./addToCartModal.css";

export default function AddToCartButton({ data }) {
  console.log("data", data);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        style={{ background: "rgb(239,82,51)", color: "white" }}
      >
        Add to Cart
      </Button>

      <Modal
        className="main-container"
        size="2xl"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <div className="header">
          <ModalContent h="550px" border="10px solid rgb(242,242,242)">
            <ModalHeader>1 Product item has been added to the Cart</ModalHeader>
            <ModalCloseButton />
            <ModalBody className="container">
              <div className="left-container">
                <div className="left">
                  <div>
                    <img
                      src="https://www.adorama.com/images/130x130/fpppx400prb.jpg"
                      alt="battery"
                    />
                  </div>
                  <div>
                    <p>
                      FREE SHIPPING Flashpoint
                      <br />
                      Lithium-Ion Battery Pack for
                      <br />
                      XPLOR 400 PRO (21.6V, 2600mHh)
                    </p>
                  </div>
                </div>
                <div className="right-price">
                  <p className="price">Price- $169.00</p>
                </div>
              </div>
              {/* .............................................................. */}
              <div className="viewCheck">
                <div className="view">
                  <a href="">View Cart</a>
                </div>
                <div className="check">
                  <a href="">CheckOut</a>
                </div>
              </div>
              {/* ............................................................... */}
              <div className="footer-main">
                <div className="footer-first">
                  <div className="img-careplus">
                    <img
                      className="img"
                      src="	https://www.adorama.com/image/ui/warranty/canoncare.jpg"
                      alt=""
                    />
                  </div>
                  <div className="care-para">
                    <p className="care-para-part">
                      CarePAK PLUS provided through Canon offers protection from
                      accidental damage such as drops, spills, power surges, and
                      more including normal wear and tear, beyond the standard
                      warranty period.
                    </p>
                  </div>
                </div>
                <div className="footer-second">
                  <div className="footer-sec">
                    <a href="https://www.adorama.com/als.mvc/nspc/Product/GetQuickViewWarrantyPopupContent/CACP4750">
                      Canon CarePAK PLUS 4 Year Plan EOS DSLR &amp; Mirrorless
                      Cameras (Up to $750){" "}
                    </a>
                    <span>$199.99</span>
                    <button className="foot-button">Add</button>
                  </div>
                  <div className="footer-sec">
                    <a href="https://www.adorama.com/icat7k.html">
                      Canon CarePAK PLUS 2 Year Plan EOS DSLR &amp; Mirrorless
                      Cameras (Up to $750)
                    </a>
                    <span>$149.99</span>
                    <button className="foot-button">Add</button>
                  </div>
                  <div className="footer-sec">
                    <a href="https://www.adorama.com/icat7k.html">
                      Canon CarePAK PLUS 3 Year Plan EOS DSLR &amp; Mirrorless
                      Cameras (Up to $750)
                    </a>
                    <span>$175.99</span>
                    <button className="foot-button">Add</button>
                  </div>
                </div>
              </div>
            </ModalBody>
          </ModalContent>
        </div>
      </Modal>
    </>
  );
}
