import PropTypes from "prop-types";
import Slider from "react-slick";
import { useMediaQuery } from "@react-hook/media-query";

import DealsCard from "../DealsCard/DealsCard";

export default function Carousel({ deals }) {
  const isMinWidth1024 = useMediaQuery("(min-width: 1024px)");

  const settings = {
    className: "center",
    arrows: false,
    dots: false,
    centerMode: true,
    infinite: true,
    centerPadding: isMinWidth1024 ? "90px" : "32px",
    slidesToShow: isMinWidth1024 ? 4 : 1,
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
