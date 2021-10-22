import { COURSES_ACTIONS } from '../../utils/constants/ActionTypes';

const courses = (state, action) => {
  switch (action.type) {
    default:
      return { ...state };

    case COURSES_ACTIONS.LOADING:
      return { ...state, isLoading: true };

    case COURSES_ACTIONS.SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
  }
};

export default courses;
