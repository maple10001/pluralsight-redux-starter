import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuceess(course) {
  return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function loadCourses () {
  return (dispatch) => {
    return courseApi.getAllCourses().then(courses => {
        dispatch(loadCoursesSuceess(courses));
    }).catch( err => {
      throw(err);
    });
  }
}
