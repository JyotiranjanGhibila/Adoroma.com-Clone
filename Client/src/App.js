import Navbar from "./Components/Navbar/Navbar";

import "./App.css";
import Home from "./Pages/Home/Home";
import AllComponents from "./Components/AllComponents";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AllComponents />
    </div>
  );
}

export default App;
