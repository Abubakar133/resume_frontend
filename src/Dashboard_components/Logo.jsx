import { useMemo } from "react";
import PropTypes from "prop-types";

function Logo({
   vector, propMargin, propColor, propTextDecoration,
}) {
  const houzingStyle = useMemo(() => {
    return {
      margin: propMargin,
      color: propColor,
      textDecoration: propTextDecoration,
    };
  }, [propMargin, propColor, propTextDecoration]);

  return (
    <div
      className={`flex flex-row items-start justify-start py-0 pl-0 pr-[3px] gap-[13px] text-left text-6xl text-color-2 font-bold1 `}
    >
      <img
        className="h-[48.1px] w-10 relative"
        loading="lazy"
        alt=""
        src={vector} />
      <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
        <h2
          className="m-0 relative text-inherit font-bold font-[inherit] inline-block min-w-[98px] mq450:text-xl"
          style={houzingStyle}
        >
          Houzing
        </h2>
      </div>
    </div>
  );
}

Logo.propTypes = {
  className: PropTypes.string,
  vector: PropTypes.string,

  /** Style props */
  propMargin: PropTypes.any,
  propColor: PropTypes.any,
  propTextDecoration: PropTypes.any,
};

export default Logo;
