import { UPDATE_SELECTED_SERVER, DBDATA_LOADED } from '../actions/action-types';

const initialState = {
  data: [],
  selectedServer: 0
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case DBDATA_LOADED:
      return {
        ...state,
        data: action.payload
      };
    case UPDATE_SELECTED_SERVER:
      return {
        ...state,
        selectedServer: action.payload
      };
    default:
      return state;
  }
};

export default dataReducer;
