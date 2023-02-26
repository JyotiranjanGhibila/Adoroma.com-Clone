

import CartScreen from "./Components/CartScreen/CartScreen";
import CartAddress from "./Components/Checkout/Checkout";
import Payment from "./Components/Payment/Payment";
import Navbar from "./Components/Navbar/Navbar";

import "./App.css";
import MainRoutes from "./Pages/MainRoutes";
import Home from "./Pages/Home/Home";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Allroutes from "./Routes/Allroutes";



function App() {
  return (
    <div className="App">


     <Navbar/>
     <Home/>
     

      <Navbar/>
      <Allroutes/>



    </div>
  );
}

export default App;
