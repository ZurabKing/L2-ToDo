import React, { useState } from "react";
import { Input } from "../../ui-kit/Input/Input.jsx";
import { IconDelete, IconFix, IconFinish } from "../../assets/icons/index.js";

export const Todo = ({ removeTask, toggleTaskCompletion, item }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(item.text);
  const [editedDescription, setEditedDescription] = useState(
    item.description || ""
  );

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Обновите задачу отредактированным текстом и описанием
    // Можете добавить здесь валидацию перед обновлением
    // В этом примере задача обновляется немедленно без какой-либо валидации.

    // Здесь вы можете вызвать функцию updateTask или что-то подобное из родительского компонента
    // для обновления задачи в вашем хранилище данных.
    // Пример: updateTask(item.id, editedText, editedDescription);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    // Если вы хотите отменить редактирование, вы можете сбросить отредактированный текст и описание
    setEditedText(item.text);
    setEditedDescription(item.description || "");
    setIsEditing(false);
  };

  return (
    <li className={`task__item ${item.completed ? "completed" : ""}`}>
      <label>
        {isEditing ? (
          <div className="edit__container">
            <Input
              title={"Задача:"}
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
            {/* <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            /> */}
            <textarea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
          </div>
        ) : (
          <div className="main__content-task">
            <div className="main__content_task-info">
              <h4>Задача: </h4>
              <p className="main__task-text">{item.text}</p>
              {item.description && (
                <>
                  <h5 className="description__title">Описание: </h5>
                  <span className="main__task-description">
                    {item.description}
                  </span>
                </>
              )}
            </div>
            <div>
              <h4>Дедлайн: </h4>
              <p className="main__task-date">{item.date}</p>
            </div>
          </div>
        )}
      </label>
      <div className="main__info-btn">
        {isEditing ? (
          <>
            <button onClick={handleSaveClick} className="save__task-btn">
              Сохранить
            </button>
            <button onClick={handleCancelClick} className="cancel__task-btn">
              Отмена
            </button>
          </>
        ) : (
          <>
            <button
              className="delete__task-btn"
              onClick={() => toggleTaskCompletion(item.id)}
            >
              <IconFinish />
            </button>
            <button className="delete__task-btn" onClick={handleEditClick}>
              <IconFix />
            </button>
            <button
              onClick={() => removeTask(item.id)}
              className="delete__task-btn"
            >
              <IconDelete />
            </button>
          </>
        )}
      </div>
    </li>
  );
};
