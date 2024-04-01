const initialState = 0;
const INCREMENT = "count/INCREMENT";
const DECREMENT = "count/DECREMENT";
export const countMinus = () => {
  return { type: INCREMENT };
};
export const countPlus = () => ({ type: DECREMENT });

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "count/INCREMENT":
      return ++state;
    case "count/DECREMENT":
      return --state;
    default:
      return state;
  }
};
