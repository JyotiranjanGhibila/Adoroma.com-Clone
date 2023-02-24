
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";

import Home from "./Pages/Home/Home";

import AllComponents from "./Components/AllComponents";


import "./App.css";

import CartAddress from "./Components/Checkout/Checkout";




import Photography from "./Components/Products/Photography";



function App() {
  return (
    <div className="App">

      <Navbar />
      <Home />

      <CartAddress />

     <AllComponents/>


    </div>
  );
}


export default App;
