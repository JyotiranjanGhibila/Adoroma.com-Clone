import Navbar from "./Components/Navbar/Navbar";

import Home from "./Pages/Home/Home";

import "./App.css";
import Allroutes from "./Routes/Allroutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />

      <Navbar />
      <Allroutes />
    </div>
  );
}

export default App;
