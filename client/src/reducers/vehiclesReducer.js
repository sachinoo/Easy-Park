import {
  VEHICLES_LIST_REQUEST,
  VEHICLES_LIST_SUCCESS,
  VEHICLES_LIST_FAIL,
} from "../constants/vehicleConstants";

export const vehiclesListReducer = (state = { vehicels: [] }, action) => {
  switch (action.type) {
    case VEHICLES_LIST_REQUEST:
      return { loading: true };
    case VEHICLES_LIST_SUCCESS:
      return { loading: false, vehicels: action.payload };
    case VEHICLES_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
