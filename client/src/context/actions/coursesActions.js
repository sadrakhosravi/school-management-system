import axios from 'axios';

// Constants
import { COURSES_ACTIONS } from '../../utils/constants/ActionTypes';
import { API_COURSES_BASE_URL } from '../../utils/constants/API';

export const getAllCourses = async dispatch => {
  dispatch({
    type: COURSES_ACTIONS.LOADING,
  });

  try {
    const response = await axios.get(API_COURSES_BASE_URL);
    const courses = response.data;
    dispatch({
      type: COURSES_ACTIONS.SUCCESS,
      payload: courses,
    });
  } catch (error) {
    console.log(error);
  }
};

//   let url = 'http://localhost:5000/api/courses';
//   const response = await axios.get(url);
//   const data = await response.data;
