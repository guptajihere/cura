import "./BadgeSizeLgTypePillOutlineIconFalseColorGray.css";
import { ArrowUp } from "../ArrowUp/ArrowUp.jsx";
import { ArrowRight } from "../ArrowRight/ArrowRight.jsx";
import { Au } from "../Au/Au.jsx";

export const BadgeSizeLgTypePillOutlineIconFalseColorGray = ({
  iconLeadingSwap = <ArrowUp className="arrow-up-instance" />,
  iconTrailingSwap = <ArrowRight className="arrow-right-instance" />,
  flagSwap = <Au className="au-instance" />,
  size = "sm",
  type = "pill-color",
  icon = "false",
  color = "brand",
  className,
  ...props
}) => {
  const variantsClassName =
    "size-" + size + " type-" + type + " icon-" + icon + " color-" + color;

  return (
    <div
      className={
        "badge-size-lg-type-pill-outline-icon-false-color-gray " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="text">Label </div>
    </div>
  );
};
