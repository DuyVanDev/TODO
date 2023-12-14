import React, { useEffect, useState } from "react";
import { Checkbox, Input, Radio } from "antd";
import { useGlobalState } from "../../hooks";
import { editTodo, removeTodo } from "../../store";

const Todo = ({ todo, onChange }) => {
  const [globalState, dispatch] = useGlobalState();
  const { todolist } = globalState;
  const [editTodoC, setEditTodoC] = useState(todo.todoName);
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  const handleChange = async (e, idEdit) => {
    setEditTodoC(e.target.value);
    dispatch(editTodo({ idEdit: idEdit, todoName: e.target.value }));
    if(e.target.value == "" && isFocus == false) {
      dispatch(removeTodo({id : idEdit}))
    }
  };

  return (
    <div
      onMouseEnter={() => setShowDeleteIcon(true)}
      onMouseLeave={() => setShowDeleteIcon(false)}
      
      key={todo.id}
      className="flex items-center  gap-8 w-full border-[1px] rounded-sm p-4 bg-white"
    >
      {/* {isFocus == false && } */}
      <Checkbox
        className={`basis-4 ${isFocus && "invisible"}`}
        
        onChange={onChange}
        checked={todo.complete}
      ></Checkbox>
      <div className="basis-[200px]">
        <Input

          bordered={isFocus}
          onDoubleClick={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          className={`${todo.complete && "line-through"} text-xl font-normal`}
          value={editTodoC}
          onChange={(e) => {
            handleChange(e, todo.id);
          }}
        />
      </div>
      {showDeleteIcon && (
        <button className="basis-1" onClick={() => dispatch(removeTodo({id : todo.id}))}>
          X
        </button>
      )}
    </div>
  );
};

export default Todo;
