export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_VISBILITY_FILTER = "SET_VISBILITY_FILTER";

export const VisbilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMLETED: "SHOW_COMLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};

let nextTodoId = 0;

export function addtodo(text) {
  return { type: ADD_TODO, text, id: nextTodoId++ };
}

export function toggleTodo(id) {
  return { type: "TOGGLE_TODO", id };
}

export function setVisbilityFilter(filter) {
  return { type: SET_VISBILITY_FILTER, filter };
}

// ACTIONS ARE FUNTIONS THAT TAKE IN DATA AND SEND THAT TO THE STOR
