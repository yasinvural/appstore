import { SET_USER, SET_ISLOADING } from "../const/index";

const initialState = {
  user: null,
  isLoading: true,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_ISLOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export { initialState, authReducer };
