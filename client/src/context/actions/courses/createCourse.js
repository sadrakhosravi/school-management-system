import axios from 'axios';
import asyncHandler from '../../../utils/helpers/asyncHandler';

// Constants
import { API_COURSES_BASE_URL } from '../../../utils/constants/API';

/**
 * Send the create course data to the api and awaits the response.
 * @param userCredentials - Data object containing user's username and password.
 * @param newCourseData - Data object containing the new course information.
 * @returns True if successful, error object if failed
 */
const createCourse = asyncHandler(async (userCredentials, newCourseData) => {
  await axios.post(API_COURSES_BASE_URL, newCourseData, {
    auth: userCredentials,
  });
  return true;
});

export default createCourse;
