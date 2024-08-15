import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSliderAsync } from "../features/sliderSlice";

const Slider = () => {
  const dispatch = useDispatch();

  const slider = useSelector((state) => state.slider);
  console.log(slider)
  useEffect(() => {
    dispatch(getSliderAsync());
  }, [dispatch]);
  return (
    <div className="App">
      {slider
        ? slider.map((item) => {
            return <img src={item.url} alt={item.alt} />;
          })
        : ""}
    </div>
  );
};

export default Slider;
