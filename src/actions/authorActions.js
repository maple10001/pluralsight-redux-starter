import * as types from './actionTypes';
import AuthorApi from '../api/mockCourseApi';

export function loadAuthorsSuceess(courses) {
  return {type: types.LOAD_AUTHORS_SUCCESS, courses};
}

export function loadAuthors () {
  return dispatch => {
    return AuthorApi.getAllAuthors().then(authors => {
        dispatch(loadAuthorsSuceess(authors));
    }).catch( error => {
      throw(error);
    });
  };
}
