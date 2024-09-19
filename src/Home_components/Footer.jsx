import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <footer
      className={`ml-[-5px] self-stretch bg-[#1d1d1d] flex flex-col items-start justify-start pt-[89px] px-[135px] pb-[87px] box-border gap-[62px] shrink-0 max-w-full text-left text-5xl text-[#ff5c00] font-[Quicksand] mq450:gap-[15px] mq450:pl-[20px] mq450:pr-[20px] mq450:box-border mq825:gap-[31px] mq825:pt-[58px] mq825:px-[67px] mq825:pb-[57px] mq825:box-border ${className}`}
    >
      <div className="w-[1440px] h-[471px] relative bg-[#1d1d1d] hidden max-w-full" />
      <div className="w-[1151px] flex flex-row items-start justify-between max-w-full gap-[20px] mq1425:flex-wrap">
        <div className="flex flex-col items-start justify-start gap-[20px] min-w-[309px] mq1425:flex-1">
          <div className="flex flex-col items-start justify-start gap-[24px] z-[1]">
            <div className="flex flex-row items-start justify-start">
              <b className="relative tracking-[0.01em] leading-[24px] mq450:text-[19px] mq450:leading-[19px]">
                Future Resume
              </b>
            </div>
            <div className="h-[64px] relative text-base leading-[32px] font-medium text-color-5 inline-block">
              <p className="m-[0px]">
                Create your resume in a minute, get your
              </p>
              <p className="m-[0px]">dream job in a blink.</p>
            </div>
          </div>
          <div className="w-[229px] flex flex-row items-start justify-between opacity-[0.6] gap-[20px] z-[1]">
            <img
              className="h-[31px] w-[30.1px] relative overflow-hidden shrink-0 min-h-[31px]"
              loading="lazy"
              alt=""
              src="/facebook.svg"
            />
            <img
              className="h-[31px] w-[30.1px] relative overflow-hidden shrink-0 min-h-[31px]"
              loading="lazy"
              alt=""
              src="/twitter.svg"
            />
            <img
              className="h-[31px] w-[30.1px] relative overflow-hidden shrink-0 min-h-[31px]"
              loading="lazy"
              alt=""
              src="/instagram.svg"
            />
            <img
              className="h-[31px] w-[30.1px] relative overflow-hidden shrink-0 min-h-[31px]"
              loading="lazy"
              alt=""
              src="/linkedin.svg"
            />
          </div>
        </div>
        <div className="w-[737px] flex flex-row items-start justify-start min-w-[737px] max-w-full z-[1] text-lg text-color-5 lg:min-w-full mq1425:flex-1">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq825:flex-wrap">
            <div className="flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[6px] text-[21px]">
              <div className="flex flex-col items-start justify-start gap-[32px]">
                <div className="relative leading-[124.5%] font-semibold mq450:text-[17px] mq450:leading-[21px]">{`Terms & Policies`}</div>
                <div className="flex flex-col items-start justify-start gap-[16px] text-lg">
                  <div className="relative leading-[26px]">
                    Terms of Service
                  </div>
                  <a className="[text-decoration:none] relative leading-[26px] text-[inherit]">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[32px]">
              <div className="relative leading-[26px] font-semibold">
                Company
              </div>
              <div className="flex flex-col items-start justify-start gap-[16px]">
                <div className="relative leading-[26px]">Home</div>
                <div className="relative leading-[26px]">About Us</div>
                <div className="relative leading-[26px]">Contact Us</div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[32px]">
              <div className="relative leading-[26px] font-semibold">
                Contact
              </div>
              <div className="flex flex-col items-start justify-start gap-[16px]">
                <div className="relative leading-[26px]">(+234) 8089466435</div>
                <div className="relative leading-[26px] whitespace-nowrap">
                  agencycr@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-end justify-start gap-[40px] max-w-full text-base text-[rgba(255,255,255,0.8)] font-[Poppins] mq825:gap-[20px]">
        <div className="self-stretch h-[1px] relative border-[rgba(255,255,255,0.56)] border-t-[1px] border-solid box-border z-[1]" />
        <div className="self-stretch flex flex-row items-start justify-center py-[0px] pl-[21px] pr-[20px] box-border max-w-full">
          <div className="flex flex-row items-start justify-start max-w-full z-[1]">
            <div className="relative">
              Copyright, FutureResume 2022. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
