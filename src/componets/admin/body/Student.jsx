import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_STUDENT_PROGESS} from "../../../redux-saga/admin/action/action";


const Student = () => {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.facultyReducer.Student);

  console.log(data);
  useEffect(() => {
    dispatch({ type: GET_STUDENT_PROGESS});
  }, []);

  return (
    <div>
      <div className="table-responsive shadow-md rounded-lg">
        <table className="table table-sm table-striped text-left">
          <thead className="text-xs text-white text-center bg-light">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Student Name</th>
              <th className="px-6 py-3">Course</th>
              <th className="px-6 py-3">GR_ID</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((e, index) => (
              <tr className="bg-white text-center border-bottom" key={index}>
                <td className="px-6 py-4 font-weight-bold">{index + 1}</td>
                <td className="px-6 py-4">{e.student_name}</td>
                <td className="px-6 py-4">{e.course}</td>
                <td className="px-6 py-4">{e.gr_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Student;
