import { useEffect } from "react";
import Header from "../Home_components/Header";
import FrameComponent1 from "../Home_components/FrameComponent1";
import FrameComponent2 from "../Home_components/FrameComponent2";
import OurServices from "../Home_components/OurServices";
import EditorShowcase from "../Home_components/EditorShowcase";
import FrameComponent3 from "../Home_components/FrameComponent3";
import FrameComponent4 from "../Home_components/FrameComponent4";
import FrameComponent5 from "../Home_components/FrameComponent5";
import Footer from "../Dashboard_components/FOOTER";

const Desktop = () => {
  useEffect(() => {
   
  }, []);

  return (

    <div>   

    
<div className="w-full relative bg-color-5 overflow-hidden flex flex-col items-end justify-start gap-[151px] leading-[normal] tracking-[normal] lg:gap-[75px] mq825:gap-[38px]">
<section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[9px] box-border gap-24 max-w-full lg:gap-12 mq825:gap-6">
  
    <div className="w-[1436px] bg-color-5 overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[4px] px-[70px] pb-[120.9px] box-border gap-[60px] max-w-[104%] mq825:gap-[30px] mq825:pt-[20px] mq825:pb-[79px] mq825:box-border mq1425:pl-[35px] mq1425:pr-[35px] mq1425:box-border">
          <div className="w-[1336.2px] h-[994.7px] relative overflow-hidden shrink-0 hidden max-w-full" />
          <Header />
          <FrameComponent1 />
        </div>
      
      <div className="self-stretch flex flex-row items-start justify-center pt-[0px] pl-[86px] pr-[20px] shrink-0 mq450:pl-[20px] mq450:box-border mq825:pl-[43px] mq825:box-border">
        <b className="relative tracking-[0.01em] leading-[45.3px] shrink-0 text-4xl lg:text-[39px]">
          <span>{`Build your `}</span>
          <span className="text-[#ff5c00]">{`resume `}</span>
          <span>in 3 steps</span>
        </b>
      </div>
      <FrameComponent2 />
      <section className="self-stretch h-[400px] relative shrink-0 max-w-full  mq1425:h-auto mq1425:min-h-[1369]">
        <OurServices />
       
      </section>
      <section className="w-[1404.4px] flex flex-row items-start justify-center pt-[0px] px-[20px] pb-[41.3px] box-border max-w-full shrink-0 text-left text-[47.1px] text-[#1d1d1d] font-[Nunito]">
        <b className="h-[64px] relative inline-block shrink-0 mq450:text-[28px] mq825:text-[38px]">{`About FutureResume `}</b>
      </section>
      <FrameComponent3 />
      <section className="w-full max-w-[1200px] flex flex-col hidden lg:block items-center lg:pl-[250px] justify-center px-4 py-6 box-border text-center text-[24px] md:text-[32px] lg:text-[41px] xl:text-[51px] text-[#1d1d1d] font-[Nunito]">
  <b className="relative inline-block   ">
    Benefits Of Using Our Product
  </b>
</section>


      
      
      <FrameComponent5 />
      <Footer />

      </section>

    </div>
    </div>
  );
};

export default Desktop;
