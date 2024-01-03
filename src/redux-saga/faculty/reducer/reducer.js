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
    UPDATE_FACULTY_ERROR,
    UPDATE_FACULTY_PROGESS,
    UPDATE_FACULTY_SUCCESS,
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

    // UPDATE FACULTY
  
    updatefacultyprogress: false,
    updatefacultyerror: null,
  
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
          Faculty: state.Faculty.concat(action.data.faculty),
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
          Faculty: state.Faculty.filter((e)=>e._id !== action.data),
          dataIsLoded: false,
        };
      }
      case DELETE_FACULTY_ERROR: {
        return {
          ...state,
          deletefacultyerror: action.data,
        };
      }

      // UPDATE FACULTY
  
      case UPDATE_FACULTY_PROGESS: {
        return {
          ...state,
          updatefacultyprogress: true,
        };
      }
      case UPDATE_FACULTY_SUCCESS: {
        return {
          dataIsLoded: false,
          ...state,
          Faculty: state.Faculty.map((i)=>{
            if(i._id === action.data._id){
                return {...i,...action.data}
            }else{
                return i
            }
        }),
        };
      }
      case UPDATE_FACULTY_ERROR: {
        return {
          ...state,
          updatefacultyerror: action.data,
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
  