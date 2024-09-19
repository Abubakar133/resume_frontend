import Bottom from "./Bottom";
import PropTypes from "prop-types";
import React, { useState, useRef, useEffect } from "react";

function FOOTER() {



  const [isBottomVisible, setIsBottomVisible] = useState(true);

  // Function to toggle the visibility of the Bottom component
  const toggleVisibility = () => {
    setIsBottomVisible(prevState => !prevState);
  };

  const buttons = ["Chicago", "Los Angeles", "Miami", "New York"];



  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-[100px] lg:px-[85px] px-[50px]  pb-[25.9px] box-border relative gap-[116px] max-w-full text-left text-base text-color-2 font-bold1 lg:gap-[58px] mq825:gap-[29px] mq825:pt-[65px] mq825:pb-5 mq825:box-border`}
    >
      <div className="w-full h-full absolute top-0 right-0 bottom-0 left-0 bg-bg-1" />
      <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[21px] box-border max-w-full">
        <div className="flex flex-row items-start justify-start relative max-w-full">
          <img
            className="h-[520px] w-[432px] absolute bottom-[-178px] left-[-175px] z-[1]"
            alt=""
            src="/vector-7.svg"
          />
          <div className="flex flex-row items-start justify-start gap-[73px] max-w-full z-[2] mq825:gap-9 mq450:gap-[18px] mq1450:flex-wrap">
            <div className="w-[295px] flex flex-col items-start justify-start gap-9 mq450:gap-[18px]">
              <div className="relative font-medium inline-block min-w-[85px]">
                Contact Us
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[21px] text-sm text-text-color">
                
                
              <div className="self-stretch flex flex-col items-start justify-start gap-2">
  <div className="self-stretch flex flex-row items-start justify-start gap-[21px]">
    <div className="flex flex-col items-start justify-start pt-[7px]">
      <img
        className="w-[18px] h-[18px]"
        alt="Location"
        src="/pin.svg"
      />
    </div>
    <a
      href="https://www.google.com/maps/search/?api=1&query=329+Queensberry+Street,+North+Melbourne+VIC+3051,+Australia"
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 leading-[26px] text-gray-600 hover:underline"
    >
      329 Queensberry Street, North Melbourne VIC 3051, Australia.
    </a>
  </div>
  <div className="flex flex-row items-start justify-start gap-5">
    <div className="flex flex-col items-start justify-start pt-[7px]">
      <div className="w-[18px] h-[55px] relative">
        <img
          className="absolute top-[37px] left-0 w-[18px] h-[18px]"
          alt="Email"
          src="/email-1.svg"
        />
        <img
          className="absolute top-0 left-0 w-[18px] h-[18px]"
          alt="Phone"
          src="/phone.svg"
        />
      </div>
    </div>
    <div className="leading-[35px]">
      <a
        href="tel:1234567890"
        className="block m-0 text-gray-600 hover:underline"
      >
        123 456 7890
      </a>
      <a
        href="mailto:support@houzing.com"
        className="block m-0 text-gray-600 hover:none"
      >
        support@houzing.com
      </a>
    </div>
  </div>
</div>




                <div className="w-[161px] flex flex-row items-start justify-start">
                  <div className="flex-1 flex flex-row items-start justify-between pt-[10.7px] pb-[9.7px] gap-5">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <img className="w-5 h-5 cursor-pointer" src="/facebook.svg" alt="Facebook" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <img className="w-5 h-5 cursor-pointer" src="/twitter.svg" alt="Twitter" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <img className="w-5 h-5 cursor-pointer" src="/instagram.svg" alt="Instagram" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <img className="w-5 h-5 cursor-pointer" src="/linkedin.svg" alt="LinkedIn" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Discover Section */}
            <div className="flex flex-col items-start justify-start pr-[19px]">
  <div className="flex flex-col items-start justify-start gap-6 relative">
    <div className="font-medium">Discover</div>
    <div className="relative text-sm leading-[40px] text-black">
      {buttons.map((city) => (
        <button
          key={city}
          className="relative text-left cursor-pointer block w-full bg-transparent py-2 transition-colors duration-200 group"
        >
          {city}
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </button>
      ))}
    </div>
  </div>
</div>

            {/* Lists by Category */}
<div className="flex flex-col items-start justify-start pr-[19px]">
  <div className="flex flex-col items-start justify-start gap-6">
    <div className="font-medium whitespace-nowrap">Lists by Category</div>
    <div className="text-sm leading-[40px] text-text-color">
      {["Apartments", "Condos", "Houses", "Offices", "Retail", "Villas"].map(
        (category) => (
          <button
            key={category}
            className="relative text-left cursor-pointer block w-full bg-transparent py-2 transition-colors duration-200 group"
          >
            {category}
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </button>
        )
      )}
    </div>
  </div>
</div>


            {/* Quick Links */}
            <div className="flex flex-col items-start justify-start pr-[37px]">
              <div className="flex flex-col items-start justify-start gap-6">
                <div className="font-medium">Quick Links</div>
                <div className="text-sm leading-[40px] text-text-color">
                  {["About Us", "Terms & Conditions", "User’s Guide", "Support Center", "Press Info", "Contact Us"].map(
                    (link) => (
                      <button
                      key={link}
                      className="relative text-left cursor-pointer block w-full bg-transparent py-2 transition-colors duration-200 group"
                    >
                      {link}
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                    </button>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Subscribe Section */}
            <div className="w-[469px] flex flex-col items-start justify-start pb-[5px] pr-[5px] box-border gap-[31px]">
  <div className="font-medium">Subscribe</div>
  <div className="text-sm text-text-color">
    We don’t send spam so don’t worry.
  </div>
  <div className="relative flex items-center w-full">
    <input
      className="border-border-color border-[1px] bg-color-5 w-full h-[60px] rounded-10xs box-border p-4 pr-[70px]"  
      type="email"
      placeholder="Enter your email"
    />
    <button className="absolute right-0 h-[60px] w-[60px] rounded-10xs bg-color-2 flex items-center justify-center z-10">
      <img className="w-5 h-5 cursor-pointer" src="/email-2.svg" alt="Submit" />
    </button>
  </div>
</div>


          </div>
        </div>
      </div>
      <div className="flex items-center w-full">
      {/* Responsive hiding logic */}
      <div className={`flex-1 ${isBottomVisible ? 'pr-12' : 'pr-4'} ${isBottomVisible ? 'block' : 'hidden'} sm:block`}>
        {isBottomVisible && <Bottom />}
      </div>
      <div className="w-[35px] h-[35px] flex-shrink-0 relative cursor-pointer" onClick={toggleVisibility}>
  <div className="absolute top-0 left-0 rounded-10xs bg-gray-200 w-full h-full" />
  <img
    className="absolute h-[22.22%] w-[22.22%] top-[40%] right-[37.78%] bottom-[37.78%] left-[40%] max-w-full overflow-hidden max-h-full object-contain"
    alt=""
    src="/downarrow-2@2x.png"
  />
</div>

    </div>


    </section>
  );
}



export default FOOTER;
