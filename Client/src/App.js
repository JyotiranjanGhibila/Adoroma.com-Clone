
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";

import Home from "./Pages/Home/Home";

import Allroutes from "./Routes/Allroutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    <Allroutes/>

    </div>
  );
}

export default App;
