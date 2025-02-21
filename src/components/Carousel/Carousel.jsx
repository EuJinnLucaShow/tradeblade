import PropTypes from "prop-types";
import Slider from "react-slick";
import DealsCard from "../DealsCard/DealsCard";

export default function Carousel({ deals }) {
  const settings = {
    className: "center",
    arrows: false,
    dots: false,
    centerMode: true,
    infinite: true,
    centerPadding: "32px",
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    variableWidth: false,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {deals.map((deal) => (
          <DealsCard key={deal.id} deal={deal} />
        ))}
      </Slider>
    </div>
  );
}

Carousel.propTypes = {
  deals: PropTypes.array,
};
