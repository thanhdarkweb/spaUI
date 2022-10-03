import { faInstitution, faMagic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../ButtonCustom";
import Carousel from "../Carousel/Carousel";
import "./gallery.scss";
function Gallery() {
  const imgGallery = [
    {
      img: require("../../assets/img/gallery/gallery-2-1.jpg"),
      icon: (
        <FontAwesomeIcon
          icon={faMagic}
          className=" instagram-btn icon-btn popup-image"
        />
      ),
    },
    {
      img: require("../../assets/img/gallery/gallery-2-2.jpg"),
      icon: (
        <FontAwesomeIcon
          icon={faMagic}
          className=" instagram-btn icon-btn popup-image"
        />
      ),
    },
    {
      img: require("../../assets/img/gallery/gallery-2-3.jpg"),
      icon: (
        <FontAwesomeIcon
          className=" instagram-btn icon-btn popup-image"
          icon={faMagic}
        />
      ),
    },
    {
      img: require("../../assets/img/gallery/gallery-2-4.jpg"),
      icon: (
        <FontAwesomeIcon
          icon={faMagic}
          className=" instagram-btn icon-btn popup-image"
        />
      ),
    },
    {
      img: require("../../assets/img/gallery/gallery-2-5.jpg"),
      icon: (
        <FontAwesomeIcon
          icon={faMagic}
          className=" instagram-btn icon-btn popup-image"
        />
      ),
    },
  ];

  return (
    <div className="gallery-wrapper  space pl-150 pr-150">
      <Container fluid={true}>
        <Row></Row>
      </Container>
    </div>
  );
}

export default Gallery;
