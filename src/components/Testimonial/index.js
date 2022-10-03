import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";

import "./Testimonial.scss";
import { imgSlide, SlideHeader } from "./dataSlide";
import CarouselCustom from "../Carousel/Carousel";

function Testimonial() {
  return (
    <div
      className="testimonial-wrapper space "
      data-overlay="black"
      data-opacity="6"
    >
      <Container className="z-index-common">
        <Row className="justify-content-center wow fadeIn animated align-items-center">
          <Col className="col-12 text-center">
            <Col className="col-12 text-center">
              <span className="quote-icon-style1 has-white-shape fa-4x">
                <FontAwesomeIcon icon={faQuoteLeft} />
              </span>
            </Col>
          </Col>
          <Col className="col-xl-10">
            <CarouselCustom
              slideScroll={1}
              slideShow={1}
              className={"testimonial-content-area text-center "}
            >
              {SlideHeader.map((item, index) => {
                return (
                  <div className="content" key={index}>
                    <h2 className="text-white">{item.title}</h2>
                    <p className="text-white text-20">{item.desc}</p>
                  </div>
                );
              })}
            </CarouselCustom>
          </Col>

          <Col className="col-12">
            <div className="border-line">
              <img
                src={require("../../assets/img/testimonial/border-line-2-1.png")}
                alt="line"
              />
            </div>
          </Col>
          <Col className="col-xl-12 mb-20">
            <CarouselCustom
              centerMode={true}
              slideShow={3}
              slideScroll={1}
              className={"testimonial-avater"}
            >
              {imgSlide.map((item, index) => {
                return (
                  <div className="author-img" key={index}>
                    <img src={item.img} alt="" />
                  </div>
                );
              })}
            </CarouselCustom>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Testimonial;
