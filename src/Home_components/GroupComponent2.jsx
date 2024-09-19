import PropTypes from "prop-types";

const GroupComponent2 = ({
  className = "",
  mSWORD,
  rectangleDiv,
  rectangleDiv1,
  showRectangleDiv,
}) => {
  return (
    <div
      className={`flex-1 flex flex-row items-start justify-start gap-[11.7px] min-w-[90px] text-left text-[7.5px] text-[#333] font-[Poppins] ${className}`}
    >
      <a className="[text-decoration:none] h-[8.8px] w-[50.3px] relative tracking-[0.01em] font-medium text-[inherit] inline-block shrink-0">
        {mSWORD}
      </a>
      <div className="flex-1 flex flex-col items-start justify-start pt-[3.3px] px-[0px] pb-[0px]">
        <div className="self-stretch h-[5px] relative">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-[#c4c4c4]" />
            {!rectangleDiv && (
              <div className="absolute h-full w-[77.18%] top-[0%] right-[22.82%] bottom-[0%] left-[0%] bg-[#42489e] hidden" />
            )}
            {!rectangleDiv1 && (
              <div className="absolute h-full w-[66.62%] top-[0%] right-[33.38%] bottom-[0%] left-[0%] bg-[#42489e] hidden" />
            )}
            {showRectangleDiv && (
              <div className="absolute h-full w-[72.96%] top-[0%] right-[27.04%] bottom-[0%] left-[0%] bg-[#42489e] z-[1]" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent2.propTypes = {
  className: PropTypes.string,
  mSWORD: PropTypes.string,
  rectangleDiv: PropTypes.bool,
  rectangleDiv1: PropTypes.bool,
  showRectangleDiv: PropTypes.bool,
};

export default GroupComponent2;
