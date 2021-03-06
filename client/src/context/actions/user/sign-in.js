import axios from 'axios';
import asyncHandler from '../../../utils/helpers/asyncHandler';

// Constants
import { USER_ACTIONS } from '../../../utils/constants/ActionTypes';
import { API_USER_BASE_URL } from '../../../utils/constants/API';

/**
 * Sends the user's credentials to the api for signin and awaits the response.
 * @param dispatch - The state reducer dispatcher
 * @param userCredentials - Data object containing user's username and password
 * @returns True if successful, error object if failed
 */
const signIn = asyncHandler(async (dispatch, userCredentials) => {
  dispatch({ type: USER_ACTIONS.LOADING });
  const response = await axios.get(API_USER_BASE_URL, {
    // Axios basic auth sets the header automatically
    auth: userCredentials,
  });

  // Add user's password to the response
  response.data.password = userCredentials.password;

  // If successful, store the response data.
  dispatch({
    type: USER_ACTIONS.SIGN_IN_SUCCESS,
    payload: response.data,
  });

  // Add user credentials to the session storage
  window.localStorage.setItem('username', userCredentials.username);
  window.localStorage.setItem('password', userCredentials.password);

  return true;
});

export default signIn;
