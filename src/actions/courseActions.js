import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusAction';

export function loadCoursesSuceess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSES_SUCCESS, course};
}

export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSES_SUCCESS, course};
}

export function loadCourses () {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses => {
        dispatch(loadCoursesSuceess(courses));
    }).catch( error => {
      throw(error);
    });
  };
}

export function saveCourse(course) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(updateCourseSuccess(savedCourse)) :
      dispatch(createCourseSuccess(savedCourse));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
