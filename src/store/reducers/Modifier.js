import { INCREMENT, DECREMENT } from "../actions/actionTypes";

const modifierReducer = (state = { counter: 0 }, action) => {
  let newState = { ...state };
  switch (action.type) {
    case INCREMENT:
      newState = {
        ...state,
        counter: state.counter + 1
      };
      break;
    case DECREMENT:
      const { counter } = state;
      if (counter > 0) {
        newState = {
          ...state,
          counter: state.counter - 1
        };
      } else {
        newState = {
          ...state
        };
      }
      break;
  }
  return newState;
};

export default modifierReducer;
