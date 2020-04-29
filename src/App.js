import React from "react";
import Footer from "./components/Footer";
import VisbilityTodoList from "./components/VisbilityTodoList";
import AddTodo from "./components/AddTodo";

const App = () => {
  return (
    <div>
      <AddTodo />
      <VisbilityTodoList />
      <Footer />
    </div>
  );
};

export default App;
