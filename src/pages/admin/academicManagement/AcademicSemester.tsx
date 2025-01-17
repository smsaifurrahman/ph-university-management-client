/** @format */

import { useGetAllSemesterQuery } from "../../../redux/features/admin/academicManagement.api";
import { Button, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { useState } from "react";
import { TQueryParams } from "../../../types";

export type TTableData = Pick<
   TAcademicSemester,
   "name" | "year" | "startMonth" | "endMonth"
>;

const AcademicSemester = () => {
   const [params, setParams] = useState<TQueryParams[] | undefined>(undefined);
   const {
      data: semesterData,
      isLoading,
      isFetching,
   } = useGetAllSemesterQuery(params);

   const tableData = semesterData?.data?.map(
      ({ _id, name, startMonth, endMonth, year }) => ({
         key: _id,
         name,
         startMonth,
         endMonth,
         year,
      })
   );

   const columns: TableColumnsType<TTableData> = [
      {
         title: "Name",
         key: "name",
         dataIndex: "name",
         filters: [
            {
               text: "Autumn",
               value: "Autumn",
            },
            {
               text: "Fall",
               value: "Fall",
            },
            {
               text: "Summer",
               value: "Summer",
            },
         ],
      },
      {
         title: "Year",
         key: "year",
         dataIndex: "year",
         filters: [
            {
               text: "2025",
               value: "2025",
            },
            {
               text: "2026",
               value: "2026",
            },
            {
               text: "2027",
               value: "2027",
            },
         ],
      },
      {
         title: "Start Month",
         key: "startMoth",
         dataIndex: "startMonth",
      },
      {
         title: "End Month",
         key: "endMonth",
         dataIndex: "endMonth",
      },
      {
         title: "Action",
         key: 'X',
         render: () => {
            return <div> <Button>Update</Button> </div>
         }
      }
   ];

   const onChange: TableProps<TTableData>["onChange"] = (
      _pagination,
      filters,
      _sorter,
      extra
   ) => {
      if (extra.action === "filter") {
         const queryParams: TQueryParams[] = [];
         filters.name?.forEach((item) => {
            queryParams.push({
               name: "name",
               value: item,
            });
         });
         filters.year?.forEach((item) => {
            queryParams.push({
               name: "year",
               value: item,
            });
         });
         setParams(queryParams);
         console.log(queryParams);
      }
      // console.log({ filters, extra });
   };

   // if(isLoading) {
   //    return <p>Loading..</p>
   // }
   return (
      <Table
         loading={isFetching}
         columns={columns}
         dataSource={tableData}
         onChange={onChange}
      />
   );
};

export default AcademicSemester;
