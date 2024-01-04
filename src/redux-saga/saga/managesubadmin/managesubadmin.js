import { DELETE_SUBADMIN_ERROR, DELETE_SUBADMIN_SUCCESS, GET_SUBADMIN_ERROR, GET_SUBADMIN_SUCCESS, POST_SUBADMIN_ERROR, POST_SUBADMIN_SUCCESS } from "../../subadmin/action/action";
import { deleteSubadmin, getSubadmin, postSubadmin } from "../../subadmin/api/api";
import { call, put } from "redux-saga/effects";

// GET SUBADMIN

export function* manageSubadmin(action) {
    try {
      const res = yield call(getSubadmin, action);
      const data = res.data
      const status = res.status
      // console.log(res);
      if (status === 200 || status === 201) {
        yield put({ type: GET_SUBADMIN_SUCCESS, data });
      } else {
        yield put({ type: GET_SUBADMIN_ERROR, data });
      }
    } catch (e) {
      yield put({ type: GET_SUBADMIN_ERROR, e });
    }
}

// POST SUBADMIN

export function* manageSubadminpost(action) {
    try {
      const res = yield call(postSubadmin, action);
      const data = res.data
      const status = res.status
    //   console.log(res);
      if (status === 200 || status === 201) {
        yield put({ type: POST_SUBADMIN_SUCCESS, data });
      } else {
        yield put({ type: POST_SUBADMIN_ERROR, data });
      }
    } catch (e) {
      yield put({ type: POST_SUBADMIN_ERROR, e });
    }
}

// DELETE SUBADMIN

export function* manageSubadmindelete(action) {
    try {
      const res = yield call(deleteSubadmin, action);
      const data = res.data
      const status = res.status
    //   console.log(res);
      if (status === 200 || status === 201) {
        yield put({ type: DELETE_SUBADMIN_SUCCESS, data });
      } else {
        yield put({ type: DELETE_SUBADMIN_ERROR, data });
      }
    } catch (e) {
      yield put({ type: DELETE_SUBADMIN_ERROR, e });
    }
}