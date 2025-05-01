
import React from 'react';
import AppRoutes from "./Routs/AppRoutes"
import Profile from './Pages/Profile/Profile';
import Portfolio from './Portfolio/Portfolio.jsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from './Portfolio/Blog.jsx';
const App = () => {
  return (
    <div>
      {/* <AppRoutes /> */}
      {/* <Profile /> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Portfolio />} /> */}
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
