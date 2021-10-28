import axios from "axios";

export const loginUser = async (dispatch, payload) => {
  try {
    dispatch({ type: "REQUEST_LOGIN" });
    let response = await axios.post(
      "http://falcon-dev.ap-southeast-1.elasticbeanstalk.com/api/auth/auth",
      {
        user_name: payload.username,
        password: payload.password,
      },
      {
        "Content-Type": "application/json",
      }
    );
    let data = await response.data;
    if (data) {
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
      localStorage.setItem("mamaguruUser", JSON.stringify(data));
      return data;
    }
    dispatch({ type: "LOGIN_ERROR", payload: data.message });
    return;
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", payload: error });
  }
};

export const logout = (dispatch) => {
  dispatch({ type: "LOGOUT" });
  localStorage.removeItem("mamaguruUser");
};
