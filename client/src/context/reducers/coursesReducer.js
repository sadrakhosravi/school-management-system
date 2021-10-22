import { COURSES_ACTIONS } from '../../utils/constants/ActionTypes';

const courses = (state, action) => {
  switch (action.type) {
    default:
      return { ...state };

    case COURSES_ACTIONS.LOADING:
      return { ...state, isLoading: true };

    case COURSES_ACTIONS.ALL:
      return { ...state, isLoading: false, allCourses: action.payload };

    case COURSES_ACTIONS.BY_ID:
      return { ...state, isLoading: false, byId: action.payload };
  }
};

export default courses;
