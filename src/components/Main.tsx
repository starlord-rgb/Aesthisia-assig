
import { Frame5 } from "./Frame5";
import { SectionHeader } from "./SectionHeader";

export const Main = (): JSX.Element => {
  return (
    <div className="flex flex-col w-[1275px] h-[68px] items-center gap-8 pt-[15px] pb-12 px-0 absolute top-0 left-[82px] bg-[#0c1015] border-l [border-left-style:solid] border-[#bbbbbb1f] ">
      <SectionHeader />
      <Frame5 />
    </div>
  );
};