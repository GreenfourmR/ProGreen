import { Workitems } from "./Workitems";
import { Worktwophoto } from "./Worktwophoto";

export const Workonephoto = () => {
  return (
    <div className=" h-auto w-full ">
      <div className="grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 h-auto w-full rounded-2xl shadow-md">
        <div className="flex h-auto w-full justify-center items-center bg-[#F9FAFB] px-12 py-12 ">
          <img
            src="./ubcab.png"
            alt=""
            className="w-full h-auto border rounded-2xl"
          />
        </div>
        <div className="flex h-auto w-full px-12 py-12 ">
          <div className="flex flex-col h-auto w-full rounded-xl gap-6">
            <div className="flex h-auto w-auto text-[20px] font-sans text-[#111827] font-semibold">
              UBCab
            </div>
            <div className="flex w-full h-auto text-[16px] text-[#4B5563]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </div>
            <div className="flex flex-wrap w-full h-auto justify-between">
              <Workitems text={"React"} />
              <Workitems text={"Next.js"} />
              <Workitems text={"Typescript"} />
              <Workitems text={"Nest.js"} />
              <Workitems text={"PostgreSQL"} />
              <Workitems text={"Tailwindcss"} />
              <Workitems text={"Figma"} />
              <Workitems text={"Cypress"} />
              <Workitems text={"Storybook"} />
              <Workitems text={"Git"} />
            </div>
            <div>
              <Worktwophoto />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const Workboxtwo = () => {
  return (
    <div className="h-auto w-full ">
      <div className="grid md:grid-cols-2 md:grid-rows-1 grid-rows-2  h-auto w-full rounded-2xl shadow-md">
        <div className="flex h-auto w-full px-12 py-12 ">
          <div className="flex flex-col h-auto w-full rounded-xl gap-6">
            <div className="flex h-auto w-auto text-[20px] font-sans text-[#111827] font-semibold">
              Mentorhub
            </div>
            <div className="flex w-full h-auto text-[16px] text-[#4B5563]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </div>
            <div className="flex flex-wrap w-full h-auto justify-between">
              <Workitems text={"React"} />
              <Workitems text={"Next.js"} />
              <Workitems text={"Typescript"} />
              <Workitems text={"Nest.js"} />
              <Workitems text={"PostgreSQL"} />
              <Workitems text={"Tailwindcss"} />
              <Workitems text={"Figma"} />
              <Workitems text={"Cypress"} />
              <Workitems text={"Storybook"} />
              <Workitems text={"Git"} />
            </div>
            <div>
              <Worktwophoto />
            </div>
          </div>
        </div>
        <div className="flex h-auto w-full justify-center items-center bg-[#F9FAFB] px-12 py-12">
          <img
            src="./mentorhub.png"
            alt=""
            className="w-auto h-auto rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};
export const Workboxthree = () => {
  return (
    <div className="h-auto w-full ">
      <div className="grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 h-auto w-full rounded-2xl shadow-md">
        <div className="flex h-auto w-full justify-center items-center bg-[#F9FAFB] px-12 py-12">
          <div className="image3 w-[480px] h-[384px]"></div>
        </div>
        <div className="flex h-auto w-full px-12 py-12 ">
          <div className="flex flex-col h-auto w-full rounded-xl gap-6">
            <div className="flex h-auto w-auto text-[20px] font-sans text-[#111827] font-semibold">
              Mentorhub
            </div>
            <div className="flex w-full h-auto text-[16px] text-[#4B5563]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </div>
            <div className="flex flex-wrap w-full h-auto justify-between">
              <Workitems text={"React"} />
              <Workitems text={"Next.js"} />
              <Workitems text={"Typescript"} />
              <Workitems text={"Nest.js"} />
              <Workitems text={"PostgreSQL"} />
              <Workitems text={"Tailwindcss"} />
              <Workitems text={"Figma"} />
              <Workitems text={"Cypress"} />
              <Workitems text={"Storybook"} />
              <Workitems text={"Git"} />
            </div>
            <div>
              <Worktwophoto />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
