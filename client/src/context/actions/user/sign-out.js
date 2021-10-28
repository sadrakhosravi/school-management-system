// Constants
import { USER_ACTIONS } from '../../../utils/constants/ActionTypes';

const signOut = async dispatch => {
  dispatch({ type: USER_ACTIONS.SIGN_OUT });

  // Clear session storage
  window.localStorage.clear();
};

export default signOut;
