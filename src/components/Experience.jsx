import { Row, Row1, Row2 } from "./Icon/container/row";
import { Row3 } from "./Icon/container/row3";
import { Rowane } from "./Icon/Rowone";
import { Skill } from "./Icon/Skill";

export const Expereince = () => {
  return (
    <div className="lg:container flex justify-center items-center w-full h-auto gap-12 bg-[#F9FAFB] ">
      <div className="flex justify-center items-center w-full h-auto py-16 px-4 lg:px-[40px] lg:py-[96px] ">
        <div className="flex-col justify-center items-center w-full h-auto ">
          <div className="flex flex-col justify-center items-center w-full h-auto gap-[16px]">
            <Rowane text={"Expereince"} />
            <Skill
              text={"Here is a quick summary of my most recent experiences:"}
            />
          </div>
          <div className="flex flex-col justify-center items-center w-full h-auto gap-12">
            <Row1 text={"Sr. Frontend Developer"} />
            <Row2 text={"Team Lead"} />
            <Row3 text={"Full Stack Developer"} />
          </div>
        </div>
      </div>
    </div>
  );
};
