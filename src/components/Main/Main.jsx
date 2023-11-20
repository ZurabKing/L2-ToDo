import React from "react";
import { LOCAL_STORAGE_TASKS_KEY, initialTask } from "../../constants/todo.js";
import { generateTask, getDefaultTasks } from "../../utils/todo.js";
import { useDidUpdate } from "../../hooks/useDidUpdate.js";
import { TodoList } from "../TodoList/TodoList.jsx";
import { Input } from "../../ui-kit/Input/Input.jsx";
import "./Main.css";

export const Main = () => {
  const [task, setTask] = React.useState(initialTask);

  const [allTasks, setAllTasks] = React.useState(getDefaultTasks);

  useDidUpdate(() => {
    localStorage.setItem(LOCAL_STORAGE_TASKS_KEY, JSON.stringify(allTasks));
  }, [allTasks]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleAddTask = () => {
    if (!task.text.trim()) {
      return;
    }

    const newTask = generateTask(task, allTasks);

    setAllTasks((prevTasks) => [...prevTasks, newTask]);
    setTask(initialTask);
  };

  const toggleTaskCompletion = (taskId) => {
    setAllTasks((prevTasks) => {
      return prevTasks.map((item) => {
        if (item.id !== taskId) {
          return item;
        }

        return { ...item, completed: !item.completed };
      });
    });
  };

  const removeTask = (taskId) => {
    setAllTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <main>
      <div className="main__container">
        <div className="input__container">
          <Input
            placeholder="Введите текст"
            title="Задача:"
            className="input__title"
            type="text"
            name="text"
            value={task.text}
            onChange={handleInputChange}
          />

          <div className="date__text-block">
            <Input
              placeholder="Введите текст"
              title="Срок выполнения:"
              className="input__date"
              type="datetime-local"
              name="date"
              value={task.date}
              onChange={handleInputChange}
            />
          </div>
          <div className="date__text-block">
            <label>
              Описание задачи:
              <textarea
                placeholder="Введите текст"
                className="textarea__des"
                name="description"
                value={task.description}
                onChange={handleInputChange}
              />
            </label>
          </div>

          <button onClick={handleAddTask}>Добавить</button>
        </div>

        <TodoList
          allTasks={allTasks}
          removeTask={removeTask}
          setAllTasks={setAllTasks}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      </div>
    </main>
  );
};
