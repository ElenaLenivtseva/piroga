import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSliderAsync } from "../../features/sliderSlice";
import Slider from "react-slick";
import "./Slider.scss";

const SliderSection = () => {
  const dispatch = useDispatch();
  const slider = useSelector((state) => state.slider);

  useEffect(() => {
    dispatch(getSliderAsync());
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        {slider
          ? slider.map((item) => {
              return (
                <div className="slider__img-wrap">
                  <img className="slider__img" src={item.url} alt={item.alt} />
                </div>
              );
            })
          : ""}
      </Slider>
    </div>
  );
};

export default SliderSection;
