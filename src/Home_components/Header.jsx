import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();


  return (
    <header
      className={`w-[1271px] flex flex-row items-end justify-between gap-[20px] max-w-full text-left text-[27.8px] text-[#ff5c00] font-[Quicksand] mq825:flex-wrap `}
    >
      <div className="flex flex-row items-start justify-start relative">
      <div className="absolute top-0 right-[-50px] sm:right-[-100px] md:right-[-150px] lg:right-[-200px] tracking-[0.01em] leading-[22.3px] capitalize font-semibold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]">
    FutureResume
  </div>
        <img
          className="h-[73px] w-[102.3px] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/resume-logoremovebgpreview-2@2x.png"
        />
      </div>
      <div className="w-[308.1px] flex flex-col items-start justify-end pt-[0px] px-[0px] pb-[10.4px] box-border">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
          <button onClick={() => navigate('/signup')} className="cursor-pointer border-[#ff5c00] border-[0.9px] border-solid py-[10px] pl-[35px] pr-[34px] bg-[transparent] rounded-[22.3px] flex flex-row items-start justify-start hover:bg-[rgba(230,66,0,0.09)] hover:border-[#e64200] hover:border-[0.9px] hover:border-solid hover:box-border" >
            <b className="relative text-[14.8px] tracking-[0.01em] leading-[22.3px] font-[Quicksand] text-color-2 text-left whitespace-nowrap">
              Sign up
            </b>
          </button>
          <button onClick={() => navigate('/login')} className="cursor-pointer [border:none] pt-[11.2px] px-[38px] pb-[11.1px] bg-[#ff5c00] rounded-[22.3px] flex flex-row items-start justify-start whitespace-nowrap hover:bg-[#e64200] " >
            <b className="relative text-[14.8px] tracking-[0.01em] leading-[22.3px] font-[Quicksand] text-color-5 text-left" >
              Sign in
              
            </b>
            
          </button >
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
