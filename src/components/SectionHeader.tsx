import { Button } from "./Button";
import { Dot } from "./Dot";
import { GgInfo } from "./GgInfo";
import { Text } from "./Text";

export const SectionHeader = (): JSX.Element => {
  return (
    <div className="relative flex flex-col items-start justify-center gap-6 pt-0 pb-[13px] px-4 w-full mb-[-30.00px]">
      {/* Main header wrapper */}
      <div className="flex flex-col items-start gap-6 px-8 py-0 w-full">
        <div className="flex items-center gap-4 w-full">
          {/* Welcome text */}
          <div className="flex flex-col items-start gap-1 flex-1">
            <div className="font-Inter font-medium text-white text-[30px] leading-[38px] tracking-normal">
              Welcome, Nikhil
            </div>
          </div>
          {/* Dot, Text, GgInfo */}
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#19fb9b26] rounded-md overflow-hidden shadow-shadow-xs">
  <Dot className="!relative" dotClassName="!bg-[#19fb9b]" size="md" />
  <Text className="!relative !flex-[0_0_auto]" />
  <GgInfo className="!relative !w-3 !h-3" />
</div>

          {/* Button */}
          <div className="inline-flex items-center gap-3">
            <Button
              className="!flex-[0_0_auto]"
              destructive={false}
              hierarchy="tertiary-gray"
              icon="default"
              size="md"
              state="default"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
