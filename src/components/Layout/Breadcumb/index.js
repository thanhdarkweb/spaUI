import { Breadcrumb, Container } from "react-bootstrap";
import "./Breadcumb.scss";
function Breadcumb({ children }) {
  return (
    <div
      className="breadCrumb-wrapper space mx-100"
      data-overlay="black"
      data-opacity="3"
    >
      <Container className="z-index-common py-10">
        <Breadcrumb>{children}</Breadcrumb>
      </Container>
    </div>
  );
}

export default Breadcumb;
