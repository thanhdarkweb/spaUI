import { faHome, faMailReply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import Appointment from "../components/Appointment";
import Button from "../components/ButtonCustom";
import CarouselCustom from "../components/Carousel/Carousel";
import FormContact from "../components/Form/FormContact";
import Banner from "../components/Layout/DefaultLayout/Banner";
import Map from "../components/Map/Map";
import "./Contact.scss";
const dataSlideContact = [
  {
    logo: <FontAwesomeIcon icon={faMailReply} />,
    city: "New York",
    phone: "0943351142",
    email: "info@gmail.com",
    office: "14/4,Brow tower,New York,US",
  },
  {
    logo: <FontAwesomeIcon icon={faMailReply} />,
    city: "New York",
    phone: "0943351142",
    email: "info@gmail.com",
    office: "14/4,Brow tower,New York,US",
  },
  {
    logo: <FontAwesomeIcon icon={faMailReply} />,
    city: "New York",
    phone: "0943351142",
    email: "info@gmail.com",
    office: "14/4,Brow tower,New York,US",
  },
  {
    logo: <FontAwesomeIcon icon={faMailReply} />,
    city: "New York",
    phone: "0943351142",
    email: "info@gmail.com",
    office: "14/4,Brow tower,New York,US",
  },
  {
    logo: <FontAwesomeIcon icon={faMailReply} />,
    city: "New York",
    phone: "0943351142",
    email: "info@gmail.com",
    office: "14/4,Brow tower,New York,US",
  },
];

function Contact() {
  return (
    <div className="contact-wrapper">
      <Banner>
        <h1 className="breadcumb-title sec-title-style1 text-white mt-0 mb-2">
          Our Treatments
        </h1>
        <ul className="breadcumb-menu-style1 text-white">
          <li>
            <a href="index.html">
              <FontAwesomeIcon icon={faHome} />
              Home
            </a>
          </li>
          <li>Contact</li>
        </ul>
      </Banner>

      <div className="vs-contactinfo-wrapper space-top space-md-bottom">
        <Map />
        <Container>
          <Row>
            <CarouselCustom slideScroll={1} slideShow={3} centerMod={true}>
              {dataSlideContact.map((item, index) => {
                return (
                  <Col className="col-lg-4 " key={index}>
                    <div className="vs-contact-box1 text-center mb-30">
                      <div
                        className="contact-img background-image"
                        data-overlay="black"
                        data-opacity="7"
                      ></div>
                      <span className="text-theme mb-4 d-block">
                        {item.logo}
                      </span>
                      <h4 className="mb-15">{item.city}</h4>
                      <p className="mb-10">{item.phone}</p>
                      <p className="mb-10">{item.email}</p>
                      <p className="mb-25">{item.office}</p>
                      <Button btncontact primary>
                        Get Directions
                      </Button>
                    </div>
                  </Col>
                );
              })}
            </CarouselCustom>
          </Row>
        </Container>
      </div>
      <div className="contact-form-wrapper pb-130">
        <Container>
          <div className="inner-wrapper bg-light-theme space px-100">
            <Row className="row text-center justify-content-center">
              <Col className="col-lg-10 col-xl-8">
                <div className="section-title">
                  <h2 className="sec-title-style1">
                    Get Catch{" "}
                    <span className="sec-subtitle-style1">
                      US <br /> Here
                    </span>
                  </h2>
                  <p className="sec-text-style1">
                    Access to our fitness centre and pool is free to all our
                    hotel guests. For non-guests membership packages are
                    available.
                  </p>
                </div>
              </Col>
            </Row>
            <FormContact />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Contact;
