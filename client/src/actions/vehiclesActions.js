import {
  VEHICLES_LIST_REQUEST,
  VEHICLES_LIST_SUCCESS,
  VEHICLES_LIST_FAIL,
} from "../constants/vehicleConstants";
import axios from "axios";

export const listVehicles = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: VEHICLES_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/notes`, config);

    dispatch({
      type: VEHICLES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: VEHICLES_LIST_FAIL,
      payload: message,
    });
  }
};
