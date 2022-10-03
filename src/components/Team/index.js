import { Col, Container, Row } from "react-bootstrap";
import Carousel from "../Carousel/Carousel";
import "./team.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { imgTeam } from "./dataSlide";
import CarouselCustom from "../Carousel/Carousel";
function Team() {
  return (
    <div className="team-wrapper">
      <Container>
        <Row className="text-center justify-content-center">
          <Col className="col-md-11 col-lg-8 col-xl-6 wow fadeInUp animated">
            <div className="title">
              <h2>Our Team</h2>
              <p className="text">
                Access to our fitness centre and pool is free to all our hotel
                guests. For non-guests membership packages are available.
              </p>
            </div>
          </Col>
        </Row>

        <CarouselCustom
          slideShow={3}
          className={
            "row vs-carousel wow fadeInUp slick-initialized slick-slider animated"
          }
        >
          {imgTeam.map((item, index) => {
            return (
              <Col className="col-xl-4" key={index}>
                <div className="vs-team">
                  <div className="vs-team-img image-scale-hover">
                    <a href="#">
                      <img src={item.img} alt="" />
                    </a>
                  </div>
                  <div className="vs-team-content">
                    <ul className="social-links links-hover-border"></ul>
                    <span className="plus-icon"></span>
                    <span className="vs-team-degi text-theme">Founder</span>
                    <h3 className="h4 vs-team-name mb-0">
                      <a href="#">Sowat Ahsan</a>
                    </h3>
                  </div>
                </div>
              </Col>
            );
          })}
        </CarouselCustom>
      </Container>
    </div>
  );
}

export default Team;
