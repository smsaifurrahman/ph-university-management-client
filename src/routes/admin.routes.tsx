/** @format */

import { Children } from "react";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import CreateAcademicSemester from "../pages/admin/academicManagement/CreateAcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/userManagement/CreateAdmin";
import CreateFaculty from "../pages/admin/userManagement/CreateFaculty";
import CreateStudent from "../pages/admin/userManagement/CreateStudent";
import StudentData from "../pages/admin/userManagement/StudentData";
import StudentDetails from "../pages/admin/userManagement/StudentDetails";
import SemesterRegistration from "../pages/admin/Course Management/SemesterRegistration";
import RegisteredSemesters from "../pages/admin/Course Management/RegisteredSemester";
import CreateCourse from "../pages/admin/Course Management/CreateCourse";
import Courses from "../pages/admin/Course Management/Courses";
import OfferCourse from "../pages/admin/Course Management/OfferCourse";

export const adminPaths = [
   {
      name: "Dashboard",
      path: "dashboard",
      element: <AdminDashboard />,
   },
   {
      name : "Academic Management",
      children: [
         {
            name: "Create A. Semester",
            path: "create-academic-semester",
            element: <CreateAcademicSemester />,
         },
         {
            name: "Academic Semester",
            path: "academic-semester",
            element: <AcademicSemester />,
         },
         {
            name: "Create A. Faculty",
            path: "create-academic-faculty",
            element: <CreateAcademicSemester />,
         },
         {
            name: "Academic Faculty",
            path: "academic-faculty",
            element: <AcademicSemester />,
         },
        
        
      ],
   }
   ,
   {
      name: "User Management",
      children: [
         {
            name: "Create Student",
            path: "create-student",
            element: <CreateStudent />,
         },
         {
            name: "Students",
            path: "students-data",
            element: <StudentData />,
         },
         {
        
            path: "student-data/:studentId",
            element: <StudentDetails />,
         },
         {
            name: "Create Admin",
            path: "create-admin",
            element: <CreateAdmin />,
         },
         {
            name: "Create Faculty",
            path: "create-faculty",
            element: <CreateFaculty />,
         },
        
      ],
   },
   {
      name: 'Course Management',
      children: [
         {
            name: "Registered Semesters",
            path: 'registered-semesters',
            element: <RegisteredSemesters />
         },
         {
            name: "Semester Registration",
            path: 'semester-registration',
            element: <SemesterRegistration />
         },
         {
            name: "Courses",
            path: 'courses',
            element: <Courses />
         },
         {
            name: "Create Course",
            path: 'create-course',
            element: <CreateCourse />
         },
     
         {
            name: "Offer Course",
            path: 'offer-course',
            element: <OfferCourse />
         },
     
      ]
   }
];

// export const adminSidebarItems = adminPaths.reduce((acc: TSidebarItem[], item) => {
//     if (item.path && item.name) {
//        acc.push({
//           key: item.path,
//           label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//        });
//     }

//     if (item.children) {
//        acc.push({
//           key: item.name,
//           label: item.name,
//           children: item.children.map((child) => ({
//              key: child.name,
//              label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//           })),
//        });
//     }

//     return acc;
//  }, []);

// export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
//     if (item.path && item.element) {
//        acc.push({
//           path: item.path,
//           element: item.element,
//        });
//     }

//     if (item.children) {
//        item.children.forEach((child) => {
//           acc.push({
//              path: child.path,
//              element: child.element,
//           });
//        });
//     }

//     return acc;
//  }, []);

// export const adminPaths = [
//    {
//       path: "dashboard",
//       element: <AdminDashboard />,
//    },
//    {
//       path: "create-student",
//       element: <CreateStudent />,
//    },
//    {
//       path: "create-admin",
//       element: <CreateAdmin />,
//    },
//    {
//       path: "create-faculty",
//       element: <CreateFaculty />,
//    },
// ];
