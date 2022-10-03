import { Col, Container, Row } from "react-bootstrap";
import "./Specality.scss";

function Specality() {
  return (
    <section
      className="vs-features-wrapper vs-features-layout1 overflow-hidden background-image position-relative space"
      data-vs-img="assets/img/feature/feature-bg-img-3-1.jpg"
      id="feature"
      //   style='background-image: url("assets/img/feature/feature-bg-img-3-1.jpg");'
    >
      <div className="shape3 position-absolute d-none d-lg-block">
        <img
          src={require("../../assets/img/feature/feature-img-men-3-1.png")}
          alt=""
        />
      </div>
      <div className="shape4 position-absolute d-none d-lg-block"></div>
      <div className="shape5 position-absolute d-none d-lg-block"></div>
      <Container>
        <Row className="row justify-content-center text-center">
          <div className="col-md-11 col-lg-8 col-xl-6">
            <div className="section-title z-index-common">
              <h2 className="sec-title-style1">Our Specality</h2>
              <p className="sec-text-style1">
                Access to our fitness centre and pool is free to all our hotel
                guests. For non-guests membership packages are available.
              </p>
            </div>
          </div>
        </Row>
        <div className="inner-wrapper pt-lg-3 pt-xl-5 mt-xl-2">
          <Row className="justify-content-between">
            <Col className="col-sm-6 col-lg-4">
              <div
                className="vs-feature media wow fadeInUp animated"
                data-wow-delay="0.3s"
                // style="visibility: visible; animation-delay: 0.3s; animation-name: c;"
              >
                <div className="media-icon">
                  <span className="icon-btn has-border text-theme bg-white">
                    <i className="fa-2x flaticon-beauty-treatment"></i>
                  </span>
                </div>
                <div className="media-body">
                  <h3 className="feature-title h4 mb-10">Matt Effects</h3>
                  <p className="feature-text">
                    A range of different massage techniques reflexology
                  </p>
                </div>
              </div>
              <div
                className="vs-feature media wow fadeInUp animated"
                data-wow-delay="0.4s"
                // style="visibility: visible; animation-delay: 0.4s; animation-name: c;"
              >
                <div className="media-icon">
                  <span className="icon-btn has-border text-theme bg-white">
                    <i className="fa-2x flaticon-herbal"></i>
                  </span>
                </div>
                <div className="media-body">
                  <h3 className="feature-title h4 mb-10">Sauna Ready</h3>
                  <p className="feature-text">
                    A range of different massage techniques reflexology
                  </p>
                </div>
              </div>
              <div
                className="vs-feature media wow fadeInUp animated"
                data-wow-delay="0.5s"
                // style="visibility: visible; animation-delay: 0.5s; animation-name: c;"
              >
                <div className="media-icon">
                  <span className="icon-btn has-border text-theme bg-white">
                    <i className="fa-2x flaticon-slipper"></i>
                  </span>
                </div>
                <div className="media-body">
                  <h3 className="feature-title h4 mb-10">Natural Mask</h3>
                  <p className="feature-text">
                    A range of different massage techniques reflexology
                  </p>
                </div>
              </div>
            </Col>
            <Col className="col-sm-6 col-lg-4">
              <div
                className="vs-feature media wow fadeInUp animated"
                data-wow-delay="0.3s"
                // style="visibility: visible; animation-delay: 0.3s; animation-name: c;"
              >
                <div className="media-icon">
                  <span className="icon-btn has-border text-theme bg-white">
                    <i className="fa-2x flaticon-stones"></i>
                  </span>
                </div>
                <div className="media-body">
                  <h3 className="feature-title h4 mb-10">Relax Zones</h3>
                  <p className="feature-text">
                    A range of different massage techniques reflexology
                  </p>
                </div>
              </div>
              <div
                className="vs-feature media wow fadeInUp animated"
                data-wow-delay="0.4s"
                // style="visibility: visible; animation-delay: 0.4s; animation-name: c;"
              >
                <div className="media-icon">
                  <span className="icon-btn has-border text-theme bg-white">
                    <i className="fa-2x flaticon-essential"></i>
                  </span>
                </div>
                <div className="media-body">
                  <h3 className="feature-title h4 mb-10">Hair Diration</h3>
                  <p className="feature-text">
                    A range of different massage techniques reflexology
                  </p>
                </div>
              </div>
              <div
                className="vs-feature media wow fadeInUp animated"
                data-wow-delay="0.5s"
                // style="visibility: visible; animation-delay: 0.5s; animation-name: c;"
              >
                <div className="media-icon">
                  <span className="icon-btn has-border text-theme bg-white">
                    <i className="fa-2x flaticon-lotus-flower-1"></i>
                  </span>
                </div>
                <div className="media-body">
                  <h3 className="feature-title h4 mb-10">Aromo Therophy</h3>
                  <p className="feature-text">
                    A range of different massage techniques reflexology
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Specality;
