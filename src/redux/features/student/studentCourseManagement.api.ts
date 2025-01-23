import { TQueryParams, TResponseRedux } from "../../../types";
import { baseApi } from "../../api/baseApi";

const studentCourseApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
          getAllOfferedCourses: builder.query({
             query: (agrs) => {
                const params = new URLSearchParams();
    
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
             transformResponse: (response: TResponseRedux<any>) => {
                console.log("inside redux", response);
                return {
                   data: response.data,
                   meta: response.meta,
                };
             },
          }),
      
          addStudent: builder.mutation({
             query: (data) => ({
                url: "/users/create-student",
                method: "POST",
                body: data,
             }),
          }),
      
       }),
})