import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Practice from './pages/practice';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
