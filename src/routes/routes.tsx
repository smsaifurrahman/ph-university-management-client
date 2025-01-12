/** @format */

import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Login from "../pages/Login";
import { routesGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";
import ProtectedRoute from "../components/layout/ProtectedRoute";

const router = createBrowserRouter([
   {
      path: "/",
      element: <App></App>,
   },
   {
      path: "/admin",
      element: (
         <ProtectedRoute>
            <App></App>
         </ProtectedRoute>
      ),
      children: routesGenerator(adminPaths),
   },
   {
      path: "/faculty",
      element: <App></App>,
      children: routesGenerator(facultyPaths),
   },
   {
      path: "/admin",
      element: <App></App>,
      children: routesGenerator(studentPaths),
   },
   {
      path: "/login",
      element: <Login />,
   },
]);

export default router;
