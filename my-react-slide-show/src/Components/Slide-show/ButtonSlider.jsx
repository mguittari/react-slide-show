import leftArrow from "../Slide-show/Icons/left-arrow.svg";
import rightArrow from "../Slide-show/Icons/right-arrow.svg";
import propTypes from "prop-types";

export default function ButtonSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={`${
        direction === "next" ? "right-0" : "left-0"
      } absolute w-[60px] h-[60px] cursor-pointer bottom-[225px] bg-white rounded-full mx-1`}
    >
      <img src={`${direction === "next" ? rightArrow : leftArrow}`} alt="" />
    </button>
  );
}

ButtonSlider.propTypes = {
  direction: propTypes.oneOf(["next", "prev"]).isRequired,
  moveSlide: propTypes.func.isRequired,
};
