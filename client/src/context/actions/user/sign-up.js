import axios from 'axios';
import asyncHandler from '../../../utils/helpers/asyncHandler';

// Constants
import { USER_ACTIONS } from '../../../utils/constants/ActionTypes';
import { API_USER_BASE_URL } from '../../../utils/constants/API';

/**
 * Sends the user's credentials to the api for signup and awaits the response.
 * @param dispatch - The state reducer dispatcher
 * @param data - Data object containing user's username and password
 * @returns True if successful, error object if failed
 */
const signUp = asyncHandler(async (dispatch, data) => {
  dispatch({ type: USER_ACTIONS.LOADING });
  const response = await axios.post(API_USER_BASE_URL, data);

  // If successful, store the response data.
  dispatch({
    type: USER_ACTIONS.SIGN_UP_SUCCESS,
    payload: response.data,
  });

  return true;
});

export default signUp;
