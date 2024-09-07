
import { AvatarAddButton } from "./AvatarAddButton";
import { ButtonWrapper } from "./ButtonWrapper";
import { Frame3 } from "./Frame3";
import { Frame4 } from "./Frame4";
import { OverlayBorder } from "./OverlayBorder";

export const Frame5 = (): JSX.Element => {
  return (
    <div className="relative w-[1356px] h-[980px] mb-[-1060.00px] bg-[#0c1015] overflow-hidden">
      <AvatarAddButton className="!absolute !left-[1442px] !top-[129px]" size="md" state="default" />
      <ButtonWrapper />
      <OverlayBorder />
      <Frame3 />
      <Frame4 />
    </div>
  );
};