import {MEALS} from '../../data/dummy-data';
const initialState = {
  meals: MEALS,
  filtered: MEALS,
  favorites: [],
};

const mealsReducer = (state = initialState, action) => {
  return state;
};

export default mealsReducer;
