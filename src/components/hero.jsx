import { HI } from "./Icon/Hi";
import { Location } from "./Icon/Name=icon-location, Size=32, Theme Mode=Light";
import { Actions } from "./svg/Actions/Actions";
import { Photo } from "./Icon/Photo";
export const Hero = () => {
  return (
    <div className="flex justify-center items-center w-auto h-auto px-4 py-16 lg:px-[80px] lg:py-[96px] ">
      <div className="flex container w-auto h-full px-8">
        <div className="flex w-full flex-col justify-between items-start ">
          <HI />
          <div className="flex w-auto text-[#4B5563]">
            I specialize in full stack development, particularly with React.js
            and Node.js. My main goal is to create exceptional digital
            experiences that are fast, visually appealing, and accessible to
            everyone. With over 7 years of experience in web development, I
            continue to find joy in crafting innovative solutions and designs.
          </div>
          <div className="flex flex-col justify-start gap-1">
            <div className="flex flex-col justify-start items-start">
              <div className="flex gap-1">
                <Location /> Ulaanbaatar, Mongolia
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-[50%] bg-[#10B981] w-[10px] h-[10px]"></div>
              Available for new projects
            </div>
          </div>
          <div className="flex items-center">
            <Actions />
          </div>
        </div>
      </div>
      <div className="flex justify-end items-end ">
        <Photo />
      </div>
    </div>
  );
};
