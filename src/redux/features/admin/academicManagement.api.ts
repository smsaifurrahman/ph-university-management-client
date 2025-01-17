/** @format */

import { TQueryParams, TResponseRedux } from "./../../../types/global";

import { baseApi } from "../../api/baseApi";
import { TAcademicSemester } from "../../../types/academicManagement.type";

const academicManagementApi = baseApi.injectEndpoints({
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
               url: "/academic-semesters",
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
      addAcademicSemester: builder.mutation({
         query: (data) => ({
            url: "/academic-semesters/create-academic-semester",
            method: "POST",
            body: data,
         }),
      }),
   }),
});

export const { useGetAllSemesterQuery, useAddAcademicSemesterMutation } =
   academicManagementApi;
