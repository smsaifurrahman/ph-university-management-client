/** @format */

import { Button, Pagination, Space, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";

import { useState } from "react";
import { TQueryParams, TStudent } from "../../../types";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManagement.api";
import { Link } from "react-router-dom";

export type TTableData = Pick<
   TStudent,
   "fullName" | "id" | "email" | "contactNo"
>;

const StudentData = () => {
   const [params, setParams] = useState<TQueryParams[]>([]);
   const [page, setPage] = useState(1);
   const { data: studentData, isFetching } = useGetAllStudentsQuery([
      { name: "limit", value: 10 },
      { name: "page", value: page },
      { name: "sort", value: "id" },
      ...params,
   ]);

   const metaData = studentData?.meta;

   const tableData = studentData?.data?.map(
      ({ _id, fullName, id, email, contactNo }) => ({
         key: _id,
         fullName,
         id,
         email,
         contactNo,
      })
   );

   const columns: TableColumnsType<TTableData> = [
      {
         title: "Name",
         key: "name",
         dataIndex: "fullName",
      },
      {
         title: "Roll No",
         key: "id",
         dataIndex: "id",
      },
      {
         title: "Email",
         key: "email",
         dataIndex: "email",
      },
      {
         title: "Contact No",
         key: "contactNo",
         dataIndex: "contactNo",
      },

      {
         title: "Action",
         key: "X",
         render: (item) => {
            console.log(item);
            return (
               <Space>
                  <Link to={`/admin/student-data/${item.key}`}>
                     <Button>Details</Button>
                  </Link>

                  <Button>Update</Button>
                  <Button>Block</Button>
               </Space>
            );
         },
         width: "1%",
      },
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
      <>
         <Table
            loading={isFetching}
            columns={columns}
            dataSource={tableData}
            onChange={onChange}
            pagination={false}
         />
         <Pagination
            current={page}
            onChange={(value) => setPage(value)}
            pageSize={metaData?.limit}
            total={metaData?.total}
         />
      </>
   );
};

export default StudentData;
