const PLUS_ONE = "PLUS_ONE";
const MINUS_ONE = "MINUS_ONE";
const PLUS_NUMBER = "PLUS_NUMBER";

export function plusOne() {
  return {
    type: PLUS_ONE,
  };
}
export function minusOne() {
  return {
    type: MINUS_ONE,
  };
}

export function plusNumber(payload) {
  return {
    type: PLUS_NUMBER,
    payload: payload,
  };
}

const initialState = {
  number: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_ONE:
      return {
        ...state,
        number: state.number + 1,
      };

    case MINUS_ONE:
      return {
        ...state,
        number: state.number - 1,
      };

    case PLUS_NUMBER:
      return {
        ...state,
        number: state.number + action.payload,
      };

    default:
      return state;
  }
};

export default counter;
