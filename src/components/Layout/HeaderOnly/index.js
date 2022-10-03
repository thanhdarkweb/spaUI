import style from "./HeaderOnly.module.scss";
import classname from "classnames/bind";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import Button from "../../ButtonCustom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
const cx = classname.bind(style);
function HeaderOnly() {
  return (
    <div className={cx("header-wrapper")}>
      <Container fluid={true} className="position-relative">
        <Row className={cx("align-items-center wrapper")}>
          <Col className="col-xl-2 d-none d-xl-block">
            <div className={cx("menu-button--left")}>
              <Button className={cx("btn-header icon-btn text-white mr-2")}>
                <FontAwesomeIcon icon={faPhone} />
              </Button>
              <Button className={cx(" icon-btn text-white mr-2")}>
                <FontAwesomeIcon icon={faEnvelope} />
              </Button>
            </div>
          </Col>
          <Col className="col-md-5 col-xl-3 position-static d-none d-lg-block">
            <Navbar>
              <Nav className="me-auto">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/servieces">Services</NavLink>
              </Nav>
            </Navbar>
          </Col>
          <Col className="col-6 col-lg-2 col-xl-2">
            <div className={cx("logo")}>
              <img src={require("../../../assets/img/logo.png")} alt="LOGO" />
            </div>
          </Col>
          <Col className="col-md-5 col-xl-3 position-static d-none d-lg-block">
            <Navbar>
              <Container>
                <Nav className="me-auto">
                  <NavLink to="/news">News</NavLink>
                  <NavLink to="/pages">pages</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
                </Nav>
              </Container>
            </Navbar>
          </Col>
          <Col className="col-xl-2 d-none d-xl-block">
            <div className={cx("menu-button--right text-right")}>
              <Button className={cx(" icon-btn text-white  mr-2")}>
                <FontAwesomeIcon icon={faPhone} />
              </Button>
              <Button className={cx(" icon-btn text-white mr-2")}>
                <FontAwesomeIcon icon={faEnvelope} />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeaderOnly;
