import { faArrowRight, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Button from "../ButtonCustom";
import InputCustom from "../InputCustom/Input";
import "./Form.scss";
function FormContact() {
  const [isActive, setActive] = useState(false);
  const tonggleClass = () => {
    setActive(!isActive);
  };
  return (
    <Form className="appointment-form-style1 input-white">
      <Row className="gutters-20 pt-20">
        <Col className="col-md-6     form-group">
          <InputCustom type={"text"} placeholder={"Firts  Name"}>
            <FontAwesomeIcon className="icon-form" icon={faUser} />
          </InputCustom>
        </Col>
        <Col className="col-md-6     form-group">
          <InputCustom type={"text"} placeholder={"Lats  Name"}>
            <FontAwesomeIcon className="icon-form" icon={faUser} />
          </InputCustom>
        </Col>
        <Col className="col-md-6     form-group">
          <InputCustom type={"text"} placeholder={"Email"}>
            <FontAwesomeIcon className="icon-form" icon={faUser} />
          </InputCustom>
        </Col>
        <Col className="col-md-6     form-group">
          <InputCustom type={"text"} placeholder={"Phone"}>
            <FontAwesomeIcon className="icon-form" icon={faUser} />
          </InputCustom>
        </Col>
        <div className="col-md-12     form-group select-box-area">
          <select className="d-none">
            <option>Select Subject</option>
            <option>Sports Massage</option>
            <option>Stone Massage</option>
            <option>Facial &amp; Massage</option>
            <option>Body Massage</option>
            <option>Spa &amp; Massage</option>
          </select>
          <div
            className={isActive ? " nice-select open" : "nice-select"}
            tabindex="0"
            onClick={tonggleClass}
          >
            <span className="current">Select Subject</span>
            <ul className="list">
              <li data-value="Select Subject" className="option selected">
                Select Subject
              </li>
              <li data-value="Sports Massage" className="option">
                Sports Massage
              </li>
              <li data-value="Stone Massage" className="option">
                Stone Massage
              </li>
              <li data-value="Facial &amp; Massage" className="option">
                Facial &amp; Massage
              </li>
              <li data-value="Body Massage" className="option">
                Body Massage
              </li>
              <li data-value="Spa &amp; Massage" className="option">
                Spa &amp; Massage
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-12     form-group select-box-area">
          <textarea
            name="message"
            placeholder="Type Message"
            className="form-control"
          ></textarea>
        </div>

        <div className="col-12 text-center form-group">
          <Button
            primary
            shadow
            changeColor
            rightIcon={
              <FontAwesomeIcon className="icon-btn-right" icon={faArrowRight} />
            }
          >
            {" "}
            Make Appoiment{" "}
          </Button>
        </div>
      </Row>
    </Form>
  );
}

export default FormContact;
