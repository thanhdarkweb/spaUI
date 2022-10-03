import "./Boxpricing.scss";
import ButtonCustom from "../ButtonCustom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function BoxPricing() {
  return (
    <div className="vs-price-box" data-overlay="theme">
      <div className="vs-price-head border-light-theme d-flex justify-content-between align-items-end">
        <div className="vs-price text-theme">
          <sub>$</sub>
          <span>99</span>
          <sub>.00</sub>
        </div>
        <div className="vs-price-package text-right">
          <h3 className="package-name mb-0">Basic Plan</h3>
          <span className="package-time">Per Month</span>
        </div>
      </div>
      <div className="vs-price-body text-center">
        <ul className="vs-price-list">
          <li>Makeup &amp; Massage</li>
          <li>Walkout Body Building</li>
          <li>Preserved Hemilton Massge</li>
          <li>Foot &amp; Nail Care</li>
          <li>Hair Cut &amp; Style</li>
        </ul>
        <ButtonCustom
          primary
          shadow
          changeColor
          rightIcon={
            <FontAwesomeIcon className="icon-btn-right" icon={faArrowRight} />
          }
        >
          {" "}
          Make Appoiment{" "}
        </ButtonCustom>
      </div>
    </div>
  );
}

export default BoxPricing;
