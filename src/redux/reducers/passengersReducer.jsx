
const intialState = {
  passengers: [],
};

const getPassengerReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case 'GET_PASSENGERS':
      return {
        ...state,
        passengers: payload,
      };

    default:
      return state;
  }
};

export default getPassengerReducer;
