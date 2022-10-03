import { faArrowRight, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ButtonCustom from "../ButtonCustom";
import classNames from "classnames/bind";
import styles from "./about.scss";
const cx = classNames.bind(styles);

function About() {
  return (
    <div
      className={cx(
        "about-wrapper background-image bg-none-xl bg-bottom bg-light-smoke"
      )}
    >
      <Container>
        <Row className="justify-content-center text-center">
          <Col className="col-xl-8 wow fadeInUp animated">
            <div className="about-content-box">
              <h2 className="title-about">Clean cuts. Close shaves.</h2>
              <p className="text">
                Holisticly myocardinate interactive portals vis-a-vis highly
                efficient outsourcing. Distinctively reconceptualize interactive
                products and client-centered niche markets. Professionally
                conceptualize covalent services with sticky meta-services.
              </p>
              <div className="vs-btn-group justify-content-start">
                <ButtonCustom
                  primary
                  shadow
                  changeColor
                  className={"mb-3 mb-sm-0 mr-sm-3"}
                  rightIcon={
                    <FontAwesomeIcon
                      className="icon-btn-right"
                      icon={faArrowRight}
                    />
                  }
                >
                  Our Services
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

export default About;
