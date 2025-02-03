import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import DataDetail from './pages/DataDetail';
import DataExplorer from './pages/DataExplorer';
import Home from './pages/Home';

function AppRouter(): React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data-explorer" element={<DataExplorer />} />
        <Route path="/data-explorer/:id" element={<DataDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
