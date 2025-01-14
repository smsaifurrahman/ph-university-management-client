import { useGetAllSemesterQuery } from "../../../redux/features/academicSemester/academicSemesterApi";


const AcademicSemester = () => {
    const {data} = useGetAllSemesterQuery(undefined);
    console.log('from semester',data);
    return (
        <div>
            Academic Semester
        </div>
    );
};

export default AcademicSemester;