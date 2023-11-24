import React from "react";
import { Todo } from "../Todo/Todo.jsx";

export const TodoList = ({ allTasks, removeTask, toggleTaskCompletion }) => {
  return (
    <div className="list__container">
      <ul className="task__list">
        {allTasks.map((item) => (
          <Todo
            key={item.id}
            removeTask={removeTask}
            toggleTaskCompletion={toggleTaskCompletion}
            item={item}
          />
        ))}
      </ul>
    </div>
  );
};
