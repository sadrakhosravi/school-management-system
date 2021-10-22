import axios from 'axios';

// Constants
import { COURSES_ACTIONS } from '../../../utils/constants/ActionTypes';
import { API_COURSES_BASE_URL } from '../../../utils/constants/API';

/**
 * Fetches all courses from the API
 * @param dispatch - The state reducer dispatcher
 */
const getAllCourses = async dispatch => {
  dispatch({
    type: COURSES_ACTIONS.LOADING,
  });

  try {
    const response = await axios.get(API_COURSES_BASE_URL);
    const courses = response.data;
    dispatch({
      type: COURSES_ACTIONS.ALL,
      payload: courses,
    });
  } catch (error) {
    dispatch({
      type: COURSES_ACTIONS.FAILED,
    });
  }
};

export default getAllCourses;
