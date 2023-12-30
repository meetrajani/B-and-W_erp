import { call, put } from "redux-saga/effects";
import { deleteFaculty, getFaculty, getStudent, postFaculty } from "../../admin/api/api";
import {
  DELETE_FACULTY_ERROR,
  DELETE_FACULTY_SUCCESS,
  GET_FACULTY_ERROR,
  GET_FACULTY_SUCCESS,
  GET_STUDENT_ERROR,
  GET_STUDENT_SUCCESS,
  POST_FACULTY_ERROR,
  POST_FACULTY_SUCCESS,
} from "../../admin/action/action";

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

// GET FACULLTY

export function* manageFaculty(action) {
  try {
    const res = yield call(getFaculty, action);
    const data = res.data
    const status = res.status
    // console.log(data);
    if (status === 200) {
      yield put({ type: GET_FACULTY_SUCCESS, data });
    } else {
      yield put({ type: GET_FACULTY_ERROR, data });
    }
  } catch (e) {
    yield put({ type: GET_FACULTY_ERROR, e });
  }
}

// POST

export function* manageFacultyPost(action) {
  try {
    const res = yield call(postFaculty, action);
    const data = res.data
    const status = res.status
    // console.log(data);
    if (status === 201) {
      yield put({ type: POST_FACULTY_SUCCESS, data });
    } else {
      yield put({ type: POST_FACULTY_ERROR, data });
    }
  } catch (e) {
    yield put({ type: POST_FACULTY_ERROR, e });
  }
}

// DELETE

export function* manageFacultyDelete(action) {
  try {
    const res = yield call(deleteFaculty, action);
    const data = res.data
    const status = res.status
    // console.log(data);
    if (status === 200) {
      yield put({ type: DELETE_FACULTY_SUCCESS, data });
    } else {
      yield put({ type: DELETE_FACULTY_ERROR, data });
    }
  } catch (e) {
    yield put({ type: DELETE_FACULTY_ERROR, e });
  }
}