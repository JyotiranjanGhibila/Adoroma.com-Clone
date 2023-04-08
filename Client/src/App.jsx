import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./Components/HomePage/Footer";
import AppRoutes from "./routes/AppRoutes";
import { useLocation } from "react-router";


function App() {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== "/admin" && <Navbar />}
      <AppRoutes />
      {pathname !== "/admin" && <Footer />}
     
    </>
  );
}

export default App;
