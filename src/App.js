import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConditionsOfDelivery from "./components/ConditionsOfDelivery";
import About from "./components/About";
import Home from "./components/Home";
import Menu from "./components/Menu";

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Menu />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/delivery" element={<ConditionsOfDelivery />} />
          <Route path="/" element={<Home />} />
          
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
