import Logo from "../../../Logo";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../../../ButtonCustom";

import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer-widget footer-widget-layout2 pt-100 pb-70">
      <Container>
        <Row className="gutters-40">
          <Col className="col-lg-4">
            <div className="widget">
              <div className="vs-widget-about pr-4">
                <div className="widget-about-logo mb-20 mb-lg-25">
                  <a href="index.html">
                    <img
                      src={require("../../../../assets/img/logo-white.png")}
                      alt="Logo White"
                    />
                  </a>
                </div>
                <p className="widget-about-text text-white mb-20">
                  Main practice areas of the firm include Admiralty, Maritime
                  and Ship Arrest, Arbitration, Mediation and ADRs, Aviation
                  Matters, Banking, Finance &amp; Investment, Capital Market
                </p>
                <p className="contact-info-style1 text-white">
                  <FontAwesomeIcon icon={faPhone} />
                  <a href="tel:+098986876765">+098 986 8767 65</a>
                </p>
                <p className="contact-info-style1 text-white">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <a href="mailto:mixlax@email.com">mixlax@email.com</a>
                </p>
              </div>
            </div>
          </Col>
          <Col className="col-md-6 col-lg-4">
            <div className="widget">
              <h3 className="widget_title text-white">Latest Posts</h3>
              <div className="vs-widget-recent-post has-light-border-white">
                <div className="recent-post d-flex align-items-center media">
                  <div className="media-img">
                    <img
                      src={require("../../../../assets/img/widget/post-thumb-1.jpg")}
                      alt="Logo White"
                    />
                  </div>
                  <div className="media-body pl-20">
                    <span className="text-white">
                      <FontAwesomeIcon icon={faCalendar} /> 05 June, 2020.
                    </span>
                    <h4 className="h5 mb-0 text-white">
                      <a href="blog.html">
                        Managing Partner along with Senior Counsels.
                      </a>
                    </h4>
                  </div>
                </div>
                <div className="recent-post d-flex align-items-center media">
                  <div className="media-img">
                    <img
                      src={require("../../../../assets/img/widget/post-thumb-2.jpg")}
                      alt="Logo White"
                    />
                  </div>
                  <div className="media-body pl-20">
                    <span className="text-white">
                      <FontAwesomeIcon icon={faCalendar} /> 28 June, 2020.
                    </span>
                    <h4 className="h5 mb-0 text-white">
                      <a href="blog.html">
                        Managing Partner along with Senior Counsels.
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col className="col-md-6 col-lg-4">
            <div className="widget widget_nav_menu">
              <h3 className="widget_title text-white">Our Pages</h3>
              <div className="menu-all-pages-container style-white">
                <ul className="menu">
                  <li>
                    <a href="#">How It Works</a>
                  </li>
                  <li>
                    <a href="#">Our History</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Our Products</a>
                  </li>
                  <li>
                    <a href="#">Policy</a>
                  </li>
                  <li>
                    <a href="#">Home Service</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Settings</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
