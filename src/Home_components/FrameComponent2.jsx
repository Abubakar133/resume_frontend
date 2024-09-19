const FrameComponent2 = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center  justify-center p-6 lg:p-12 max-w-full text-center lg:text-left text-[2rem] lg:text-[3rem] text-[#ff5c00] font-[Quicksand] lg:ml-[240px]">
      <div className="flex flex-col items-center lg:items-start gap-8 lg:gap-20 max-w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 w-full">
          <div className="flex flex-col items-center lg:items-start gap-8 lg:gap-12 w-full lg:w-[638px]">
            <img
              className="w-full max-w-[298px] h-auto object-cover"
              loading="lazy"
              alt=""
              src="/image-7@2x.png"
            />
            <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-6">
              <b className="text-[3rem] lg:text-[4rem] font-bold leading-tight">
                1.
              </b>
              <div className="text-[1rem] lg:text-[1.25rem] leading-relaxed">
                <div>Pick a Template</div>
                <p>Fill in the blanks and see results in real-time.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-8 lg:gap-12 w-full lg:w-[666px]">
            <img
              className="w-full max-w-[241px] h-auto object-cover"
              loading="lazy"
              alt=""
              src="/image-8@2x.png"
            />
            <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-6 w-full">
              <div className="text-[3rem] lg:text-[4rem] font-bold leading-tight">
                2.
              </div>
              <div className="text-[1rem] lg:text-[1.25rem] leading-relaxed">
                <div>Customize Your Layout</div>
                <p>Give your document a professional and elegant look.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 w-full">
          <img
            className="w-full max-w-[250px] h-auto object-cover"
            loading="lazy"
            alt=""
            src="/image-9@2x.png"
          />
          <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-6 w-full">
            <div className="text-[3rem] lg:text-[4rem] font-bold leading-tight">
              3.
            </div>
            <div className="text-[1rem] lg:text-[1.25rem] leading-relaxed">
              <div>Hit 'Download!'</div>
              <p>Download your resume, apply, get more interviews.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
