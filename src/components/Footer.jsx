import { Copyright } from "./svg/Actions/Copyright";

export const Footer = () => {
  return (
    <div className="flex justify-center items-center px-[80px] py-[24px]">
      <div className="flex justify-start items-center px-[32px] gap-2">
        <div>
          <Copyright />
        </div>
        <div>2024 | Greetings with ❤️️ from Ulaanbaatar</div>
      </div>
    </div>
  );
};
