import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import Dashboard from "../pages/OwnerDashboard/Dashboard/Dashboard";
import AddNewProduct from "../pages/OwnerDashboard/AddNewProduct/AddNewProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "dashboard/owner",
    element: <DashboardLayout />,
    // errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "add-new-product",
        element: <AddNewProduct />,
      },
    ],
  },
]);