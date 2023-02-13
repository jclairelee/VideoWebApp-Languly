import { authActions } from "../actions/authActions";

const initState = {
  userInfo: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case authActions.SET_USER_INFO:
      return {
        ...state,
        userInfo: action.userInfo,
      };
    default:
      return state;
  }
};

export default reducer;
