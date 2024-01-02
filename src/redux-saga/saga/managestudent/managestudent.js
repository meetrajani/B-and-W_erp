import { call, put } from "redux-saga/effects";
import { getStudent, postStudent,} from "../../student/api/api";
import {
  GET_STUDENT_ERROR,
  GET_STUDENT_SUCCESS,
  POST_STUDENT_ERROR,
  POST_STUDENT_SUCCESS,
} from "../../student/action/action";

// GET STUDENT

export function* manageStudent(action) {
  try {
    const res = yield call(getStudent, action);
    const data = res.data
    const status = res.status
    // console.log(res);
    if (status === 200) {
      yield put({ type: GET_STUDENT_SUCCESS, data });
    } else {
      yield put({ type: GET_STUDENT_ERROR, data });
    }
  } catch (e) {
    yield put({ type: GET_STUDENT_ERROR, e });
  }
}

// POST STUDENT

export function* manageStudentpost(action) {
  try {
    const res = yield call(postStudent, action);
    const data = res.data
    const status = res.status
    // console.log(res);
    if (status === 200 ||status === 201) {
      yield put({ type: POST_STUDENT_SUCCESS, data });
    } else {
      yield put({ type: POST_STUDENT_ERROR, data });
    }
  } catch (e) {
    yield put({ type: POST_STUDENT_ERROR, e });
  }
}