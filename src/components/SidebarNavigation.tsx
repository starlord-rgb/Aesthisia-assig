import logomark from "../assets/logomark.png";
import bar from '../assets/bar-chart-square-02.svg';
import home from '../assets/home-line.svg';
import layer from '../assets/layers-three-01.svg';
import check from '../assets/check-done-01.svg';
import pie from '../assets/pie-chart-03.svg';
import user from '../assets/users-01.svg';
import PropTypes from "prop-types";
interface Props {
  open: boolean;
  style: "slim";
  theme: "default";
  breakpoint: "desktop";
  className: any;
  headerClassName: any;
  logomarkClassName: any;
  footerClassName: any;
}

export const SidebarNavigation = ({
  // open,
  // style,
  // theme,
  // breakpoint,
  className,
  headerClassName,
  logomarkClassName,
  footerClassName,
}: Props): JSX.Element => {
  return (
    <div
      className={`flex w-[82px] h-[1080px] items-start relative bg-[#0c1015] border-r [border-right-style:solid] border-[#bbbbbb26] ${className}`}
    >
      <div className="flex flex-col w-[81px] items-start justify-between relative self-stretch">
        <div className="flex flex-col items-start gap-6 pt-8 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
          <div
            className={`flex flex-col items-start pl-6 pr-5 py-0 relative self-stretch w-full flex-[0_0_auto] ${headerClassName}`}
          >
             <div
  className={`inline-flex items-center justify-center relative flex-[0_0_auto] shadow-[0px_1px_2px_#1018280f,0px_1px_3px_#1018281a] bg-cover bg-center bg-no-repeat ${logomark}`}
  style={{ backgroundImage: `url(${logomark})`, width: '30px', height: '32px' , marginLeft: '4px' }}
/>

          </div>
          <div className="px-4 py-0 flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <div className="bg-[#0c1015] inline-flex items-start gap-2 p-3 relative flex-[0_0_auto] rounded-md overflow-hidden">
              <img src={home} className="relative w-6 h-6" alt="Home line" />
            </div>
            <div className="inline-flex items-start gap-2 p-3 relative flex-[0_0_auto] rounded-md overflow-hidden">
              <img src={bar} className="relative w-6 h-6" alt="Bar chart square" />
            </div>
            <div className="inline-flex items-start gap-2 p-3 relative flex-[0_0_auto] rounded-md overflow-hidden">
              <img src={layer} className="relative w-6 h-6" alt="Layers three" />
            </div>
            <div className="inline-flex items-start gap-2 p-3 relative flex-[0_0_auto] rounded-md overflow-hidden">
              <img src={check} className="relative w-6 h-6" alt="Check done" />
            </div>
            <div className="inline-flex items-start gap-2 p-3 relative flex-[0_0_auto] rounded-md overflow-hidden">
              <img src={pie}className="relative w-6 h-6" alt="Pie chart" />
            </div>
            <div className="inline-flex items-start gap-2 p-3 relative flex-[0_0_auto] rounded-md overflow-hidden">
              <img src={user} className="relative w-6 h-6" alt="Users" />
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col items-start gap-6 pt-0 pb-6 px-4 relative self-stretch w-full flex-[0_0_auto] ${footerClassName}`}
        >
          <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-start gap-2 p-3 relative flex-[0_0_auto] rounded-md overflow-hidden">
              <img className="relative w-6 h-6" alt="Life buoy" />
            </div>
            <div className="inline-flex items-start gap-2 p-3 relative flex-[0_0_auto] rounded-md overflow-hidden">
              <img className="relative w-6 h-6" alt="Settings" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SidebarNavigation.propTypes = {
  open: PropTypes.bool,
  style: PropTypes.oneOf(["slim"]),
  theme: PropTypes.oneOf(["default"]),
  breakpoint: PropTypes.oneOf(["desktop"]),
};