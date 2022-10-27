import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Practice from './pages/Practice';
import Template from './pages/Template/Template';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/practice" element={<Practice />} />
        <Route path="/template" element={<Template />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
