import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section
      className={`w-full max-w-[1394.3px] flex flex-col md:flex-row items-start justify-center pt-0 px-4 md:px-20 pb-[129.7px] md:pb-[84px] box-border text-left text-[17px] text-color-2 font-[Quicksand] ${className}`}
    >
      <div className="w-full max-w-[1008.2px] flex flex-col md:flex-row items-start justify-center gap-[24px] md:gap-[48.6px] box-border">
        <div className="flex-1 flex flex-col items-start justify-start pt-[8.1px] px-0 pb-0 box-border min-w-[320px] max-w-full">
          <img
            className="self-stretch h-[350.4px] rounded-[20.9px] max-w-full overflow-hidden object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-832@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[16px] md:gap-[32.5px] min-w-[320px] max-w-full">
          <div className="self-stretch text-[16px] md:text-[17px] leading-[24px] md:leading-[26.4px]">
            {`Future Resume is a product of FutureLabs — a global innovation & digital skill learning center. Future Resume was born of the need to create a new way for job-seekers to connect with recruiters. Hence, our best hands got to work with one thing in mind: to help you find a great job faster. We went even further to ensure that our Template designs meet Industry Standards and accepted by leading HR departments. With us, you can spin out an impressive resume that makes a memorable first impression!`}
          </div>
          <div className="flex justify-center py-4">
            <button className="cursor-pointer bg-[#ff5c00] w-[200px] sm:w-[250px] lg:w-[313.5px] rounded-full hover:bg-[#e64200]">
              <b className="text-base sm:text-xl lg:text-2xl text-white"></b>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
