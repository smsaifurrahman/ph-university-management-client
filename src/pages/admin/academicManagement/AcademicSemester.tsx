/** @format */

import { useGetAllSemesterQuery } from "../../../redux/features/admin/academicManagement.api";
import React from "react";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";

const AcademicSemester = () => {
   const { data: semesterData } = useGetAllSemesterQuery(undefined);

   const tableData = semesterData?.data?.map(
      ({ _id, name, startMonth, endMonth, year }) => ({
         _id,
         name,
         startMonth,
         endMonth,
         year,
      })
   );

   interface DataType {
      key: React.Key;
      name: string;
      age: number;
      address: string;
   }

   const columns: TableColumnsType<DataType> = [
      {
         title: "Name",
         dataIndex: "name",
         showSorterTooltip: { target: "full-header" },
         filters: [
            {
               text: "Joe",
               value: "Joe",
            },
            {
               text: "Jim",
               value: "Jim",
            },
            {
               text: "Submenu",
               value: "Submenu",
               children: [
                  {
                     text: "Green",
                     value: "Green",
                  },
                  {
                     text: "Black",
                     value: "Black",
                  },
               ],
            },
         ],
        
      },
      {
         title: "Year",
         dataIndex: "year",
         
      },
      {
         title: "Start Month",
         dataIndex: "startMonth",
        
      },
      {
         title: "End Month",
         dataIndex: "endMonth",
        
      },
   ];

  //  const data = [
  //     {
  //        key: "1",
  //        name: "John Brown",
  //        age: 32,
  //        address: "New York No. 1 Lake Park",
  //     },
  //     {
  //        key: "2",
  //        name: "Jim Green",
  //        age: 42,
  //        address: "London No. 1 Lake Park",
  //     },
  //     {
  //        key: "3",
  //        name: "Joe Black",
  //        age: 32,
  //        address: "Sydney No. 1 Lake Park",
  //     },
  //     {
  //        key: "4",
  //        name: "Jim Red",
  //        age: 32,
  //        address: "London No. 2 Lake Park",
  //     },
  //  ];

   const onChange: TableProps<DataType>["onChange"] = (
      pagination,
      filters,
      sorter,
      extra
   ) => {
      console.log("params", pagination, filters, sorter, extra);
   };
   return (
      <Table<DataType>
         columns={columns}
         dataSource={tableData}
         onChange={onChange}
         showSorterTooltip={{ target: "sorter-icon" }}
      />
   );
};

export default AcademicSemester;
