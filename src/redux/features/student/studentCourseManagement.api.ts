import { TQueryParams, TResponseRedux } from "../../../types";
import { TOfferedCourse } from "../../../types/studentCourse.type";
import { baseApi } from "../../api/baseApi";

const studentCourseApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
          getAllOfferedCourses: builder.query({
             query: (agrs) => {
                const params = new URLSearchParams();
                console.log(params);
    
                if (agrs) {
                   agrs.forEach((item: TQueryParams) => {
                      params.append(item.name, item.value as string);
                   });
                }
                return {
                   url: "/offered-courses/my-offered-courses",
                   method: "GET",
                   params: params,
                };
             },
             providesTags: ['offeredCourse'],
             transformResponse: (response: TResponseRedux<TOfferedCourse>) => {
                console.log("inside redux", response);
                return {
                   data: response.data,
                   meta: response.meta,
                };
             },
          }),
          getAllEnrolledCourses: builder.query({
             query: (agrs) => {
                const params = new URLSearchParams();
                console.log(params);
    
                if (agrs) {
                   agrs.forEach((item: TQueryParams) => {
                      params.append(item.name, item.value as string);
                   });
                }
                return {
                   url: "/enrolled-courses/my-enrolled-courses",
                   method: "GET",
                   params: params,
                };
             },
             providesTags: ['offeredCourse'],
             transformResponse: (response: TResponseRedux<any>) => {
               
                return {
                   data: response.data,
                   meta: response.meta,
                };
             },
          }),
      
          enrollCourse: builder.mutation({
             query: (data) => ({
                url: "/enrolled-courses/create-enrolled-course",
                method: "POST",
                body: data,
             }),
             invalidatesTags: ['offeredCourse']
          }),
      
       }),
})

export const {useGetAllOfferedCoursesQuery, useEnrollCourseMutation, useGetAllEnrolledCoursesQuery} = studentCourseApi;