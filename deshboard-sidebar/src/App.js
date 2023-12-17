import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile';
import MyCourses from './pages/MyCourses.jsx';
import Forum from './pages/Forum.jsx';
import Achivments from './pages/Achivments.jsx';
import Reports from './pages/Reports.jsx';
import Teachers from './pages/Teachers';
import Inquaries from './pages/Inquaries';
import Blog from './pages/Blog';
import Topbar from './components/topbar/Topbar';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Topbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/mycourses" element={<MyCourses />} />
          <Route path="/Forum" element={<Forum />} />
          <Route path="/achivments" element={<Achivments />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/inquaries" element={<Inquaries />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;