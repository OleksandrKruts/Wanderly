import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layouts/RootLayout";

import Home from "../pages/Home/Home";
import Travelers from "../pages/Travelers/Travelers";
import TravelerDetails from "../pages/TravelerDetails/TravelerDetails";
import Hotels from "../pages/Hotels/Hotels";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "travelers",
        element: <Travelers />,
      },
      {
        path: "travelers/:id",
        element: (
          <ProtectedRoute>
            <TravelerDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "hotels",
        element: <Hotels />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
