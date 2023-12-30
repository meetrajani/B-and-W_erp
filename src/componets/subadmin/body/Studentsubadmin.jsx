import React, { useState } from "react";

const Studentsubadmin = () => {

  // POST
  const [add, setadd] = useState({
    faculty_name: "",
    department: "",
    username: "",
    password: "",
    gender: "",
  });

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
                      Modal title
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
                        Faculty Name :{" "}
                      </label>
                      <input
                        type="text"
                        name="faculty_name"
                        onChange={changedata}
                        className="form-control mt-2"
                        placeholder="Faculty Name"
                        required
                      />

                      <label className="form-label mt-3 fw-bold">
                        User Name :{" "}
                      </label>
                      <input
                        type="text"
                        name="username"
                        onChange={changedata}
                        className="form-control mt-2"
                        placeholder="name"
                        required
                      />

                      <label className="form-label mt-3 fw-bold">
                        Department :{" "}
                      </label>
                      <input
                        name="department"
                        onChange={changedata}
                        type="text"
                        className="form-control mt-2"
                        placeholder="Department"
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
                        required
                      />

                      <div>
                        <label className="form-label mt-3 fw-bold">
                          Gender :{" "}
                        </label>
                        <div className="form-check">
                          <input
                            onChange={changedata}
                            className="form-check-input mt-2"
                            name="gender"
                            value="male"
                            id="flexRadioDefault1"
                            type="radio"
                          />
                          <label className="form-check-label">Male</label>
                        </div>
                        <div className="form-check">
                          <input
                            onChange={changedata}
                            className="form-check-input mt-2"
                            type="radio"
                            value="female"
                            name="gender"
                            id="flexRadioDefault2"
                          />
                          <label className="form-check-label">Female</label>
                        </div>
                      </div>
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
                {/* {data?.map((e, index) => (
                  <tr
                    className="bg-white text-center border-bottom"key={index}
                  >
                    <td className="px-6 py-4 font-weight-bold">{index + 1}</td>
                    <td className="px-6 py-4">{e.username}</td>
                    <td className="px-6 py-4">{e.department}</td>
                    <td className="px-6 py-4">{e.gender}</td>
                  </tr>
                ))} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studentsubadmin;
