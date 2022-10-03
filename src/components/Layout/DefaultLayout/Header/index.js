import { faBagShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../../../Logo";
import Menu from "../../../Menu";
import Button from "../../../ButtonCustom";

function Header() {
  return (
    <Container fluid={true}>
      <Row className=" align-items-center">
        <Col className="col-6 col-lg-2">
          <Logo />
        </Col>
        <Col className="col-lg-8 position-static d-none d-lg-block">
          <Menu />
        </Col>
        <Col className="col-lg-2 text-right d-none d-lg-flex justify-content-end">
          <Button className="btn-header icon-btn text-white mr-2">
            <FontAwesomeIcon icon={faBagShopping} />
          </Button>
          <Button className=" icon-btn text-white mr-2">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
