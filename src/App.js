
// import React from 'react';
// import AppRoutes from "./Routs/AppRoutes"
// import Profile from './Pages/Profile/Profile';
// import Portfolio from './Portfolio/Portfolio.jsx';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Blog from './Portfolio/Blog.jsx';
// const App = () => {
//   return (
//     <div>
//       {/* <AppRoutes /> */}
//       {/* <Profile /> */}
//       <BrowserRouter basename="/blog-project">
//         <Routes>
//           {/* <Route path="/" element={<Portfolio />} /> */}
//           <Route path="/blog" element={<Blog />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };
// export default App;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter basename="/blog-project">
      <Routes>
        <Route path="/" element={<h1>✅ Deployed and Working!</h1>} />
        <Route path="/blog" element={<h2>📝 Blog Route Works</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
