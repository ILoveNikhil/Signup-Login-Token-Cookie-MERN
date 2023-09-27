import axios from "axios";
// import { server } from "../Store/Store";

export const SignupUser =
  (fullName, userName, phoneNumber, email, password) => async (dispatch) => {
    try {
      dispatch({
        type: "SignupRequest",
      });
      const { data } = await axios.post(
        `/api/v1/signup`,
        { fullName, userName, phoneNumber, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({
        type: "SignupSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "SignupFailure",
        payload: error.response.data.message,
      });
    }
  };

export const LoginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "LoginRequest",
    });
    const { data } = await axios.post(
      `/api/v1/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: "LoginSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoginFailure",
      payload: error.response.data.message,
    });
  }
};

// export const loadUser = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: "LoadUserRequest",
//     });
//     const { data } = await axios.get(`${server}/api/v1/me`);
//     dispatch({
//       type: "LoadUserSuccess",
//       payload: data.user,
//     });
//   } catch (error) {
//     dispatch({
//       type: "LoadUserFailure",
//       payload: error.response.data.message,
//     });
//   }
// };
