import { useState } from "react";
import propTypes from "prop-types";
import ButtonSlider from "./ButtonSlider";

export default function Slider({ pictures }) {
  const [slideIndex, setSlideIndex] = useState(1);
  const nextSlide = () => {
    if (slideIndex !== pictures.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === pictures.length) {
      setSlideIndex(1);
    }
  };
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(pictures.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider max-w-[700px] h-[500px] relative overflow-hidden m-10">
      {pictures.map((picture, index) => (
        <img
          key={picture.id}
          className={`${
            slideIndex === index + 1 ? "opacity-100" : "opacity-0"
          } absolute w-full h-full transition-opacity duration-500 ease-in-out`}
          src={picture.path}
          alt={`picture ${picture.id}`}
        />
      ))}
      <ButtonSlider moveSlide={nextSlide} direction={"next"} />
      <ButtonSlider moveSlide={prevSlide} direction={"prev"} />
      <div className="container-dots absolute flex bottom-0 left-1/2 transform -translate-x-1/2">
        {Array.from({ length: pictures.length }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            key={index}
            className={`${
              slideIndex === index + 1
                ? "bg-gray-700 border-4 border-white"
                : "dots"
            } bg-white w-6 h-6 rounded-full mx-2 mb-2 z-10 cursor-pointer`}
          />
        ))}
      </div>
    </div>
  );
}

Slider.propTypes = {
  pictures: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      path: propTypes.string.isRequired,
    })
  ).isRequired,
};
