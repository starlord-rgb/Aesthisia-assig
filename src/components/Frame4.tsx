
import { ServiceNew } from "./Container";
import { Frame2 } from "./Frame2";

export const Frame4 = (): JSX.Element => {
  return (
    <div className="flex flex-col w-[872px] items-start gap-[18px] p-8 absolute top-14 left-[437px] bg-[#0c1015] rounded-[9px] border border-solid border-[#bbbbbb26]">
      <Frame2 />
      <ServiceNew />
    </div>
  );
};