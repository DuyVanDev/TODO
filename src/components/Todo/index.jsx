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

  const handleCheckEmptyTodo = (idEdit) => {
    console.log(typeof editTodoC);
    if (editTodoC == "") {
      dispatch(removeTodo({ id: idEdit }));
      console.log("edit");
    }
  };

  const handleChange = async (e, idEdit) => {
    setEditTodoC(e.target.value);
    dispatch(editTodo({ idEdit: idEdit, todoName: e.target.value }));
  };

  return (
    <div
      onMouseEnter={() => setShowDeleteIcon(true)}
      onMouseLeave={() => setShowDeleteIcon(false)}
      key={todo.id}
      className="flex items-center  gap-8 w-full border-[1px] shadow-md rounded-sm p-2 bg-white px-5"
    >
      <Checkbox
        className={`basis-4 w-full h-full   ${isFocus && "invisible"}`}
        
        onChange={onChange}
        checked={todo.complete}
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsFocus(false);
          handleCheckEmptyTodo(todo.id)
        }}
        className="grow"
      >
        <Input
          readOnly={!isFocus}
          bordered={isFocus}
          onDoubleClick={() => setIsFocus(true)}
          onBlur={(e) => {
            setIsFocus(false);
            handleCheckEmptyTodo(todo.id);
          }}
          className={`  ${
            todo.complete && "line-through text-slate-300"
          }  text-xl font-normal outline-2 
           ${
            isFocus &&
            "focus:border-black focus:outline-none shadow-lg focus:shadow-inner no-underline text-gray-950"
          } `}
          value={editTodoC}
          onChange={(e) => {
            handleChange(e, todo.id);
          }}
        />
      </form>
      {showDeleteIcon && (
        <button
          className={`basis-1 text-red-600 font-bold ${isFocus && "hidden"}`}
          onClick={() => dispatch(removeTodo({ id: todo.id }))}
        >
          x
        </button>
      )}
    </div>
  );
};

export default Todo;
