/** @format */


import { Button, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { TAcademicSemester } from "../../../types/academicManagement.type";

import { TQueryParams } from "../../../types";

export type TTableData = Pick<
   TAcademicSemester,
   "name" | "year" | "startMonth" | "endMonth"
>;

const RegisteredSemesters = () => {



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
        
      },
      {
         title: "Status",
         key: "status",
         dataIndex: "status",
         
      },
      {
         title: "Start Date",
         key: "startDate",
         dataIndex: "startDate",
      },
      {
         title: "End Date",
         key: "endDate",
         dataIndex: "endDate",
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
         
         setParams(queryParams);
         
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

export default RegisteredSemesters;
