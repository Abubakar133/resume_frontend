import Logo from "./Logo";

function Bottom() {
  return (
    <footer
      className="self-stretch flex flex-col items-end justify-start relative gap-[29px] max-w-full z-[2] text-left text-sm text-text-color font-bold1"
    >
      <div className="self-stretch h-px relative bg-border-color shrink-0" />
      <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[23px] pr-5 box-border max-w-full">
        <div className="w-full lg:flex lg:flex-wrap flex-row items-start justify-between shrink-0 gap-5">
          <div className="flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border max-w-full hidden sm:block">
            <div className="relative">
              Copyright © 2021 CreativeLayers. All Right Reserved.
            </div>
          </div>
         
          <div className="flex flex-col pt-[15px] px-0 pb-0 box-border max-w-full">
            <div className="flex flex-wrap gap-2 text-left sm:text-right">
              <button className="text-sm text-text-color font-bold1 bg-transparent border-none cursor-pointer focus:outline-none w-full sm:w-auto">
                Home
              </button>
              <button className="text-sm text-text-color font-bold1 bg-transparent border-none cursor-pointer focus:outline-none w-full sm:w-auto">
                Site Map
              </button>
              <button className="text-sm text-text-color font-bold1 bg-transparent border-none cursor-pointer focus:outline-none w-full sm:w-auto">
                Privacy Policy
              </button>
              <button className="text-sm text-text-color font-bold1 bg-transparent border-none cursor-pointer focus:outline-none w-full sm:w-auto">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Bottom;
