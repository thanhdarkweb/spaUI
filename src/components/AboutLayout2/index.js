import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AboutLayout2.scss";
import { faArrowRight, faPhone } from "@fortawesome/free-solid-svg-icons";
import ButtonCustom from "../ButtonCustom";
function AboutLayout2() {
  return (
    <div className="about-layout2 vs-about-wrapper position-relative space">
      <Container>
        <Row>
          <Col
            className="col-lg-6 col-xl-5 wow fadeInUp animated"
            style={{
              visibility: "visible",
              animationDelay: "0.3s",
              animationName: "c",
            }}
          >
            <div className="about-image-box4 position-relative mb-30 mb-lg-0 pb-90">
              <div className="big-img d-block d-lg-inline-block">
                <a href="about.html">
                  <img
                    src={require("./../../assets/img/about/about-img-4-1.jpg")}
                    alt="AboutImage"
                  />
                </a>
              </div>
              <div className="small-img1 d-none d-xl-inline-block">
                <a href="about.html">
                  <img
                    src={require("./../../assets/img/about/about-img-4-2.jpg")}
                    alt="AboutImage"
                    className="w-100"
                  />
                </a>
              </div>
              <div className="experance-box">
                <div className="box-content bg-theme">
                  <span className="text-font2 sec-title-style1 text-white counter">
                    25
                  </span>
                  <p className="text-font2 text-md mb-0 text-white">
                    Years Experience
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col className="col-lg-6 col-xl-6 align-self-center offset-xl-1">
            <div className="about-content-box4 pl-50">
              <h2 className="sec-title-style1">Our Features</h2>
              <p className="text-font2 text-20">
                Our fitness centre is one of the best in London and is equipped
                with the latest cutting edge equipment.
              </p>
              <div className="text-box1 py-0 media align-items-center">
                <div className="media-img mr-sm-4">
                  <img
                    src={require("./../../assets/img/about/about-img-2-2.jpg")}
                    alt="ThumbImage"
                  />
                </div>
                <div className="media-body">
                  <p className="mb-0">
                    A range of different massage techniques, reflexology, body
                    scrubs and facial are available on-site which will help.
                  </p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas.
              </p>
              <div className="vs-btn-group justify-content-start">
                <ButtonCustom
                  primary
                  shadow
                  changeColor
                  rightIcon={
                    <FontAwesomeIcon
                      className="icon-btn-right"
                      icon={faArrowRight}
                    />
                  }
                >
                  {" "}
                  Our Services{" "}
                </ButtonCustom>
                <ButtonCustom
                  primary
                  outline
                  leftIcon={
                    <FontAwesomeIcon className="icon-btn-left" icon={faPhone} />
                  }
                >
                  Make A Call
                </ButtonCustom>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutLayout2;
