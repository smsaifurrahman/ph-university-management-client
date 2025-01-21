/** @format */

import { Button, Dropdown, Table, Tag } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { TQueryParams, TSemester } from "../../../types";
import { useGetAllRegisteredSemestersQuery, useUpdateRegisterSemesterMutation } from "../../../redux/features/admin/courseManagement.api";
import moment from "moment";
import { useState } from "react";

export type TTableData = Pick<TSemester, "status" | "startDate" | "endDate">;

const items = [
   {
      label: "Upcoming",
      key: "UPCOMING",
   },
   {
      label: "Ongoing",
      key: "ONGOING",
   },
   {
      label: "Ended",
      key: "ENDED",
   },
];

const RegisteredSemesters = () => {
   const [semesterId, setSemesterId] = useState("");
   const [updateSemesterStatus] = useUpdateRegisterSemesterMutation()
   const handleStatusUpdate = (data) => {
      // console.log('semester',semesterId);
      // console.log('newStatus', data.key );
      const updateData = {
         id: semesterId,
         data: {
            status: data.key
         }
      };
      console.log(updateData);
      updateSemesterStatus(updateData)
   };

   const menuProps = {
      items,
      onClick: handleStatusUpdate,
   };
   console.log(semesterId);
   const {
      data: semesterData,
      isLoading,
      isFetching,
   } = useGetAllRegisteredSemestersQuery(undefined);

   const tableData = semesterData?.data?.map(
      ({ _id, academicSemester, startDate, endDate, status }) => ({
         key: _id,
         name: `${academicSemester.name} ${academicSemester.year}`,
         startDate: moment(new Date(startDate)).format("MMMM"),
         endDate: moment(new Date(endDate)).format("MMMM"),
         status,
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
         render: (item) => {
            let color;
            if (item === "UPCOMING") {
               color = "blue";
            }
            if (item === "ONGOING") {
               color = "green";
            }
            if (item === "ENDED") {
               color = "red";
            }
            return <Tag color={color}>{item}</Tag>;
         },
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
         key: "X",
         render: (item) => {
            return (
               <Dropdown menu={menuProps} trigger={["click"]}>
                  <Button onClick={() => setSemesterId(item.key)}>
                     Update
                  </Button>
               </Dropdown>
            );
         },
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
