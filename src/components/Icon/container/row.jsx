import { Clip } from "./Clip path group";
import { Nowsh } from "./nowsh";

export const Row1 = ({ text }) => {
  return (
    <div className="flex justify-center items-center w-auto h-auto px-[32px] py-[32px] gap-[48px] rounded-xl bg-[#FFF] shadow-md">
      <div className="flex justify-start items-start h-full w-auto">
        <div className="w-full">
          <Clip />
        </div>
      </div>
      <div className="flex flex-col justify-start items-start h-full w-auto text-[#4B5563] gap-4">
        <div className="w-full h-auto">
          <p className="text-[20px] font-sans text-[#111827] font-semibold ">
            {text}
          </p>
        </div>
        <div className="flex flex-col items-start w-full h-auto text-[14px]">
          <Nowsh
            one={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          />
          <Nowsh
            one={"Ut pretium arcu et massa semper, id fringilla leo semper."}
          />
          <Nowsh one={"Sed quis justo ac magna."} />
          <Nowsh
            one={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          />
        </div>
      </div>
      <div className="flex justify-start items-start h-full w-auto">
        <div className="flex w-auto text-[16px]">Nov 2021 - Present</div>
      </div>
    </div>
  );
};
export const Row2 = ({ text }) => {
  return (
    <div className="flex justify-center items-center w-auto h-auto px-[32px] py-[32px] gap-[48px] rounded-xl bg-[#FFF] shadow-md">
      <div className="flex justify-start items-start h-full w-auto">
        <div className="w-full h-full">
          <Clip />
        </div>
      </div>
      <div className="flex flex-col justify-start items-start h-full w-auto text-[#4B5563] gap-4">
        <div className="w-full h-auto">
          <p className="text-[20px] font-sans text-[#111827] font-semibold ">
            {text}
          </p>
        </div>
        <div className="flex flex-col items-start w-full h-auto text-[14px]">
          <Nowsh one={"Sed quis justo ac magna."} />
          <Nowsh
            one={"Ut pretium arcu et massa semper, id fringilla leo semper."}
          />
          <Nowsh one={"Sed quis justo ac magna."} />
          <Nowsh
            one={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          />
        </div>
      </div>
      <div className="flex justify-start items-start h-full w-auto">
        <div className="w-full">Jul 2017 - Oct 2021</div>
      </div>
    </div>
  );
};
