// Holds application state , allows state to be updated , implement listeners

import { createStore } from "redux";
import todoApp from "./reducers/todoReducer";

const store = createStore(todoApp);
