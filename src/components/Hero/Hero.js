import { Carousel, CarouselItem } from "react-bootstrap";
import CarouselSlide from "../Carousel/Carousel";
import Button from "../ButtonCustom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Hero.scss";
const dataSlide = [
  {
    img: require("../../assets/img/hero/hero-img-3-1.jpg"),
    title: "Giving you a legendary haircut with traditional service.",
  },
  {
    img: require("../../assets/img/hero/hero-img-3-2.jpg"),
    title: "Offering you a modern haircut with special service.",
  },
  {
    img: require("../../assets/img/hero/hero-img-3-3.jpg"),
    title: "Take a cool & stylish haircut with wonderful service",
  },
];

function Hero() {
  return (
    <div className="hero-wrapper">
      <Carousel className="hero-carousel">
        {dataSlide.map((item, index) => {
          return (
            <CarouselItem key={index}>
              <img src={item.img} alt="Hero" />
              <Carousel.Caption>
                <div className="ls-wrapper ls-in-out">
                  <h1 className="hero-title ">{item.title}</h1>
                </div>
                <div className="ls-wrapper ls-in-out">
                  <span className="hero-subtitle">
                    Complete hair transformation.
                  </span>
                </div>
                <div className="ls-wrapper ls-in-out">
                  <Button
                    primary
                    shadow
                    rightIcon={
                      <FontAwesomeIcon
                        className="icon-btn-right"
                        icon={faArrowRight}
                      />
                    }
                  >
                    Make Appoiment
                  </Button>
                </div>
              </Carousel.Caption>
            </CarouselItem>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Hero;
