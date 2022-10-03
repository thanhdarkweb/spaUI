import "./PriceList.scss";

function PriceList() {
  const pricelist = [
    {
      img: require("../../assets/img/price/price-img-1-1.png"),
      title: "Personalized Massage",
    },
    {
      img: require("../../assets/img/price/price-img-1-2.png"),
      title: "Personalized Massage",
    },
    {
      img: require("../../assets/img/price/price-img-1-3.png"),
      title: "Personalized Massage",
    },
    {
      img: require("../../assets/img/price/price-img-1-4.png"),
      title: "Personalized Massage",
    },
  ];
  return (
    <div className="price-list-style1 bg-white py-60 px-60 rounded-0">
      {pricelist.map((item, index) => {
        return (
          <div className="vs-price-list media" key={index}>
            <div className="media-img mr-30">
              <a href="price.html">
                <img src={item.img} alt="PriceImg" />
              </a>
            </div>
            <div className="media-body align-self-center">
              <h3 className="price-title h4 mb-10">
                <a href="price.html">{item.title}</a>
              </h3>
              <p className="mb-0">
                60 min <span className="inner-label">$100</span> / 90 min
                <span className="inner-label">$145</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PriceList;
