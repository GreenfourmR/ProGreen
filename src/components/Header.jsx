import {
  About,
  Work,
  Testimonials,
  Contact,
  DownloadCV,
} from "./svg/Actions/itembutton";
import { SunIcon } from "./Icon/SunIcon";
import { Tom } from "./Icon/Tom";

export const Header = () => {
  return (
    <div className="flex justify-center items-center w-full px-[16px] py-[16px] lg:px-[80px] lg:py-[16px]">
      <div className="flex container justify-between items-center px-8 w-full h-auto">
        <div className="flex items-center w-full h-auto">
          <Tom />
        </div>
        <div className="flex justify-center items-center h-auto w-full ">
          <div className="flex justify-end border items-center h-auto w-full text-[16px] gap-[16px]">
            <About />
            <Work />
            <Testimonials />
            <Contact />
          </div>
          <div className="flex justify-end items-center h-auto w-full">
            <SunIcon />
            <DownloadCV />
          </div>
        </div>
      </div>
    </div>
  );
};
