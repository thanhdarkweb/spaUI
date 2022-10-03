import Breadcumb from "../../Breadcumb";
import "./banner.scss";
function Banner({ children }) {
  return (
    <Breadcumb>
      <div className="breadcumb-content">{children}</div>
    </Breadcumb>
  );
}

export default Banner;
