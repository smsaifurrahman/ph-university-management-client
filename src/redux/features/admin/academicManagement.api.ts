/** @format */

import { TQueryParams, TResponseRedux } from "./../../../types/global";

import { baseApi } from "../../api/baseApi";
import {
   TAcademicDepartment,
   TAcademicFaculty,
   TAcademicSemester,
} from "../../../types/academicManagement.type";

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

      getAcademicFaculties: builder.query({
         query: () => {
           return { url: '/academic-faculties', method: 'GET' };
         },
         transformResponse: (response: TResponseRedux<TAcademicFaculty[]>) => {
           return {
             data: response.data,
             meta: response.meta,
           };
         },
       }),
       addAcademicFaculty: builder.mutation({
         query: (data) => ({
           url: '/academic-faculties/create-academic-faculty',
           method: 'POST',
           body: data,
         }),
       }),

       getAcademicDepartments: builder.query({
         query: () => {
           return { url: '/academic-departments', method: 'GET' };
         },
         transformResponse: (response: TResponseRedux<TAcademicDepartment[]>) => {
           return {
             data: response.data,
             meta: response.meta,
           };
         },
       }),

       addAcademicDepartment: builder.mutation({
         query: (data) => ({
           url: '/academic-departments/create-academic-department',
           method: 'POST',
           body: data,
         }),
       }),


   }),
});

export const { useGetAllSemesterQuery, useAddAcademicSemesterMutation, useAddAcademicFacultyMutation, useGetAcademicFacultiesQuery, useAddAcademicDepartmentMutation, useGetAcademicDepartmentsQuery} =
   academicManagementApi;
