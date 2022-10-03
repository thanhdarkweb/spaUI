import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Banner from "../components/Layout/DefaultLayout/Banner";
import Product from "../components/Products/Product";

function Shop() {
  return (
    <div className="shop-wrapper">
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
          <li>Shop</li>
        </ul>
      </Banner>
      <div className="product-wrapper">
        <Product />
      </div>
    </div>
  );
}

export default Shop;
