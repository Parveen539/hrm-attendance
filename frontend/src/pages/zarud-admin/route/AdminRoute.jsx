import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "../../Loader.jsx";
import { ToastContainer } from "react-toastify"; // Make sure to install react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import CSS for styling
import ToastNotification from "../../../components/helper/OnlineOffline.jsx"; // Adjust the import based on your folder structure
import { Login } from "../../app/login.jsx";

// Lazy-loaded components
const NotFoundPage = lazy(() => import("../../NotFoundPage.jsx"));
const Home = lazy(() => import("../Home.jsx"));
const About = lazy(() => import("../About.jsx"));

function AdminRoute() {
  return (
    <Suspense fallback={<Loader />}>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        draggable
        pauseOnHover
      />
      <ToastNotification />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </Suspense>
  );
}
export default AdminRoute;
