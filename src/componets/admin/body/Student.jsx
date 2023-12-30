import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_STUDENT_PROGESS } from "../../../redux-saga/student/action/action";

const Student = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.StudentReducer.Student);

  useEffect(() => {
    dispatch({ type: GET_STUDENT_PROGESS });
  }, []);

  return (
    <div>
      <div className="m-4 shadow rounded">
        <div className="table-responsive shadow-md rounded-lg">
          <table className="table table-striped text-center">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">GR_ID</th>
                <th scope="col">Student Name</th>
                <th scope="col">Course</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((e, index) => (
                <tr className="bg-white text-center border-bottom" key={index}>
                  <td className="px-6 py-4 font-weight-bold">{index + 1}</td>
                  <td className="px-6 py-4">{e.gr_id}</td>
                  <td className="px-6 py-4">{e.student_name}</td>
                  <td className="px-6 py-4">{e.course}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Student;
