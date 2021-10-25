import axios from 'axios';

// Constants
import { USER_ACTIONS } from '../../../utils/constants/ActionTypes';
import { API_USER_BASE_URL } from '../../../utils/constants/API';

/**
 * Sends the user's credentials to the api for signin and awaits the response.
 * @param dispatch - The state reducer dispatcher
 * @param data - Data object containing user's username and password
 * @returns True if successful, error object if failed
 */
const signIn = async (dispatch, data) => {
  dispatch({ type: USER_ACTIONS.LOADING });

  try {
    const response = await axios.get(API_USER_BASE_URL, {
      // Axios basic auth sets the header automatically
      auth: {
        username: data.username,
        password: data.password,
      },
    });

    // Add user's password to the response
    response.data.password = data.password;

    // If successful, store the response data.
    dispatch({
      type: USER_ACTIONS.SIGN_IN_SUCCESS,
      payload: response.data,
    });
    return true;
  } catch (error) {
    return error.response.data;
  }
};

export default signIn;
