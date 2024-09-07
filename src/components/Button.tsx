import PropTypes from "prop-types";


interface Props {
  size: "md";
  hierarchy: "primary" | "tertiary-gray" | "secondary-color";
  icon: "default";
  destructive: boolean;
  state: "default";
  className: any;
}

export const Button = ({ size, hierarchy, icon, destructive, state, className }: Props): JSX.Element => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2.5 overflow-hidden rounded-lg justify-center relative ${
        ["primary", "secondary-color"].includes(hierarchy) ? "border border-solid" : ""
      } ${hierarchy === "secondary-color" ? "border-[#eff8ff]" : hierarchy === "primary" ? "border-[#156fee]" : ""} ${
        ["primary", "secondary-color"].includes(hierarchy) ? "opacity-0" : ""
      } ${hierarchy === "primary" ? "shadow-shadow-xs" : ""} ${
        hierarchy === "secondary-color" ? "bg-primary-50" : hierarchy === "primary" ? "bg-[#3c2517]" : ""
      } ${className}`}
    >
      {hierarchy === "primary" && <img className="relative w-5 h-5 mb-[-72.00px] ml-[-1587.00px]" alt="Refresh ccw" />}

      <div
        className={`w-fit mt-[-1.00px] whitespace-nowrap relative ${
          hierarchy === "tertiary-gray" ? "[font-family:'Inter-Medium',Helvetica]" : "font-text-sm-semibold"
        } ${hierarchy === "tertiary-gray" ? "tracking-[0]" : "tracking-[var(--text-sm-semibold-letter-spacing)]"} ${
          hierarchy === "tertiary-gray" ? "text-sm" : "text-[length:var(--text-sm-semibold-font-size)]"
        } ${
          ["primary", "secondary-color"].includes(hierarchy) ? "[font-style:var(--text-sm-semibold-font-style)]" : ""
        } ${["primary", "secondary-color"].includes(hierarchy) ? "mr-[-16.00px]" : ""} ${
          hierarchy === "secondary-color" ? "text-primary-700" : "text-white"
        } ${hierarchy === "tertiary-gray" ? "font-medium" : "font-[number:var(--text-sm-semibold-font-weight)]"} ${
          hierarchy === "tertiary-gray" ? "leading-5" : "leading-[var(--text-sm-semibold-line-height)]"
        }`}
      >
        {["primary", "tertiary-gray"].includes(hierarchy) && <>Docs</>}

        {hierarchy === "secondary-color" && <>Secondary</>}
      </div>
    </div>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(["md"]),
  hierarchy: PropTypes.oneOf(["primary", "tertiary-gray", "secondary-color"]),
  icon: PropTypes.oneOf(["default"]),
  destructive: PropTypes.bool,
  state: PropTypes.oneOf(["default"]),
};