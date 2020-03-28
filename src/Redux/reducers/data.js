const initialState = {
  data: []
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DBDATA_LOADED':
      return {
        ...state,
        dbData: action.payload
      };
    default:
      return state;
  }
};

export default dataReducer;
