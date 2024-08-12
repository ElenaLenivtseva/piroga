import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConditionsOfDelivery from "./components/ConditionsOfDelivery";
import About from "./components/About";
import Admin from './components/Admin'
import Home from "./components/Home";
import Menu from "./components/Menu";
import CategoryDetail from "./components/CategoryDetail";
import SingleProduct from "./components/SingleProduct";
import Cart from "./components/Cart";

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
          <Route path="/categories/:type/:id" element={<SingleProduct />} />
          {/* <Route path="/account" element={<PageAccount/>} >
                    <Route index element={<PageAccount />} />
                    <Route path=":id" element={<PageAccount />} />
                </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
