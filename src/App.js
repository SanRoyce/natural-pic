import "../src/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import MyContext from "./context/MyContext";

export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
