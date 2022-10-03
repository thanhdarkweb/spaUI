import { Col, Container, Row } from "react-bootstrap";
import CarouselCustom from "../Carousel/Carousel";
import "./brand.scss";

function Brand() {
  const dataSlideBrand = [
    { img: require("./../../assets/img/brand/brand-img-1-1.png") },
    { img: require("./../../assets/img/brand/brand-img-1-2.png") },
    { img: require("./../../assets/img/brand/brand-img-1-3.png") },
    { img: require("./../../assets/img/brand/brand-img-1-4.png") },
    { img: require("./../../assets/img/brand/brand-img-1-5.png") },
  ];

  return (
    <div
      className="brand-wrapper brand-layout2   space pl-150 pr-150"
      data-overlay
    >
      <Container fluid={true} className="z-index-step1">
        <CarouselCustom
          slideScroll={1}
          slideShow={4}
          className={"row text-center"}
        >
          {dataSlideBrand.map((item, index) => {
            return (
              <Col key={index}>
                <div className="brand">
                  <img src={item.img} alt="" />
                </div>
              </Col>
            );
          })}
        </CarouselCustom>
      </Container>
    </div>
  );
}

export default Brand;
