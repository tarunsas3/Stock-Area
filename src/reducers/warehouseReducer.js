const initialState = {
  warehouseData: [],
};

const warehouseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_WAREHOUSE_DATA":
      return {
        ...state,
        warehouseData: action.payload,
      };
    default:
      return state;
  }
};

export default warehouseReducer;
