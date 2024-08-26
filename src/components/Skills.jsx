import { Icon } from "./Icon/Icon";
import { Cypress } from "./Icon/item/Cypress";
import { Express } from "./Icon/item/Express";
import { Git } from "./Icon/item/Git";
import { JavascriptIcon } from "./Icon/item/Js";
import { MongoDB } from "./Icon/item/MongoDB";
import { Nest } from "./Icon/item/Nest";
import { Next } from "./Icon/item/Next";
import { Node } from "./Icon/item/Node";
import { Pigma } from "./Icon/item/Pigma";
import { PostgreSQL } from "./Icon/item/PostgreSQL";
import { React } from "./Icon/item/React";
import { Sass } from "./Icon/item/Sass";
import { Socket } from "./Icon/item/Socket";
import { Storybook } from "./Icon/item/Storybook";
import { Tailwindcss } from "./Icon/item/Tailwindcss";
import { Ts } from "./Icon/item/Ts";
import { Rowne, Rowone } from "./Icon/Rowone";
import { Skill } from "./Icon/Skill";

export const Skills = () => {
  return (
    <div className="lg:container m-auto flex flex-col w-full items-center h-auto lg:px-10 lg:py-24  px-4 py-16">
      <div className=" flex flex-col w-full h-auto lg:px-8">
        <div className="flex flex-col w-auto h-auto gap-4">
          <Rowne text={"Skills"} />
          <Skill
            text={"The skills, tools and technologies I am really good at:"}
          />
        </div>
        <div className="grid md:grid-cols-8 md:grid-rows-2 grid-cols-3 grid-rows-6 md:gap-y-12 justify-items-center w-auto h-auto ">
          <Icon iconComponent={<JavascriptIcon />} text={"Javascript"} />
          <Icon iconComponent={<Ts />} text={"Typescript"} />
          <Icon iconComponent={<React />} text={"React"} />
          <Icon iconComponent={<Next />} text={"Next.Js"} />
          <Icon iconComponent={<Node />} text={"Node.js"} />
          <Icon iconComponent={<Express />} text={"Express.js"} />
          <Icon iconComponent={<Nest />} text={"Nest.js"} />
          <Icon iconComponent={<Socket />} text={"Socket.io"} />
          <Icon iconComponent={<PostgreSQL />} text={"PostgreSQL"} />
          <Icon iconComponent={<MongoDB />} text={"MongoDB"} />
          <Icon iconComponent={<Sass />} text={"Sass/Scss"} />
          <Icon iconComponent={<Tailwindcss />} text={"Tailwindcss"} />
          <Icon iconComponent={<Pigma />} text={"Figma"} />
          <Icon iconComponent={<Cypress />} text={"Cypress"} />
          <Icon iconComponent={<Storybook />} text={"Storybook"} />
          <Icon iconComponent={<Git />} text={"Git"} />
        </div>
      </div>
    </div>
  );
};
