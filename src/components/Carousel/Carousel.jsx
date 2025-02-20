import Slider from "react-slick";
import CardDeals from "../CardDeals/CardDeals";

const deals = [
  {
    id: 1,
    crypto: "NEAR/USDT",
    value: "58.6206%",
  },
  {
    id: 2,
    crypto: "BTC/USDT",
    value: "6.02%",
  },
  {
    id: 3,
    crypto: "ETH/USDT",
    value: "16.3%",
  },
  {
    id: 4,
    crypto: "NEAR/USDT",
    value: "0.963%",
  },
  {
    id: 5,
    crypto: "NEAR/USDT",
    value: "58.6206%",
  },
  {
    id: 6,
    crypto: "BTC/USDT",
    value: "22.963%",
  },
];

export default function Carousel() {
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
          <CardDeals key={deal.id} deal={deal} />
        ))}
      </Slider>
    </div>
  );
}
