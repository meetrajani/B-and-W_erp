import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DELETE_STUDENT_PROGESS,
  GET_STUDENT_PROGESS,
  POST_STUDENT_PROGESS,
  UPDATE_STUDENT_PROGESS,
} from "../../../redux-saga/student/action/action";

const Studentsubadmin = () => {
  const dispatch = useDispatch();
  const student = useSelector((state) => state.StudentReducer.student);

  // GET

  useEffect(() => {
    dispatch({ type: GET_STUDENT_PROGESS });
  }, []);

  // POST
  const [data, setdata] = useState({
    student_name: "",
    course: "",
    enrollment_number: JSON.stringify(Math.floor(Math.random() * 1000000000000)),
    gr_id: JSON.stringify(Math.floor(Math.random() * 10000)),
    password: "",
  });

  const changedata = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const submit = () => {
    dispatch({ type: POST_STUDENT_PROGESS, paylod: data });
  };

  // DELETE

  const Deletestudent = (id) =>{
    dispatch({ type: DELETE_STUDENT_PROGESS,paylod:id})
    // console.log(id);
  }

  // EDIT DATA 

  const [Udata,setUdata]=useState([])

  const Editdata = (e) =>{
    setUdata(e)
  }
  
  const changeUdata = (e) => {
    setUdata({ ...Udata, [e.target.name]: e.target.value });
  };
  
  const Editdatabtn = () =>{

    const send = {
      _id : Udata._id,
      student_name : Udata.student_name
    }

    dispatch({type:UPDATE_STUDENT_PROGESS,paylod:send})
  }

  return (
    <div>
      {/* input data */}

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
            {/* ADD STUDENT DATA */}
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
                        value={data.student_name}
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
                        value={data.course}
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
                        value={data.password}
                        type="password"
                        className="form-control mt-2"
                        placeholder="*****"
                        required
                      />
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
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* UPDATE STUDENT DATA */}

            <div
              className="modal fade"
              id="examModal"
              tabIndex={-1}
              aria-labelledby="examModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Chang Student
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
                        onChange={changeUdata}
                        value={Udata.student_name}
                        className="form-control mt-2"
                        placeholder="Student Name"
                        required
                      />

                      {/* <label className="form-label mt-3 fw-bold">
                        Enter Course :{" "}
                      </label>
                      <input
                        type="text"
                        name="course"
                        onChange={changeUdata}
                        value={Udata.course}
                        className="form-control mt-2"
                        placeholder="Course Name"
                        required
                      />

                      <label className="form-label mt-3 fw-bold">
                        Password :{" "}
                      </label>
                      <input
                        name="password"
                        onChange={changeUdata}
                        value={Udata.password}
                        type="password"
                        className="form-control mt-2"
                        placeholder="*****"
                        required
                      /> */}
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
                      onClick={Editdatabtn}
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

      {/* Sow Data */}

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
                {student?.map((e, index) => (
                  <tr
                    className="bg-white text-center border-bottom"
                    key={index}
                  >
                    <td className="px-6 py-4 font-weight-bold">{index + 1}</td>
                    <td className="px-6 py-4">{e.gr_id}</td>
                    <td className="px-6 py-4">{e.enrollment_number}</td>
                    <td className="px-6 py-4">{e.student_name}</td>
                    <td className="px-6 py-4">{e.course}</td>
                    <td className="px-6 py-4">
                      <button 
                        className="btn btn-outline-success"
                        onClick={()=>Editdata(e)}
                        data-bs-toggle="modal"
                        data-bs-target="#examModal"
                      >
                          Edit
                        </button>
                      <button
                        onClick={() => Deletestudent(e._id)}
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
