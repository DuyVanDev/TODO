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
  let itemLeft = 0;
  for (var todoItem of todolist) {
    if (todoItem.complete == false) {
      itemLeft += 1;
    }
  }

  const handleCheckComplete = () => {
    var result = todolist.some((item) => item.complete == true);
    if (result) return true;
    return false;
  };

  var resultHandleCheck = handleCheckComplete();
  console.log(resultHandleCheck);
  const onChange = (e) => {
    setValue(e.target.value);
    dispatch(filterTodo(e.target.value));
  };
  const [todo, setTodo] = useState({
    id: "",
    todoName: "",
    complete: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
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
    <div className="w-full h-screen flex items-center flex-col bg-[#f5f5f5] ">
      <h1 className="text-center my-3 text-7xl text-rose-500 opacity-50">todos</h1>
      <div className="flex items-center justify-center">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center border-2 w-[400px] bg-[#fefefe] ">
            {JSON.parse(localStorage.getItem("todolist")).length > 0 && (
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
              placeholder="What need to be done?"
              className="bg-[#fefefe] py-3 text-xl font-normal placeholder:italic placeholder:font-medium"
            />
          </div>
        </form>
        {/* <Button onClick={handleSubmit} className="bg-blue-700" type="primary">
          Add Todo
        </Button> */}
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
      {/* <Button onClick={handleCheckAll} className="bg-blue-700" type="primary">
        Check All
      </Button> */}

      {JSON.parse(localStorage.getItem("todolist")).length > 0 && (
        <div className="flex items-center justify-between w-[400px] py-4 border-[1px]">
          <p className="text-xs">
            {itemLeft >= 2 ? `${itemLeft} items left` : `${itemLeft} item left`}
          </p>

          <Radio.Group
            value={value}
            onChange={onChange}
            size="small"
            className="flex items-center gap-3"
          >
            <Radio.Button value={1}>All</Radio.Button>
            <Radio.Button value={2}>Active</Radio.Button>
            <Radio.Button value={3}>Complete</Radio.Button>
          </Radio.Group>
          <button className="text-xs" onClick={() => dispatch(clearComplete())}>
            Clear complete
          </button>
        </div>
      )}

      {/* <Button onClick={handleCancelAll} className="bg-blue-700" type="primary">
        Cancel All
      </Button> */}
    </div>
  );
};

export default Todolist;
