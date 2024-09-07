
// import { Main } from "../src/components/Main";
// import { SidebarNavigationWrapper } from "../src/components/SidebarNavigationWrapper";
// import AppRoutes from './Routes';

// export const FullTime = (): JSX.Element => {
//   return (
//     <div className="bg-[#0c1015] flex flex-row justify-center w-full">
//       <div className="bg-[#0c1015] w-[1440px] h-[1080px] relative">
//         <AppRoutes />
//         <Main />
//         <SidebarNavigationWrapper />
//       </div>
//     </div>
//   );
// };
// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { SidebarNavigationWrapper } from "../src/components/SidebarNavigationWrapper";
// import AppRoutes from './Routes';

// const App: React.FC = () => {
//   return (
//     <Router>
//       <div className="bg-[#0c1015] flex flex-row justify-center w-full">
//         <div className="bg-[#0c1015] w-[1440px] h-[1080px] relative">
//           <SidebarNavigationWrapper />
//           <AppRoutes />
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { SidebarNavigationWrapper } from "../src/components/SidebarNavigationWrapper";
import AppRoutes from './Routes';

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-[#0c1015] flex flex-row justify-center w-full">
        <div className="bg-[#0c1015] w-[1440px] h-[1080px] relative">
        <AppRoutes />
          <SidebarNavigationWrapper />
           
        </div>
      </div>
    </Router>
  );
};

export default App;