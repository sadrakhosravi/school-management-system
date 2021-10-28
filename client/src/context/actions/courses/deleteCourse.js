import axios from 'axios';
import asyncHandler from '../../../utils/helpers/asyncHandler';

// Constants
import { API_COURSES_BASE_URL } from '../../../utils/constants/API';

/**
 * Sends a delete request to the API to delete a course based on its id.
 * @param courseId - The id of the course to be deleted.
 * @returns True if successful, error object if failed
 */
const deleteCourse = asyncHandler(async (courseId, userCredentials) => {
  await axios.delete(`${API_COURSES_BASE_URL}/${courseId}`, {
    auth: userCredentials,
  });
  return true;
});

export default deleteCourse;
