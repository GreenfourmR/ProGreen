import { Rowone } from "./Icon/Rowone";
import { Rowtwo } from "./Icon/Rowtwo";

export const About = () => {
  return (
    <div className="flex flex-col items-center lg:px-20 lg:py-24 px-4 py-[64px] w-full h-auto  bg-[#F9FAFB]">
      <div className="lg:container flex flex-col items-center w-full h-auto gl:px-8 px-0">
        <Rowone text={"About me"} />
        <Rowtwo />
      </div>
    </div>
  );
};
