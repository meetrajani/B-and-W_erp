import { GET_STUDENT_ERROR, GET_STUDENT_PROGESS, GET_STUDENT_SUCCESS, POST_STUDENT_ERROR, POST_STUDENT_PROGESS, POST_STUDENT_SUCCESS } from "../action/action";

  
  const initlSatus = {
  
    // GET STUDENT
  
    Student: [],
    getstudentprogress: false,
    getstudenterror: null,

    // POST STUDENT

    poststudentprogress: false,
    poststudenterror: null,

    dataIsLodad : true,
  };
  
  const StudentReducer = (state = initlSatus, action) => {
    switch (action.type) {
  
      // GET STUDENT
  
      case GET_STUDENT_PROGESS: {
        return {
          ...state,
          getstudentprogress: true,
        };
      }
      case GET_STUDENT_SUCCESS: {
        return {
          ...state,
          dataIsLoded: true,
          Student: action.data,
        };
      }
      case GET_STUDENT_ERROR: {
        return {
          ...state,
          getstudenterror: action.data,
        };
      }

      // POST STUDENT

      case POST_STUDENT_PROGESS: {
        return {
          ...state,
          poststudentprogress: true,
        };
      }
      case POST_STUDENT_SUCCESS: {
        return {
          ...state,
          dataIsLoded: true,
          Student: state.Student.concat(action.data),
        };
      }
      case POST_STUDENT_ERROR: {
        return {
          ...state,
          POSTstudenterror: action.data,
        };
      }
  
      default: {
        return {
          ...state,
        };
      }
    }
  };
  export default StudentReducer;
  