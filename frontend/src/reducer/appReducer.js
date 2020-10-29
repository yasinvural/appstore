import {
  SET_APPLICATIONS,
  SET_SEARCH,
  SET_APP_ISLOADING,
} from "../const/index";

const initialState = {
  applications: [],
  isLoading: false,
  search: "",
};

const appReducer = (state, action) => {
  switch (action.type) {
    case SET_APPLICATIONS:
      return {
        ...state,
        applications: action.payload,
      };
    case SET_APP_ISLOADING:
      return {
        ...state,
        isLoading: action.payload,
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
