import "./App.css";
import Navgation from "./components/NavgationBar";
import SideBar from "./components/SideBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import AddNewProduct from "./Pages/AddNewProduct";
import AboutUS from "./Pages/AboutUS";
import ShowProduct from "./Pages/ShowProduct.jsx";

function App() {
  return (
    <div className="App">
      <Navgation />
      <div className="row container-fluid">
        <div className="col-2 sideBar">
          <SideBar />
        </div>{" "}
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home />} />{" "}
            <Route path="/products" element={<Products />}>
              {" "}
            </Route>{" "}
            <Route path="/products/add" element={<AddNewProduct />} />{" "}
            <Route path="/AboutUS" element={<AboutUS />} />{" "}
            <Route path="/products/:prodID" element={<ShowProduct />} />{" "}
          </Routes>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default App;
