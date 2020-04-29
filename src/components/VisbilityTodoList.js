import { connect } from "react-redux";
import { toggleTodo } from "../redux/actions/todoAction";
import TodoList from "./TodoList";
import { VisbilityFilters } from "../redux/actions/todoAction";

const getVisibilty = (todos, filter) => {
  switch (filter) {
    case VisbilityFilters.SHOW_ALL:
      return todos;
    case VisbilityFilters.SHOW_COMLETED:
      return todos.filter((t) => t.completed);
    case VisbilityFilters.SHOW_ACTIVE:
      return todos.filter((t) => !t.completed);
    default:
      throw new Error("Unkown filter: " + filter);
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibilty(state.todos, state.visibilityFiliter),
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
