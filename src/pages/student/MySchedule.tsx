/** @format */

import { useGetAllEnrolledCoursesQuery } from "../../redux/features/student/studentCourseManagement.api";

const MySchedule = () => {
   const { data } = useGetAllEnrolledCoursesQuery(undefined);
   console.log(data);
   return (
      <div>
         {data?.data?.map((item, index) => (
            <div key={index}>
               <div>{item.course.title}</div>
               <div>{item.offeredCourse.section}</div>
               <div>
                  {item.offeredCourse.days.map((day, dayIndex) => (
                     <span key={dayIndex}>{day} </span>
                  ))}
               </div>
            </div>
         ))}
      </div>
   );
};

export default MySchedule;
