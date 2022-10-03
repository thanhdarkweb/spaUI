import { Col, Container, Row } from "react-bootstrap";
import CardServices from "../CardServices";
import dataCardHome from "../CardServices/DataCardServiecHome";
import "./services.scss";
function Services() {
  return (
    <div className="services-wrapper pt-130 pb-100">
      <Container>
        <Row className=" justify-content-center text-center">
          <Col className="col-md-11 col-lg-8 col-xl-6 wow fadeInUp animated">
            <div className="sec-title">
              <h2 className="title">Our Services</h2>
              <p className="text">
                Access to our fitness centre and pool is free to all our hotel
                guests. For non-guests membership packages are available.
              </p>
            </div>
          </Col>
        </Row>
        <CardServices borderDot Hover>
          {dataCardHome.map((item, index) => {
            return (
              <Col className="col-sm-6 col-lg-4 col-xl-3" key={index}>
                <div className="vs-service">
                  <span className="service-icon">{item.logo}</span>
                  <div className="service-content">
                    <h3 className="service-title">{item.title}</h3>
                    <p className="service-text">{item.desc}</p>
                  </div>
                </div>
              </Col>
            );
          })}
        </CardServices>
      </Container>
    </div>
  );
}

export default Services;
