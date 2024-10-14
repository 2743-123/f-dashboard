import axios from "axios";
import ENVIRONMENT_VARIABLES from "../environment.config";
import { setAccessToken } from "../Utils";
import { ERROR, INPROGRESS, IS_AUTHENTICATED } from "../Constant";

export const login = () => {
  try {
    return (dispatch) => {
      dispatch({ type: INPROGRESS });
      axios
        .post(ENVIRONMENT_VARIABLES + "")
        .then((response) => {
          if (response.status === 200) {
            setAccessToken(response.data.accessToken);
            dispatch({
              type: IS_AUTHENTICATED,
              data: { accessToken: response.data.accessToken },
            });
          }
        })
        .catch((error) => {
          if (error && error.response) {
            dispatch({
              type: ERROR,
              data: { error_msg: error.response.data.message },
            });
          } else {
            dispatch({
              type: error,
              data: { error_msg: error.message.toString() },
            });
          }
        });
    };
  } catch (error) {
    alert(error.message.toString);
  }
};
