import { Row } from "react-bootstrap";
import classNames from "classnames/bind";
import style from "./CardServices.scss";
import "./CardServices.scss";
const cx = classNames.bind(style);

function CardServices(borderDot = false, Hover = false, children) {
  const classes = cx({
    borderDot,
    Hover,
  });
  return (
    <div className={classes}>
      <Row className="gutters-10 justify-content-center mb-20 wow fadeInUp animated">
        {children}
      </Row>
    </div>
  );
}

export default CardServices;
