import * as actionTypes from "./actions";

const initialState: InitialState = {
  users: {
    loading: false,
    data: [],
    error: null,
  },
};

const AuthReducer = (
  state: InitialState = initialState,
  action: any
): InitialState => {
  switch (action.type) {
    case actionTypes.GET_USERS:
      return {
        ...state,
        users: {
          data: action.data,
          loading: true,
        },
      };

    case actionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        users: {
          data: action.data,
          loading: false,
        },
      };

    case actionTypes.GET_USERS_FAILED:
      return {
        ...state,
        users: {
          error: action.error,
          loading: false,
        },
      };
  }
  return state;
};

export default AuthReducer;