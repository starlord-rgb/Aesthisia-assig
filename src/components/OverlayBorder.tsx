
import { Frame } from "./Frame";
import { MdiGithub } from "./MdiGithub";

export const OverlayBorder = (): JSX.Element => {
  return (
    <div className="flex w-[353px] items-center gap-3.5 px-[19px] py-3 absolute top-[58px] left-[33px] bg-[#853bce1a] rounded-lg border border-solid border-[#853bce]">
      <div className="flex w-[58px] h-[58px] items-center justify-center gap-[9px] px-3 py-2.5 relative bg-[#63487d38] rounded-full border border-solid border-[#853bce]">
        <MdiGithub className="!relative !flex-[0_0_auto] !ml-[-2.00px] !mr-[-2.00px]" />
      </div>
      <div className="inline-flex items-center gap-9 relative flex-[0_0_auto] mr-[-36.00px]">
        <div className="flex flex-col w-[140px] items-start justify-center gap-1 relative">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#c4c4c4a8] text-xs tracking-[0] leading-[normal]">
            Git repository
          </div>
          <div className="relative w-[116px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
            expressjs-cn8x
          </div>
        </div>
        <div className="flex flex-col w-[103px] items-start justify-center gap-1 relative">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#c4c4c4a8] text-xs tracking-[0] leading-[normal]">
            Deploying
          </div>
          <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
            <Frame className="!relative !w-[13px] !h-[13px]" />
            <div className="relative w-[55px] mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
              Other
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};