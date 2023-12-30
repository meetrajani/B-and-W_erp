import { GET_STUDENT_ERROR, GET_STUDENT_PROGESS, GET_STUDENT_SUCCESS } from "../action/action";

  
  const initlSatus = {
  
    // GET SUBADMIN
  
    Student: [],
    getstudentprogress: false,
    getstudenterror: null,
  };
  
  const StudentReducer = (state = initlSatus, action) => {
    switch (action.type) {
  
      // GET SUBADMIN
  
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
  
      default: {
        return {
          ...state,
        };
      }
    }
  };
  export default StudentReducer;
  