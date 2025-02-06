import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import DataDetailPage from './pages/DataDetailPage';
import DataExplorerPage from './pages/DataExplorerPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

function AppRouter(): React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/data-explorer" element={<DataExplorerPage />} />
        <Route path="/data-explorer/:id" element={<DataDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
