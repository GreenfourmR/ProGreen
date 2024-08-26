import { Clip } from "./Clip path group";
import { Nowsh } from "./nowsh";

export const Row3 = ({ text }) => {
  return (
    <div className="flex justify-center items-center w-auto h-auto px-[32px] py-[32px] gap-[48px] rounded-xl bg-[#FFF] shadow-md">
      <div className="flex justify-center items-center h-auto w-auto">
        <div className="w-auto h-auto">
          <Clip />
        </div>
      </div>
      <div className="flex flex-col justify-start items-start h-auto w-auto text-[#4B5563] gap-4">
        <p className="flex h-auto w-auto text-[20px] font-sans text-[#111827] font-semibold gap-4">
          {text}
        </p>
        <div className="flex justify-center items-center h-auto w-auto text-[14px] leading-6 font-normal">
          <Nowsh
            one={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
          />
        </div>
      </div>
      <div className="flex justify-center items-center h-auto w-auto">
        Dec 2015 - May 2017
      </div>
    </div>
  );
};
