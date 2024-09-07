// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import HomePage from './HomePage';
// import ServicesNewPage from './ServicesNew';

// const AppRoutes: React.FC = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<HomePage />} />
//       <Route path="/services/new" element={<ServicesNewPage />} />
//     </Routes>
//   );
// };

// export default AppRoutes;
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ServicesNewPage from './ServicesNew';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services/new" element={<ServicesNewPage />} />
      {/* Optionally, you can add a catch-all route for undefined paths */}
      <Route path="*" element={<HomePage />} /> {/* Redirect to HomePage for any undefined paths */}
    </Routes>
  );
};

export default AppRoutes;
