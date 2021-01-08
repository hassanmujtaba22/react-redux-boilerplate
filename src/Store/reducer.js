import { INCREAMENT, DECREAMENT, INCREAMENT_BY_VALUE } from "./action";

const initialState = {
  counter: 0
};
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREAMENT: {
      return { ...state, counter: state.counter + 1 };
    }
    case DECREAMENT: {
      return { ...state, counter: state.counter - 1 };
    }
    case INCREAMENT_BY_VALUE: {
      return { ...state, counter: state.counter + action.payload };
    }
    default:
      return state;
  }
};
