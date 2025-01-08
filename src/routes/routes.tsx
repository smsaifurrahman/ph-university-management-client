/** @format */

import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Login from "../pages/Login";
import {  adminRoutes } from "./admin.routes";


const router = createBrowserRouter([
   {
      path: "/",
      element: <App></App>,
   },
   {
      path: "/admin",
      element: <App></App>,
      children: adminRoutes,
   },
   {
      path: "/faculty",
      element: <App></App>,
      children: adminRoutes,
   },
   {
      path: "/admin",
      element: <App></App>,
      children: adminRoutes,
   },
   {
      path: "/login",
      element: <Login />,
   },
]);

export default router;
