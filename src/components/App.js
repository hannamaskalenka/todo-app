import React from "react";
import TodoList from "./todos/TodoList";
import Header from "./shared/Header";
import { todosURL } from "./../constants";

function App() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    fetch(todosURL)
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
