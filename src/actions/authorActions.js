import * as types from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';

export function loadAuthorsSuceess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
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
