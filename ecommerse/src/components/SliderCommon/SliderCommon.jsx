import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';
import { SlArrowLeft } from 'react-icons/sl';
import { SlArrowRight } from 'react-icons/sl';
import './styles.css';

function SliderCommon({ data }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SlArrowRight />,
    prevArrow: <SlArrowLeft />,
  };
  return (
    <Slider {...settings}>
      {data.map((src, index) => {
        return <img src={src} key={index} alt='test' />;
      })}
    </Slider>
  );
}

export default SliderCommon;
