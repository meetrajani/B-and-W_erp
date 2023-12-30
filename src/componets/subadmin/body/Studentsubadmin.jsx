import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_STUDENT_PROGESS } from "../../../redux-saga/student/action/action";

const Studentsubadmin = () => {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.StudentReducer.Student);

  // GET

  useEffect(() => {
    dispatch({ type: GET_STUDENT_PROGESS });
  }, []);

  // POST
  const [add, setadd] = useState([]);

  const changedata = (e) => {
    setadd({ ...add, [e.target.name]: e.target.value });
  };
  const submit = () => {
    console.log(add);
  };

  return (
    <div>
      <div>
        <div>
          <div>
            {/* Button trigger modal */}
            <button
              type="button"
              className="btn btn-outline-success m-4"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              ADD
            </button>
            {/* Modal */}
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Add Student
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div className="p-2">
                      <label className="form-label fw-bold">
                        Enter Your Name :{" "}
                      </label>
                      <input
                        type="text"
                        name="student_name"
                        onChange={changedata}
                        className="form-control mt-2"
                        placeholder="Student Name"
                        required
                      />

                      <label className="form-label mt-3 fw-bold">
                        Enter Course :{" "}
                      </label>
                      <input
                        type="text"
                        name="course"
                        onChange={changedata}
                        className="form-control mt-2"
                        placeholder="Course Name"
                        required
                      />

                      <label className="form-label mt-3 fw-bold">
                        Password :{" "}
                      </label>
                      <input
                        name="password"
                        onChange={changedata}
                        type="password"
                        className="form-control mt-2"
                        placeholder="*****"
                        required/>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={submit}
                      data-bs-dismiss="modal"
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="m-4 shadow rounded">
          <div className="table-responsive shadow-md rounded-lg">
            <table className="table table-striped text-center">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">GR_ID</th>
                  <th scope="col">Enrollment Number</th>
                  <th scope="col">Student Name</th>
                  <th scope="col">Course</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((e, index) => (
                  <tr
                    className="bg-white text-center border-bottom"key={index}
                  >
                    <td className="px-6 py-4 font-weight-bold">{index + 1}</td>
                    <td className="px-6 py-4">{e.gr_id}</td>
                    <td className="px-6 py-4">{e.enrollment_number}</td>
                    <td className="px-6 py-4">{e.student_name}</td>
                    <td className="px-6 py-4">{e.course}</td>
                    <td className="px-6 py-4">
                    <button className="btn btn-outline-success">Edit</button>
                      <button
                        // onClick={() => Deletefaculty(e._id)}
                        className="btn btn-outline-danger ms-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studentsubadmin;
