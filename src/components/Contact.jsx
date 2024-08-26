import { Muur } from "./Icon/Muur";
import { Pigma } from "./Icon/Pigma";
import { Rowane } from "./Icon/Rowone";
import { Shuwu } from "./Icon/Shuwu";
import { Skill } from "./Icon/Skill";
import { Copy } from "./svg/Actions/copy";
import { Utas } from "./svg/Actions/Utas";
import { Zahia } from "./svg/Actions/zahia";
import { Tom1 } from "./svg/Tom1";

export const Contact = () => {
  return (
    <div className="flex flex-col justify-items-center items-center w-full h-auto px-[80px] py-[96px] ">
      <div className="flex justify-center items-center max-w-[1280px] h-auto gap-[48px]">
        <div className="flex w-full flex-col justify-center items-center gap-1">
          <div className="flex h-auto w-full justify-center items-center ">
            <Rowane text={"Get in touch"} />
          </div>
          <div className="flex max-w-[576px] justify-center items-center ">
            <Skill
              text={
                "What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect."
              }
            />
          </div>
          <div className="flex flex-col justify-center items-center h-auto w-full ">
            <div className="flex justify-center items-center h-auto w-full gap-[20px]">
              <div className="flex justify-center items-center">
                <Zahia />
              </div>
              <div className="flex justify-center items-center">
                <Tom1 text={"tom@pinecone.mn"} />
              </div>
              <div className="flex justify-center items-center">
                <Copy />
              </div>
            </div>
            <div className="flex justify-center items-center w-full h-auto">
              <div className="flex justify-center items-center h-auto w-full gap-[20px]">
                <div>
                  <Utas />
                </div>
                <div className="flex justify-center items-center">
                  <Tom1 text={"+97688112233"} />
                </div>
                <div>
                  <Copy />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center  h-auto w-full">
              <div>
                <Skill text={"You may also find me on these platfoms!"} />
              </div>
              <div className="flex">
                <Muur />
                <Shuwu />
                <Pigma />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
