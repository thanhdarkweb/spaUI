function Logo({ classname }) {
  return (
    <img
      className={classname}
      src={require("../../assets/img/logo.png")}
      alt="LOGO"
    />
  );
}

export default Logo;
