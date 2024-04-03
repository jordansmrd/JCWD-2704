/** @format */

const initialValue = {
  value: 100,
};

export const types = {
  increment: "INCREMENT",
  decrement: "DECREMENT",
};

export function counterReducer(state = initialValue, action) {
  switch (action.type) {
    case types.increment:
      return { value: state.value + 1 };
    case types.decrement:
      return { value: state.value - 1 };
    default:
      return state;
  }
}
