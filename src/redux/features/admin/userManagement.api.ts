import { TQueryParams, TResponseRedux, TStudent } from "../../../types";

import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
          getAllStudents: builder.query({
             query: (agrs) => {
                const params = new URLSearchParams();
    
                if (agrs) {
                   agrs.forEach((item: TQueryParams) => {
                      params.append(item.name, item.value as string);
                   });
                }
                return {
                   url: "/students",
                   method: "GET",
                   params: params,
                };
             },
             transformResponse: (response: TResponseRedux<TStudent[]>) => {
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
          getAllFaculties: builder.query({
            query: (agrs) => {
               const params = new URLSearchParams();
   
               if (agrs) {
                  agrs.forEach((item: TQueryParams) => {
                     params.append(item.name, item.value as string);
                  });
               }
               return {
                  url: "/faculties",
                  method: "GET",
                  params: params,
               };
            },
            transformResponse: (response: TResponseRedux<TStudent[]>) => {
               console.log("inside redux", response);
               return {
                  data: response.data,
                  meta: response.meta,
               };
            },
         }),
       }),
})

export const {useAddStudentMutation,useGetAllStudentsQuery, useGetAllFacultiesQuery} = userManagementApi;