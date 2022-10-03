import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./ButtonCustom.scss";

const cx = classNames.bind(styles);

function Button({
  instagramBtn,
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  rounded = false,
  changeColor = false,
  disabled = false,
  small = false,
  large = false,
  btnabout = false,
  shadow = false,
  children,
  className,
  leftIcon,
  rightIcon,
  onClick,
  btncontact,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };

  // Remove event listener when btn is disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx({
    [className]: className,
    primary,
    outline,
    btncontact,
    instagramBtn,
    text,
    btnabout,
    disabled,
    shadow,
    rounded,
    small,
    large,
    changeColor,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className="vs-btn-shape"></span>
      <span className="vs-btn-shape"></span>
      <span className="vs-btn-shape"></span>{" "}
      <span className="vs-btn-shape"></span>
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
