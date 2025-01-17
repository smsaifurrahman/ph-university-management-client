import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
        //   getAllSemester: builder.query({
        //      query: (agrs) => {
        //         const params = new URLSearchParams();
    
        //         if (agrs) {
        //            agrs.forEach((item: TQueryParams) => {
        //               params.append(item.name, item.value as string);
        //            });
        //         }
        //         return {
        //            url: "/academic-semesters",
        //            method: "GET",
        //            params: params,
        //         };
        //      },
        //      transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        //         console.log("inside redux", response);
        //         return {
        //            data: response.data,
        //            meta: response.meta,
        //         };
        //      },
        //   }),
          addStudent: builder.mutation({
             query: (data) => ({
                url: "/user/create-student",
                method: "POST",
                body: data,
             }),
          }),
       }),
})

export const {useAddStudentMutation} = userManagementApi;