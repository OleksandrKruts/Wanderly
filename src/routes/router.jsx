import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layouts/RootLayout";

import Home from "../pages/Home/Home";
import Travelers from "../pages/Travelers/Travelers";
import TravelerDetails from "../pages/TravelerDetails/TravelerDetails";
import Places from "../pages/Places/Places";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import PlaceDetails from "../pages/PlaceDetails/PlaceDetails";

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
        path: "places",
        element: <Places />,
      },
      {
        path: "places/:id",
        element: <PlaceDetails />,
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
