import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {GET_FACULTY_PROGESS} from "../../../redux-saga/faculty/action/action";

const Faculty = () => {
  const dispatch = useDispatch();
  const faculty = useSelector((state) => state.facultyReducer.Faculty);

  // GET

  useEffect(() => {
    dispatch({ type: GET_FACULTY_PROGESS });
  }, []);

  return (
    <div>
      <div className="m-4 shadow rounded">
        <div className="table-responsive shadow-md rounded-lg">
          <table className="table table-striped text-center">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">User Name</th>
                <th scope="col">Department</th>
                <th scope="col">Gender</th>
              </tr>
            </thead>
            <tbody>
              {faculty?.map((e, index) => (
                <tr className="bg-white text-center border-bottom" key={index}>
                  <td className="px-6 py-4 font-weight-bold">{index + 1}</td>
                  <td className="px-6 py-4">{e.username}</td>
                  <td className="px-6 py-4">{e.department}</td>
                  <td className="px-6 py-4">{e.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
