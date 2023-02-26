import AllComponents from "./Components/AllComponents";

import CartScreen from "./Components/CartScreen/CartScreen";
import CartAddress from "./Components/Checkout/Checkout";
import Payment from "./Components/Payment/Payment";
import Navbar from "./Components/Navbar/Navbar";

import "./App.css";
import MainRoutes from "./Pages/MainRoutes";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">

     

     <Navbar/>
     <Home/>
     

    </div>
  );
}

export default App;
