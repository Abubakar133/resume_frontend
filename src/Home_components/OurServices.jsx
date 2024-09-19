const OurServices = () => {
  return (
    <div
      className="relative flex flex-col md:flex-row lg:top-[10px] lg:left-[122px] w-full max-w-[1196px] items-start justify-between pt-[47px] px-[27px] pb-[10px] box-border gap-[55.9px] text-left text-[46.9px] text-[#1d1d1d] font-[Quicksand]"
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[55.9px]">
        <div className="w-full flex flex-col items-start justify-start gap-[17.8px]">
          <div className="self-stretch flex flex-row items-start justify-start">
            <b className="text-[28px] leading-[37px] md:text-[38px] md:leading-[49px]">
              <p className="m-0">You can always pick</p>
              <p className="m-0">any template you like</p>
            </b>
          </div>
          <div className="w-full max-w-[172.3px] flex flex-row items-start justify-start py-0 px-[9px] text-[23.5px] text-[#ff5c00]">
            <div className="font-semibold text-[19px] leading-[15px]">
              Our Services
            </div>
          </div>
        </div>

        <div className="flex flex-row items-start justify-between text-[16.7px] text-color-2">
          <div className="flex-1 relative text-[16.7px]">
            Choose from one of our expertly prepared resume types below, by using
            pre-established parts that have been endorsed by recruiters
            internationally. You can begin creating your resume in under 5
            seconds and edit to fit your preferences and personality before
            clicking "Download". Even if you have never created a resume before,
            it is that SIMPLE to use!
          </div>
        </div>
      </div>
      <img
        src="cv1.png" // Replace with your image path
        alt="Additional"
        className="hidden md:block h-[236.6px] w-[236.6px] ml-4"
      />
    </div>
  );
};

export default OurServices;
