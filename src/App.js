import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConditionsOfDelivery from "./components/ConditionsOfDelivery";
import About from "./components/About";
import Admin from './components/Admin'
import Home from "./components/Home";
import Menu from "./components/Menu/Menu";
import CategoryDetail from "./components/CategoryDetail";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Cart from "./components/Cart";
import Update from "./components/Update";

function App() {
  return (
    <>
    <BrowserRouter>
    <Menu />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/delivery" element={<ConditionsOfDelivery />} />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/categories/:type" element={<CategoryDetail />} />
          <Route path="/:id" element={<SingleProduct />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
