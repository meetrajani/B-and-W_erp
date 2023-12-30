import {
    DELETE_FACULTY_ERROR,
    DELETE_FACULTY_PROGESS,
    DELETE_FACULTY_SUCCESS,
    GET_FACULTY_ERROR,
    GET_FACULTY_PROGESS,
    GET_FACULTY_SUCCESS,
    POST_FACULTY_ERROR,
    POST_FACULTY_PROGESS,
    POST_FACULTY_SUCCESS,
  } from "../action/action";
  
  const initlSatus = {
  
    // GET FACULTY
  
    Faculty: [],
    getfacultyprogress: false,
    getfacultyerror: null,
  
    // POST FACULTY
  
    postfacultyprogress: false,
    postfacultyerror: null,
  
    // DELETE FACULTY
  
    deletefacultyprogress: false,
    deletefacultyerror: null,
  
    dataIsLoded: true,
  };
  
  const facultyReducer = (state = initlSatus, action) => {
    switch (action.type) {
  
      // GET FACULTY
  
      case GET_FACULTY_PROGESS: {
        return {
          ...state,
          getfacultyprogress: true,
        };
      }
      case GET_FACULTY_SUCCESS: {
        return {
          ...state,
          dataIsLoded: true,
          Faculty: action.data,
        };
      }
      case GET_FACULTY_ERROR: {
        return {
          ...state,
          getfacultyerror: action.data,
        };
      }
  
      // POST FACULTY
  
      case POST_FACULTY_PROGESS: {
        return {
          ...state,
          postfacultyprogress: true,
        };
      }
      case POST_FACULTY_SUCCESS: {
        return {
          ...state,
          dataIsLoded: true,
          Faculty: state.Faculty.concat(action.data),
        };
      }
      case POST_FACULTY_ERROR: {
        return {
          ...state,
          postfacultyerror: action.data,
        };
      }
  
      // DELETE FACULTY
  
      case DELETE_FACULTY_PROGESS: {
        return {
          ...state,
          deletefacultyprogress: true,
        };
      }
      case DELETE_FACULTY_SUCCESS: {
        return {
          ...state,
          Faculty: state.Faculty.filter((e)=>e.id !== action.data),
          dataIsLoded: true,
        };
      }
      case DELETE_FACULTY_ERROR: {
        return {
          ...state,
          deletefacultyerror: action.data,
        };
      }
  
      default: {
        return {
          ...state,
        };
      }
    }
  };
  export default facultyReducer;
  