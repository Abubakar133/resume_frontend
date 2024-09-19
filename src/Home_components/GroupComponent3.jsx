import PropTypes from "prop-types";

const GroupComponent3 = ({ className = "", workDescription }) => {
  return (
    <div
      className={`self-stretch h-[87.3px] flex flex-col items-start justify-start pt-[62.5px] px-[0px] pb-[12.5px] box-border gap-[26px] text-left text-[7.5px] text-[#999] font-[Poppins] ${className}`}
    >
      <div className="mt-[-63.3px] w-[116.3px] h-[37.3px] flex flex-col items-start justify-start gap-[7.3px] shrink-0">
        <div className="flex-1 flex flex-row items-end justify-start gap-[3.7px]">
          <div className="flex flex-col items-start justify-end pt-[0px] px-[0px] pb-[2.7px]">
            <div className="w-[12.3px] h-[1.5px] relative bg-[#999]" />
          </div>
          <a className="[text-decoration:none] self-stretch w-[39px] relative tracking-[0.03em] font-semibold text-[inherit] flex items-center">
            From - To
          </a>
        </div>
        <a className="[text-decoration:none] w-[98.5px] h-[6.8px] relative text-[33px] tracking-[0.03em] font-bold text-color-2 flex items-center shrink-0 mq450:text-xl mq825:text-[26px]">
          Title/Position
        </a>
        <h3 className="m-[0px] self-stretch h-[5px] relative text-[28px] tracking-[0.03em] leading-[4.5%] font-normal font-[Roboto] text-[#9b9b9b] flex items-center shrink-0 mq450:text-[22px] mq450:leading-[1px]">
          Workplace/Company
        </h3>
      </div>
      <h2 className="m-[0px] self-stretch h-[12.3px] relative text-[33px] tracking-[0.03em] leading-[170%] font-normal font-[Roboto] text-[#666] flex items-center shrink-0 mq450:text-xl mq450:leading-[34px] mq825:text-[26px] mq825:leading-[45px]">
        <span>
          <p className="m-[0px]">Add</p>
          <p className="m-[0px]">{workDescription}</p>
        </span>
      </h2>
    </div>
  );
};

GroupComponent3.propTypes = {
  className: PropTypes.string,
  workDescription: PropTypes.string,
};

export default GroupComponent3;
