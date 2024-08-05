import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSliderAsync } from "../features/sliderSlice";

const MenuList = () => {
  const dispatch = useDispatch();

  const slider = useSelector((state) => state.slider.slider);

  useEffect(() => {
    dispatch(getSliderAsync());
  }, [dispatch]);
  return (
    <div className="App">
      {slider
        ? slider.map((item) => {
            return <img src={item} alt="" />;
          })
        : ""}
    </div>
  );
};

export default MenuList;
