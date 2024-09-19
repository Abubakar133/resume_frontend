import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent1 = ({
  className = "",
  propAlignSelf,
  propFlex,
  propHeight,
  propWidth,
  propWidth1,
  propFlex1,
  eDUCATION,
  propFontSize,
  propColor,
  propFontWeight,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      height: propHeight,
      width: propWidth,
    };
  }, [propAlignSelf, propFlex, propHeight, propWidth]);

  const groupDiv1Style = useMemo(() => {
    return {
      width: propWidth1,
      flex: propFlex1,
    };
  }, [propWidth1, propFlex1]);

  const eDUCATIONStyle = useMemo(() => {
    return {
      fontSize: propFontSize,
      color: propColor,
      fontWeight: propFontWeight,
    };
  }, [propFontSize, propColor, propFontWeight]);

  return (
    <div
      className={`self-stretch flex-1 flex flex-row items-start justify-start pt-[0px] px-[0px] pb-[0px] text-left text-[11.8px] text-color-5 font-[Poppins] ${className}`}
      style={groupDivStyle}
    >
      <div
        className="self-stretch w-[67px] flex flex-row items-start justify-start"
        style={groupDiv1Style}
      >
        <a
          className="[text-decoration:none] self-stretch flex-1 relative tracking-[0.01em] text-[inherit]"
          style={eDUCATIONStyle}
        >
          {eDUCATION}
        </a>
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
  eDUCATION: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propFlex1: PropTypes.any,
  propFontSize: PropTypes.any,
  propColor: PropTypes.any,
  propFontWeight: PropTypes.any,
};

export default GroupComponent1;
