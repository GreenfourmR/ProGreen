export const Icon = ({ text, iconComponent }) => {
  return (
    <div className="flex-col justify-center items-center w-[88px] h-[100px]">
      <div className="flex items-center justify-center">{iconComponent}</div>
      <p className=" flex justify-center items-center text-[18px] text-[#4B5563]">
        {text}
      </p>
    </div>
  );
};
