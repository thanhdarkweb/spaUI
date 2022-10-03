import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarouselCustom({
  children,
  className,
  centerMod,
  slideScroll,
  slideShow,
}) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToScroll: slideScroll,
    slidesToShow: slideShow,
    className: className,
    // centerMode: centerMod,
    // variableWidth: true,
  };
  return (
    <Slider {...settings} autoplaySpeed={3000}>
      {children}
    </Slider>
  );
}

export default CarouselCustom;
