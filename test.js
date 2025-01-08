/** @format */

const adminPaths2 = [
   {
      name: "Dashboard",
      path: "dashboard",
      element: "ADMIN_DASHBOARD",
   },
   {
      name: "User Management",
      children: [
         {
            name: "Create Admin",
            path: "Create Admin",
            element: "CREATE_ADMIN",
         },
         {
            name: "Create Faculty",
            path: "Create Faculty",
            element: "CREATE_FACULTY",
         },
         {
            name: "Create Student",
            path: "Create Student",
            element: "CREATE_STUDENT",
         },
      ],
   },
];

const newArray = adminPaths2.reduce((acc, item) => {
   if (item.path && item.name) {
      acc.push({
         key: item.path,
         label: "NAVLINK",
      });
   }

   if (item.children) {
      acc.push({
         key: item.name,
         label: item.name,
         children: item.children.map((child) => ({
            key: child.name,
            label: "Navlink",
         })),
      });
   }

   return acc;
}, []);

// const newArray = adminPaths2.reduce((acc, item) => {
//    if (item.path && item.element) {
//       acc.push({
//          path: item.path,
//          element: item.element,
//       });
//    }

//    if (item.children) {
//       item.children.forEach((child) => {
//          acc.push({
//             path: child.path,
//             element: child.element,
//          });
//       });
//    }

//    return acc;
// }, []);

console.log(newArray);

const arr = [1, 2, 3, 4];

const result = arr.reduce((acc, item) => {
   acc.push(acc + item);
   return acc;
}, []);

// console.log('Final Result =>', result );
