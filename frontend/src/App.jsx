import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./pages/Loader.jsx";

// Lazy-loaded components
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.jsx"));
const AppRoute = lazy(() => import("./pages/app/route/AppRoute.jsx"));
const AdminRoute = lazy(() => import("./pages/zarud-admin/route/AdminRoute.jsx"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Routes>
          {/* Use wildcard * to allow matching deeper routes */}
          <Route path="/zarud-admin/*" element={<AdminRoute />} />
          <Route path="/app/*" element={<AppRoute />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;