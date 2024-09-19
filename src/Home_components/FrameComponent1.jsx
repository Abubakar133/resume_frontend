import { useEffect, useState } from "react";

const FrameComponent1 = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  // Update screen size on window resize
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Log the screen size for debugging
  useEffect(() => {
    console.log(`Screen width: ${screenSize}px`);
  }, [screenSize]);

  return (
         <div className="flex flex-col lg:flex-row items-start justify-start gap-5 lg:gap-8 max-w-full lg:ml-[40px]">
        {/* Left content (Text and Button) */}
        <div className="w-full lg:w-[638.9px] flex flex-col pb-12 lg:pb-16">
          <div className="flex flex-col gap-6 lg:gap-4">
            <div className="flex flex-row items-start justify-start">
              <b className="text-4xl  lg:text-6xl font-bold tracking-wide ">
                <span>{`Create a `}</span>
                <span className="text-[#ff5c00]">resume</span>
                <span>{` that secures your `}</span>
                <span className="text-[#ff5c00]">dream job</span>
              </b>
            </div>
            <div className="text-base sm:text-sm lg:text-lg">
              <p>{`Build a resume that piques the interest of recruiters and `}</p>
              <p>{`gets you hired. It’s fast and easy to use.`}</p>
            </div>
          </div>
          <div className="flex justify-center py-4">
            <button className="cursor-pointer bg-[#ff5c00] w-[200px] sm:w-[250px] lg:w-[313.5px] rounded-full hover:bg-[#e64200]">
              <b className="text-base sm:text-xl lg:text-2xl text-white">Try for free</b>
            </button>
          </div>
        </div>

        {/* Right content (Image) */}
        <div className="w-full lg:w-[472px] shadow-md rounded-lg bg-white/50 flex items-center p-6 lg:p-8">
          <img
            className="w-full h-auto object-cover"
            alt="Premium Icon"
            src="cv2.png" // Replace with your image source
          />
        </div>
      </div>
    
  );
};

export default FrameComponent1;
