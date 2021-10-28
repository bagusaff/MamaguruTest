let user = localStorage.getItem("mamaguruUser")
  ? JSON.parse(localStorage.getItem("mamaguruUser")).user
  : "";

export const initialState = {
  userDetails: {} || user,
  loading: false,
  errorMessage: null,
  loggedIn: false,
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        userDetails: action.payload,
        errorMessage: null,
        loading: false,
        loggedIn: true,
      };
    case "LOGOUT":
      return initialState;
    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.payload,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
