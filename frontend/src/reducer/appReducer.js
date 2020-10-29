import { SET_APPLICATIONS, SET_SEARCH } from "../const/index";

const initialState = {
  applications: [],
  search: "",
};

const appReducer = (state, action) => {
  switch (action.type) {
    case SET_APPLICATIONS:
      return {
        ...state,
        applications: action.payload,
      };
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

export { initialState, appReducer };
