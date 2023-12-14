import React, { useEffect, useRef, useState } from "react";
import Todo from "../components/Todo";
import { useGlobalState } from "../hooks";
import {
  addTodo,
  cancelAllTodo,
  checkAllTodo,
  clearComplete,
  filterTodo,
  toggleTodo,
} from "../store";
import { v4 as uuidv4 } from "uuid";
import { Input } from "antd";
import { Button } from "antd";
import { Radio } from "antd";
import { DownOutlined } from "@ant-design/icons";

const Todolist = () => {
  const [globalState, dispatch] = useGlobalState();
  const [isCheckCompete, setIsCheckCompete] = useState(false);
  const { todolist } = globalState;
  const [value, setValue] = useState(1);
  const ref = useRef();
  const [todo, setTodo] = useState({
    id: "",
    todoName: "",
    complete: false,
  });
  let itemLeft = 0;
  for (var todoItem of JSON.parse(localStorage.getItem("todolist")) || []) {
    if (todoItem.complete == false) {
      itemLeft += 1;
    }
  }

  const handleCheckComplete = () => {
    var result = todolist.every((item) => item.complete == true);
    if (result) return true;
    return false;
  };

  var resultHandleCheck = handleCheckComplete();
  const onChange = (e) => {
    setValue(e.target.value);
    dispatch(filterTodo(e.target.value));
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    if(todo.todoName == "") {
      return
    }
    todolist.push(todo);
    localStorage.setItem("todolist", JSON.stringify(todolist));
    dispatch(addTodo(todolist));
    setTodo({
      todoName: "",
      complete: false,
    });
    ref.current.focus();
  };

  const handleChange = (id, checked) => {
    dispatch(toggleTodo({ id: id, checked: !checked }));
  };

  return (
    <div className="grid grid-rows-1 grid-flow-col">
      <div className="col-span-3 flex items-start justify-start flex-col py-4 px-3  max-[800px]:hidden">
        <p>React</p>
      </div>
      <div className="w-full h-screen flex items-center flex-col bg-[#f5f5f5] col-span-9">
      <h1 className="text-center my-3 text-7xl text-rose-500 opacity-20">
        todos
      </h1>
      <div className="flex items-center justify-center">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center border-[1px] shadow-md w-[400px] bg-[#fefefe] ">
            {JSON.parse(localStorage.getItem("todolist"))?.length > 0 && (
              <div>
                {resultHandleCheck ? (
                  <DownOutlined
                    className="px-2"
                    onClick={() => dispatch(cancelAllTodo())}
                  />
                ) : (
                  <DownOutlined
                    className="px-2 opacity-40"
                    onClick={() => dispatch(checkAllTodo())}
                  />
                )}
              </div>
            )}
            <Input
              bordered={false}
              ref={ref}
              value={todo.todoName}
              onChange={(e) =>
                setTodo({ ...todo, todoName: e.target.value, id: uuidv4() })
              }
              placeholder="What needs to be done?"
              className="bg-[#fefefe] py-3 text-xl font-normal placeholder:italic placeholder:font-medium "
            />
          </div>
        </form>
      </div>
      <div className="flex items-center justify-center flex-col w-[400px]">
        {todolist.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onChange={() => handleChange(item.id, item.complete)}
          />
        ))}
      </div>

      {JSON.parse(localStorage.getItem("todolist"))?.length > 0 && (
        <div className="relative flex items-center justify-between w-[400px] py-4 border-[1px] bg-white px-2 shadow-md">
          <p className="text-xs">
            {itemLeft == 1 ? `${itemLeft} item left` : `${itemLeft} items left`}
          </p>

          <Radio.Group
            buttonStyle="outline"
            optionType="button"
            value={value}
            onChange={onChange}
            size="small"
            className="flex items-center gap-3"
          >
            <Radio.Button
              className={`before:w-0 border-transparent hover:border-solid border-[1px]  text-slate-900 hover:border-yellow-600 ${
                value == 1 && "border-yellow-700  border-solid border-[1px]"
              }`}
              value={1}
            >
              All
            </Radio.Button>
            <Radio.Button
              className={`before:w-0 border-transparent hover:border-solid border-[1px] hover:border-yellow-600 text-slate-900 ${
                value == 2 && "border-yellow-700 border-solid border-[1px]"
              }`}
              value={2}
            >
              Active
            </Radio.Button>
            <Radio.Button
              className={`before:w-0 border-transparent hover:border-solid border-[1px] text-slate-900  hover:border-yellow-600 ${
                value == 3 && "border-yellow-700  border-solid border-[1px]"
              }`}
              value={3}
            >
              Complete
            </Radio.Button>
          </Radio.Group>
          <button
            className="text-xs hover:underline"
            onClick={() => dispatch(clearComplete())}
          >
            Clear complete
          </button>
          <div className="absolute left-0 right-0 bottom-[-4px] bg-[#fff] border-[1px] shadow-md border-slate-200 h-[4px] mx-1">
            <div className="absolute left-0 right-0 bottom-[-4px] bg-[#fff] border-[1px] shadow-md border-slate-200 h-[4px] mx-1"></div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-center flex-col mt-10 gap-1">
        <p className="text-[#bfbfbf] text-[8px]">Double-click to edit a todo</p>
        <p className="text-[#bfbfbf] text-[8px]">Created by Van Duy</p>
        <p className="text-[#bfbfbf] text-[8px]">Part of TodoCAK</p>
      </div>
    </div>
    </div>
  );
};

export default Todolist;
