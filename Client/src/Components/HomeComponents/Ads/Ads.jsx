import { Text,Image,Container,Box } from "@chakra-ui/react";

import  "./Ads.css"
export default function Ads() {
  return (
    <div className="Advertise_box" display={["none","none","none","block"]}>
      <div>
        <Image
          src="https://cdn.shopify.com/s/files/1/0034/7504/6445/articles/Guide_to_EMove_Roadrunner_Seated_Scooter_1080x616.jpg?v=1659075542"
          width="100%"
        />
        <Text fontSize="3xl">Ride into New Year in Style !</Text>
        <Text>X10 Electric Scooter with Dual-drive motors - </Text>
        <Text>Shop Now</Text>
      </div>

      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzYjGSoNmO3xTnZuzR2zdedz4ZtgPZyH9gbQ&usqp=CAU"
          width="100%"
        />
        <Text fontSize="3xl">Bundle. Upgrade. Reward.</Text>
        <Text>
          Save up to $2300 on SL Camera & Prime Lenses with the Leica SL
          Customer Appreciation Program. Now through February 7th, 2023.
        </Text>
        <Text>Shop Now</Text>
      </div>
    </div>
  );
}
