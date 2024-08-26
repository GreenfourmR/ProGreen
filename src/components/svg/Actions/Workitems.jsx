export const Workitems = ({ text }) => {
  return (
    <div className="flex w-auto h-auto justify-center items-center">
      <p className="flex px-5 py-1 justify-center items-center bg-[#E5E7EB] rounded-[12px] text-[#4B5563]">
        {text}
      </p>
    </div>
  );
};
