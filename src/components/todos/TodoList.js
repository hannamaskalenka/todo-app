import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return todos.length ? (
    <div className="todos-container">
      <h2>Todo: </h2>
      <ul>
        {todos.map((todo) => {
          return (
            <TodoItem
              title={todo.title}
              key={todo.id}
              id={todo.id}
              completed={todo.completed}
            />
          );
        })}
      </ul>
    </div>
  ) : (
    <p>There are no todos.</p>
  );
};

export default TodoList;
