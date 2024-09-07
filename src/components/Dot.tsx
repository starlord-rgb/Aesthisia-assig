import PropTypes from "prop-types";


interface Props {
  size: "md";
  className: any;
  dotClassName: any;
}

export const Dot = ({ size, className, dotClassName }: Props): JSX.Element => {
  return (
    <div className={`w-2.5 h-2.5 ${className}`}>
      <div className={`relative w-2 h-2 top-px left-px bg-[#f02849] rounded ${dotClassName}`} />
    </div>
  );
};

Dot.propTypes = {
  size: PropTypes.oneOf(["md"]),
};