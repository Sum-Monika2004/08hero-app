import React from "react";

import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Installation from "../Pages/Installation/Installation";
import AppDetails from "../Pages/AppDetails/AppDetails";
import ErrorApp from "../Pages/ErrorApp/ErrorApp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("/apps.json"),
        Component: Home,
        path: "/",
      },
      {
        path: "/about",
        loader: () => fetch("/apps.json"),
        Component: About,
      },
      {
        path: "/installation",
        loader: () => fetch("/apps.json"),
        Component: Installation,
      },
      {
        path: "/appDetails/:id",
        loader: () => fetch("/apps.json"),
        Component: AppDetails,
      },
    ],
  },
  {
    path: "/about/*",
    Component: ErrorApp,
  },
]);
