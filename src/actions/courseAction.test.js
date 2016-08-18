import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

describe('Course Actions', () => {
  describe('createCourseSuccess', () => {
    it('shoud create a CREATE_COURSES_SUCCESS action', () => {
      const course = {id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: types.CREATE_COURSES_SUCCESS,
        course: course
      };

      const action = courseActions.createCourseSuccess(course);

      expect(action).toEqual(expectedAction);

    });
  });
});