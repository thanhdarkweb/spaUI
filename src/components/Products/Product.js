import { faBorderAll, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Product.scss";
function Product() {
  return (
    <Container>
      <Row>
        <Col className="col-lg-8">
          <div className="product-sort-bar mb-30">
            <Row className="row align-items-center">
              <Col className="col-md-5 text-center text-lg-left">
                <div className="sort-bar-left">
                  <h2 className="h5 bar-title mb-md-0 text-font1">
                    Showing 1–10 of 47 results
                  </h2>
                </div>
              </Col>
              <Col className="col-md-7 d-sm-flex justify-content-center justify-content-lg-end select-box-area">
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Button className="icon-btn">
                  <FontAwesomeIcon icon={faBorderAll} />
                </Button>
                <Button className="icon-btn">
                  <FontAwesomeIcon icon={faList} />
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Product;
