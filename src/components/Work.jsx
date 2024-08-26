import { Rowone } from "./Icon/Rowone";
import { Skill } from "./Icon/Skill";
import {
  Workboxthree,
  Workboxtwo,
  Workonephoto,
} from "./svg/Actions/Workonephoto";

export const Work = () => {
  return (
    <div className="flex justify-center items-center w-full h-auto lg:py-24 lg:px-20   px-4 py-16">
      <div className="flex flex-col container m-auto h-auto w-full border">
        <Rowone text={"Work"} />
        <Skill text={"Some of the noteworthy projects I have built:"} />
        <div className="flex flex-col h-auto w-full gap-12">
          <Workonephoto />
          <Workboxtwo />
          <Workboxthree />
        </div>
      </div>
    </div>
  );
};
