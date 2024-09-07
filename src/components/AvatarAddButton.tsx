import PropTypes from "prop-types";


interface Props {
  size: "md";
  state: "default";
  className: any;
}

export const AvatarAddButton = ({ size, state, className }: Props): JSX.Element => {
  return (
    <div className={`w-[42px] h-[42px] bg-basewhite rounded-[20px] border border-dashed border-[#cfd4dc] ${className}`}>
      <div className="inline-flex items-center justify-center p-1 relative top-1.5 left-1.5 rounded-xl overflow-hidden">
        <img className="relative w-5 h-5 mt-[-143.00px] ml-[-1524.00px]" alt="Plus" />
      </div>
    </div>
  );
};

AvatarAddButton.propTypes = {
  size: PropTypes.oneOf(["md"]),
  state: PropTypes.oneOf(["default"]),
};