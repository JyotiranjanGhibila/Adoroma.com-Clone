
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {Provider} from "react-redux"
import {store} from "./Redux/store"
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ChakraProvider>
      <Provider store={store}>
      <App />
      </Provider>
      
    </ChakraProvider>
  </BrowserRouter>

);

reportWebVitals();
