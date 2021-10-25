import { USER_ACTIONS } from '../../utils/constants/ActionTypes';
import { userInitialState } from '../initialStates';

const userReducer = (state, action) => {
  switch (action.type) {
    default:
      return { ...state };

    case USER_ACTIONS.LOADING:
      return { ...state, isLoading: true };

    case USER_ACTIONS.SIGN_IN_SUCCESS:
      // Destructure payload object on reducer call
      const { id, firstName, lastName, emailAddress, password } = action.payload;
      return {
        ...state,
        id,
        firstName,
        lastName,
        emailAddress,
        password,
      };

    case USER_ACTIONS.SIGN_OUT:
      return { ...userInitialState };
  }
};

export default userReducer;
