import Component10Variant from "./Component10Variant";
import PropTypes from "prop-types";

const EditorShowcase = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start z-[2] text-left text-[34px] text-color-2 font-[Quicksand] ${className}`}
    >
      <Component10Variant />
    </div>
  );
};

EditorShowcase.propTypes = {
  className: PropTypes.string,
};

export default EditorShowcase;
