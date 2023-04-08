import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const MainCarousel = () => {
  return (
    <Carousel
      autoPlay={true}
      labels={false}
      showThumbs={false}
      infiniteLoop={true}
    >
      <div>
        <img src="https://www.adorama.com/images/cms/36471NPA-Sony-50mm-GM-Hero-Desktop-PO@1.25x_73027.jpg" />
      </div>
      <div>
        <img src="https://www.adorama.com/images/cms/36471Hero-Semi-Annual-Desktop@2x_11210.jpg" />
      </div>
      <div>
        <img src="https://www.adorama.com/images/cms/36471New-Blackmagicdesign-022023-Hero-Desktop_(1)_65733.jpg" />
      </div>
      <div>
        <img src="https://www.adorama.com/images/cms/36471Feb_Computer_and_Gaming_Week-Hero-Desktop_09496.jpg" />
      </div>
      <div>
        <img src="https://www.adorama.com/images/cms/36471Hero-Presidents-Day-Sale-Desktop@2x_10411.jpg" />
      </div>
      <div>
        <img src="https://www.adorama.com/images/cms/36471Hero-Presidents-Day-Sale-Desktop@2x_10411.jpg" />
      </div>
    </Carousel>
  );
};

export default MainCarousel;
