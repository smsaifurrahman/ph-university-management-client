/** @format */

import { TQueryParams, TResponseRedux } from "../../../types";
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { baseApi } from "../../api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({
   endpoints: (builder) => ({
       getAllSemester: builder.query({
          query: (agrs) => {
             const params = new URLSearchParams();

             if (agrs) {
                agrs.forEach((item: TQueryParams) => {
                   params.append(item.name, item.value as string);
                });
             }
             return {
                url: "/semesters-registrations",
                method: "GET",
                params: params,
             };
          },
          transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
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
      }),
   }),
});

export const {useAddRegisterSemesterMutation} = courseManagementApi;