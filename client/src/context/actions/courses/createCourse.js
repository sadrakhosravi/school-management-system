import axios from 'axios';

// Constants
import { API_COURSES_BASE_URL } from '../../../utils/constants/API';

/**
 * Send the create course data to the api and awaits the response.
 * @param newCourseData - Data object containing the new course information.
 * @returns True if successful, error object if failed
 */
const createCourse = async (user, newCourseData) => {
  try {
    await axios.post(API_COURSES_BASE_URL, newCourseData, {
      auth: user,
    });
    return true;
  } catch (error) {
    return error.response.data;
  }
};

export default createCourse;
