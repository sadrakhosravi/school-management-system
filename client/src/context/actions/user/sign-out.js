// Constants
import { USER_ACTIONS } from '../../../utils/constants/ActionTypes';

const signOut = async dispatch => {
  dispatch({ type: USER_ACTIONS.SIGN_OUT });
};

export default signOut;
