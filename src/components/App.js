import React from "react";
import TodoList from "./todos/TodoList";
import Header from "./shared/Header";
import API from "./../api";

function App() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    const loadData = async () =>
      await API.get("/todos?_page=1&_limit=15")
        .then((response) => response.data)
        .then((data) => setTodos(data))
        .catch((error) => console.log(error));
    loadData();
  }, []);

  return (
    <>
      <Header />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
