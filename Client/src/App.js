import AllComponents from "./Components/AllComponents";
import Gaming from "./Components/Products/Gaming";

import Navbar from "./Components/Navbar";
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
  );
}

export default App;
