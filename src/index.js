import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Kraje from "./Kraje"
import "./index.css"

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/main" element={<App />} />
      <Route path="/kraje" element={<Kraje />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);