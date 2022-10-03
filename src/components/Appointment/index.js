import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import FormAppoiment from "../Form/FormAppoiment";
import "./Appointment.scss";
function Appointment() {
  return (
    <div
      className="appointment-wrapper space "
      data-overlay="black"
      data-opacity="6"
    >
      <Container className="z-index-common">
        <div
          className="form-title media pb-4 pb-lg-5 wow fadeInUp animated"
          data-wow-delay="0.3s"
        >
          <div className="media-icon pr-3 align-self-center d-none d-sm-inline-block">
            <span className="icon-btn bg-theme">
              <FontAwesomeIcon icon={faCalendar} className="icon-calendar" />
            </span>
          </div>
          <div className="media-body">
            <p className="mb-0 text-white">Get relax any day &amp; any Time</p>
            <h2 className="mb-0 text-white">Make Appointment</h2>
          </div>
        </div>
        <FormAppoiment />
      </Container>
    </div>
  );
}

export default Appointment;
