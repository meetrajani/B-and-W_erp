import {DELETE_SUBADMIN_ERROR, DELETE_SUBADMIN_PROGESS, DELETE_SUBADMIN_SUCCESS, GET_SUBADMIN_ERROR, GET_SUBADMIN_PROGESS, GET_SUBADMIN_SUCCESS, POST_SUBADMIN_ERROR, POST_SUBADMIN_PROGESS, POST_SUBADMIN_SUCCESS} from "../action/action";

  
  const initlSatus = {
  
    // GET STUDENT
  
    subadmin: [],
    getsubadminprogress: false,
    getsubadminerror: null,

    // POST SUBADMIN

    postsubadminprogress: false,
    postsubadminerror: null,

    // DELETE SUBADMIN

    deletesubadminprogress: false,
    deletesubadminerror: null,

    dataIsLodad : true,
  };
  
  const SubadminReducer = (state = initlSatus, action) => {
    switch (action.type) {
  
      // GET STUDENT
  
      case GET_SUBADMIN_PROGESS: {
        return {
          ...state,
          getsubadminprogress: true,
        };
      }
      case GET_SUBADMIN_SUCCESS: {
        return {
          ...state,
          dataIsLoded: false,
          subadmin: action.data,
        };
      }
      case GET_SUBADMIN_ERROR: {
        return {
          ...state,
          getsubadminerror: action.data,
        };
      }

    //   POST SUBADMIN
  
    case POST_SUBADMIN_PROGESS: {
        return {
          ...state,
          postsubadminprogress: true,
        };
      }
      case POST_SUBADMIN_SUCCESS: {
        return {
          ...state,
          dataIsLoded: false,
          subadmin: state.subadmin.concat(action.data),
        };
      }
      case POST_SUBADMIN_ERROR: {
        return {
          ...state,
          postsubadminerror: action.data,
        };
      }

    //   DELETE SUBADMIN

    case DELETE_SUBADMIN_PROGESS: {
        return {
          ...state,
          deletesubadminprogress: true,
        };
      }
    case DELETE_SUBADMIN_SUCCESS: {
      return {
        ...state,
        dataIsLoded: false,
        subadmin: state.subadmin.filter((e)=>e._id!==action.data),
      };
    }
    case DELETE_SUBADMIN_ERROR: {
      return {
        ...state,
        deletesubadminerror: action.data,
      };
    }
  
      default: {
        return {
          ...state,
        };
      }
    }
  };
  export default SubadminReducer;
  