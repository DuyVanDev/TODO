import React, { useEffect, useState } from "react";
import { Checkbox, Input } from "antd";
import { useGlobalState } from "../../hooks";
import { editTodo, removeTodo } from "../../store";

const Todo = ({ todo, onChange }) => {
  const [globalState, dispatch] = useGlobalState();
  const { todolist } = globalState;
  const [editTodoC, setEditTodoC] = useState(todo.todoName);
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  const handleChange = (e) => {
    setEditTodoC(e.target.value);
  };

  return (
    <div
    onMouseEnter={() => setShowDeleteIcon(true)}
    onMouseLeave={() => setShowDeleteIcon(false)}
      key={todo.id}
      className="flex items-center  gap-8 w-full border-[1px] rounded-sm p-4"
    >
      <Checkbox 
        className="basis-4 rounded-full"
        onChange={onChange}
        checked={todo.complete}
      ></Checkbox>
      <div className="basis-[250px]">
        {todo.complete == true ? (
          <Input
            value={editTodoC}
            className="line-through"
            onChange={(e) => handleChange(e)}
          />
        ) : (
          <Input value={editTodoC} onChange={(e) => handleChange(e)} />
        )}
      </div>
      {showDeleteIcon && (
        <button className="basis-1" onClick={() => handleDelete(todo.id)}>
          X
        </button>
      )}
    </div>
  );
};

export default Todo;
