import AllComponents from "./Components/AllComponents";
import Gaming from "./Components/Products/Gaming";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";

import Camera from "./Components/Products/Camera";
import AddToCartButton from "./Components/cartComponents/AddtoCartModal";

function App() {
  return (
    <div className="App">
      <AddToCartButton />
      <Navbar />
      <AllComponents />
    </div>
  )

  }

export default App
