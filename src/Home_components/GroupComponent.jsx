import PropTypes from "prop-types";

const GroupComponent = ({ className = "", aSINBUSINESSMANAGEMENT }) => {
  return (
    <div
      className={`self-stretch h-[59.3px] flex flex-col items-start justify-start pt-[36.2px] px-[0px] pb-[0.1px] box-border gap-[14.7px] text-left text-[7.5px] text-color-5 font-[Poppins] ${className}`}
    >
      <div className="mt-[-39px] w-[146.3px] flex flex-col items-start justify-start gap-[6.5px] shrink-0">
        <div className="w-[58.3px] h-[11px] relative">
          <div className="absolute top-[0px] left-[19.3px] w-[39px] h-[11px] flex flex-row items-start justify-start">
            <a className="[text-decoration:none] self-stretch flex-1 relative tracking-[0.03em] font-semibold text-[inherit] flex items-center">
              From - To
            </a>
          </div>
          <div className="absolute top-[6.8px] left-[0px] bg-[#c4c4c4] w-[14.8px] h-[1.5px]" />
        </div>
        <a className="[text-decoration:none] self-stretch h-[6.8px] relative text-[33px] tracking-[0.03em] font-bold text-[inherit] flex items-center shrink-0 mq450:text-xl mq825:text-[26px]">
          {aSINBUSINESSMANAGEMENT}
        </a>
      </div>
      <div className="self-stretch h-[23px] relative text-[8.3px] tracking-[0.03em] font-[Roboto] flex items-center shrink-0">
        <span>
          <p className="[margin-block-start:0] [margin-block-end:2.75px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </span>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  aSINBUSINESSMANAGEMENT: PropTypes.string,
};

export default GroupComponent;
