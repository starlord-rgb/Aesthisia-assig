
import { SidebarNavigation } from "./SidebarNavigation";

export const SidebarNavigationWrapper = (): JSX.Element => {
  return (
    <SidebarNavigation
      breakpoint="desktop"
      className="!fixed !left-0 !top-0"
      footerClassName="!bg-transparent"
      headerClassName="!bg-transparent"
      logomarkClassName="bg-[url(/logomark.png)]"
      open={false}
      style="slim"
      theme="default"
    />
  );
};