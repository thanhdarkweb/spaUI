import { Col, Container, Row } from "react-bootstrap";
import "./feature.scss";

function Feature() {
  return (
    <div className="feature-wrapper">
      <Container>
        <Row>
          <Col>
            <div className="feature">
              <div className="box-feature">
                <div className="box-price">
                  <span className="text">Start</span>
                  <span className="price">
                    <sub>$</sub>
                    30
                  </span>
                  <span className="sub">/off</span>
                </div>
              </div>
              <div className="img">
                <img
                  src={require("../../assets/img/feature/feature-img-2-1.jpg")}
                  alt="Feature"
                />
              </div>
              <div className="box-conten">
                <h4>Hair Treatment</h4>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </span>
              </div>
            </div>
          </Col>

          <Col>
            <div className="vs-feature mb-20">
              <div className="img">
                <img
                  src={require("../../assets/img/feature/feature-img-2-3.jpg")}
                  alt="Feature"
                />
              </div>
              <div className="vs-feature-content">
                <h4>Hair Treatment</h4>
              </div>
            </div>
            <div className="vs-feature">
              <div className="img">
                <img
                  src={require("../../assets/img/feature/feature-img-2-2.jpg")}
                  alt="Feature"
                />
              </div>
              <div className="vs-feature-content">
                <h4>Hair Treatment</h4>
              </div>
            </div>
          </Col>

          <Col>
            <div className="feature">
              <div className="box-feature">
                <div className="box-price">
                  <span className="text">Start</span>
                  <span className="price">
                    <sub>$</sub>
                    30
                  </span>
                  <span className="sub">/off</span>
                </div>
              </div>
              <div className="img">
                <img
                  src={require("../../assets/img/feature/feature-img-2-1.jpg")}
                  alt="Feature"
                />
              </div>
              <div className="box-conten">
                <h4>Hair Treatment</h4>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Feature;
