/** @format */

import { Button, Modal, Table } from "antd";

import { useState } from "react";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import {
   useAddFacultiesMutation,
   useGetAllCoursesQuery,
} from "../../../redux/features/admin/courseManagement.api";
import { useGetAllFacultiesQuery } from "../../../redux/features/admin/userManagement.api";
import ButtonGroup from "antd/es/button/button-group";

const Courses = () => {
   // const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);

   const { data: courses, isFetching } = useGetAllCoursesQuery(undefined);

   const tableData = courses?.data?.map(({ _id, title, prefix, code }) => ({
      key: _id,
      title,
      code: `${prefix}${code}`,
   }));

   const columns = [
      {
         title: "Title",
         key: "title",
         dataIndex: "title",
      },
      {
         title: "Code",
         key: "code",
         dataIndex: "code",
      },
      {
         title: "Action",
         key: "x",
         render: (item) => {
            return <AddFacultyModal facultyInfo={item} />;
         },
      },
   ];

   // const onChange: TableProps<TTableData>['onChange'] = (
   //   _pagination,
   //   filters,
   //   _sorter,
   //   extra
   // ) => {
   //   if (extra.action === 'filter') {
   //     const queryParams: TQueryParam[] = [];
   //     setParams(queryParams);
   //   }
   // };

   return (
      <Table
         loading={isFetching}
         columns={columns}
         dataSource={tableData}
         // onChange={onChange}
      />
   );
};

const AddFacultyModal = ({ facultyInfo }) => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const { data: facultiesData } = useGetAllFacultiesQuery(undefined);
   const [addFaculties] = useAddFacultiesMutation();

   const facultiesOptions = facultiesData?.data?.map((item) => ({
      value: item._id,
      label: item.fullName,
   }));

   const handleSubmit = (data) => {
      const facultyData = {
         courseId: facultyInfo.key,
         data,
      };

      addFaculties(facultyData);
   };
   const showModal = () => {
      setIsModalOpen(true);
   };

   const handleCancel = () => {
      setIsModalOpen(false);
   };

   return (
      <>
         <Button onClick={showModal}>AssignFaculty</Button>
         <Modal
            title={<p>Loading Modal</p>}
            open={isModalOpen}
            onCancel={handleCancel}
            footer={null}
         >
            <PHForm onSubmit={handleSubmit}>
               <PHSelect
                  mode="multiple"
                  options={facultiesOptions}
                  name="faculties"
                  label="Faculty"
               />
               <Button htmlType="submit">Submit</Button>
            </PHForm>
         </Modal>
      </>
   );
};

export default Courses;
