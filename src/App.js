import { useEffect } from "react";
import "./App.css";
import MenuList from "./components/MenuList";
import { useDispatch, useSelector } from "react-redux";
import { getSliderAsync } from "./features/sliderSlice";

function App() {
  const dispatch = useDispatch();

  const slider = useSelector((state) => state.slider.slider);
  console.log(slider)
  useEffect(() => {
    dispatch(getSliderAsync());
  }, [dispatch]);
  return <div className="App">
    {slider?(slider.map((item)=>{
      return (
        <img src={item} alt=''/>
      )
    })):''}
  </div>;
}

export default App;
