import axios from 'axios';
import asyncHandler from '../../../utils/helpers/asyncHandler';

// Constants
import { API_COURSES_BASE_URL } from '../../../utils/constants/API';

/**
 * Sends updated course content to the API.
 * @param courseId - The id of the course to be updated.
 * @returns True if successful, error object if failed
 */
const updateCourse = asyncHandler(async (user, courseId, data) => {
  await axios.put(`${API_COURSES_BASE_URL}/${courseId}`, data, {
    auth: user,
  });
  return true;
});

export default updateCourse;
