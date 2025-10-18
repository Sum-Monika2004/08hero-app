import React from "react";

import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Installation from "../Pages/Installation/Installation";
import AppDetails from "../Pages/AppDetails/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("apps.json"),
        Component: Home,
        path: "/",
      },
      {
        path: "/about",

        Component: About,
      },
      {
        path: "/installation",
        Component: Installation,
      },
      {
        path: "/appDetails/:id",
        Component: AppDetails,
      },
    ],
  },
]);
