export const SectionComponentNode = (): JSX.Element => {
  return (
    <div className="relative self-stretch w-full h-[137px]">
      <div className="absolute w-40 h-6 -top-px left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-[#c4c4c4a8] text-sm tracking-[0] leading-6 whitespace-nowrap">
        Environment Variables
      </div>
      <div className="absolute w-[809px] h-[110px] top-[27px] left-0 bg-[#0d0f13] rounded-md overflow-hidden border border-solid border-[#bbbbbb1f]">
        <input
          type="text"
          placeholder="ENV_NAME=ENV_VALUE"
          className="relative w-[785px] h-[18px] top-4 left-3 bg-transparent text-white text-sm [font-family:'Geist-Regular',Helvetica] border-none focus:outline-none"
        />
      </div>
    </div>
  );
};
