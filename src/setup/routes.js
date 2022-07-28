import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserLayout } from '../components/index';
import {
  HistoryPage,
  Home,
  PageNotFound,
  WatchVideo,
  WatchLater,
} from '../pages/index';

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route
          path="/"
          element={
            <UserLayout>
              <Home />
            </UserLayout>
          }
        />
        <Route
          path="/home"
          element={
            <UserLayout>
              <Home />
            </UserLayout>
          }
        />
        <Route
          path="/watchLater"
          element={
            <UserLayout>
              <WatchLater />
            </UserLayout>
          }
        />
        <Route
          path="/watch/:id"
          element={
            <UserLayout>
              <WatchVideo />
            </UserLayout>
          }
        />
        <Route
          path="/history"
          element={
            <UserLayout>
              <HistoryPage />
            </UserLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default Routing;
