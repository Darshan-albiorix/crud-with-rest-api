const intialState = {
  passengers: [],
  airline: [],
  user: {},
};

const getPassengerReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case "GET_PASSENGERS":
      return {
        ...state,
        passengers: payload,
      };
    case "GET_AIRLINE":
      console.log(payload);
      return { ...state, airline: payload };
    case "GET_SINGLE_USER":
      return { ...state, user: payload };
    case "DELETE_PASSENGER":
    case "ADD_PASSENGER":
    case "UPDATE_USER":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default getPassengerReducer;
