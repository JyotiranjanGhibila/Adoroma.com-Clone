import AllComponents from "./Components/AllComponents";

import CartScreen from "./Components/CartScreen/CartScreen";
import CartAddress from "./Components/Checkout/Checkout";
import Payment from "./Components/Payment/Payment";


import "./App.css";
import MainRoutes from "./Pages/MainRoutes";


function App() {
  return (
    <div className="App">

      {/* <Navbar /> */}
      {/* <AddToCartButton /> */}
      {/* <CartScreen /> */}
      {/* <AllComponents/> */}
      {/* <CartAddress /> */}
      <Payment/>

      {/* <AllComponents /> */}
      <MainRoutes/>

    </div>
  );
}

export default App;
