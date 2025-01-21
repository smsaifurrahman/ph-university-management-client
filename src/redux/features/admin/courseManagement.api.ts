/** @format */

import { TQueryParams, TResponseRedux, TSemester } from "../../../types";
import { baseApi } from "../../api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({
   endpoints: (builder) => ({
       getAllRegisteredSemesters: builder.query({
          query: (agrs) => {
             const params = new URLSearchParams();

             if (agrs) {
                agrs.forEach((item: TQueryParams) => {
                   params.append(item.name, item.value as string);
                });
             }
             return {
                url: "/semester-registrations",
                method: "GET",
                params: params,
             };
          },
          providesTags: ['semester'],
          transformResponse: (response: TResponseRedux<TSemester[]>) => {
             console.log("inside redux", response);
             return {
                data: response.data,
                meta: response.meta,
             };
          },
       }),
      addRegisterSemester: builder.mutation({
         query: (data) => ({
            url: "/semester-registrations/create-semester-registration",
            method: "POST",
            body: data,
         }),
         invalidatesTags: ['semester']
      }),
      updateRegisterSemester: builder.mutation({
         query: (args) => ({
            url:`/semester-registrations/${args.id}`,
            method: "PATCH",
            body: args.data,
         }),
         invalidatesTags: ['semester']
      }),
   }),
});

export const {useAddRegisterSemesterMutation, useGetAllRegisteredSemestersQuery, useUpdateRegisterSemesterMutation} = courseManagementApi;