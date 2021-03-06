// REDUCERS ARE THE PLACE WHERE THE STATE CHANGES DUE TO ACTIONS SENT TO THE STORE,
// ITS A PURE FUNCTION THAT TAKES IN THE PERVIOS. A REDUCER should do just calculation no API Calls or side mutation to the data
import { combineReducers } from "redux";
import {
  ADD_TODO,
  SET_VISBILITY_FILTER,
  TOGGLE_TODO,
  VisbilityFilters,
} from "../actions/todoAction";

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];

    case TOGGLE_TODO:
      return state.map((todo) => {
        return todo.id === action.id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo;
      });

    default:
      return state;
  }
}

function visibilityFiliter(state = VisbilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFiliter,
  todos,
});

export default todoApp;
