
import { ArrowLeft } from "./ArrowLeft";

export const ButtonWrapper = (): JSX.Element => {
  return (
    <div className="inline-flex h-10 items-center gap-2 px-0 py-2.5 absolute -top-4.5 left-[33px] rounded-lg overflow-hidden">
      <ArrowLeft className="!relative !w-5 !h-5" />
      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-sm tracking-[0] leading-5 whitespace-nowrap">
        Back
      </div>
    </div>
  );
};