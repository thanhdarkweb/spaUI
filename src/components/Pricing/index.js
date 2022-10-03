/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Container, Row } from "react-bootstrap";
import BoxPricing from "../BoxPricing";
import PriceList from "../PriceList";
import "./pricing.scss";
function Pricing() {
  return (
    <div className="pricingWrapper background-image bg-bottom space">
      <Container>
        <Row className="justify-content-center text-center">
          <Col className="col-md-11 col-lg-8 col-xl-6 wow fadeIn animated">
            <div className="sec-title">
              <h2 className="title">Price Plans</h2>
              <p className="text">
                Access to our fitness centre and pool is free to all our hotel
                guests. For non-guests membership packages are available.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="col-lg-6 wow fadeIn animated">
            <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  id="basicPlan-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#basicPlan"
                  type="button"
                  role="tab"
                  aria-controls="basicPlan"
                  aria-selected="true"
                >
                  Basic Plan
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="Family-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#Family"
                  type="button"
                  role="tab"
                  aria-controls="Family"
                  aria-selected="false"
                >
                  Family Plan
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="row no-gutters">
          <Col className="col-lg-6 mb-30 mb-lg-0 wow fadeInUp animated">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="basicPlan"
                role="tabpanel"
                aria-labelledby="basicPlan-tab"
              >
                <BoxPricing />
              </div>
              <div
                className="tab-pane fade"
                id="Family"
                role="tabpanel"
                aria-labelledby="Family-tab"
              >
                <BoxPricing />
              </div>
            </div>
          </Col>
          <Col className="col-lg-6 wow fadeInUp animated">
            <PriceList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Pricing;
