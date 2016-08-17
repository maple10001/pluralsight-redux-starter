import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuceess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function createCourseSuccess(courses) {
  return {type: types.CREATE_COURSES_SUCCESS, courses};
}

export function updateCourseSuccess(courses) {
  return {type: types.UPDATE_COURSES_SUCCESS, courses};
}

export function loadCourses () {
  return function (dispatch) {
    return courseApi.getAllCourses().then(courses => {
        dispatch(loadCoursesSuceess(courses));
    }).catch( error => {
      throw(error);
    });
  };
}

export function saveCourse(course) {
  return function (dispatch, getState) {
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(updateCourseSuccess(savedCourse)) :
      dispatch(createCourseSuccess(savedCourse));
    }).catch(error => {
      throw(error);
    });
  };
}
