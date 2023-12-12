import React, { useEffect, useState } from "react";
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
  const [ isCheckCompete, setIsCheckCompete] = useState(false)
  const { todolist } = globalState;
  const [value, setValue] = useState(1);

  const handleCheckComplete = () => {
    var result = todolist.some((item) => item.complete == true)
    if(result) setIsCheckCompete(true)
    else setIsCheckCompete(false)
  }
  const onChange = (e) => {
    setValue(e.target.value);
    dispatch(filterTodo(e.target.value));
  };
  const [todo, setTodo] = useState({
    id: "",
    todoName: "",
    complete: false,
  });

  const handleSubmit = (e) => {
    todolist.push(todo);
    localStorage.setItem("todolist", JSON.stringify(todolist));
    dispatch(addTodo(todolist));
    setTodo({
      todoName: "",
      complete: false,
    });
  };

  const handleChange = (id, checked) => {
    dispatch(toggleTodo({ id: id, checked: !checked }));
  };

  const handleCheckAll = () => {
    dispatch(checkAllTodo());
  };

  const handleCancelAll = () => {
    dispatch(cancelAllTodo());
  };

  return (
    <div className="w-full h-full flex items-center flex-col ">
      <h1 className="text-center my-3 text-5xl text-rose-500">TODOS</h1>
      <div className="flex items-center justify-center gap-2">
        <form onSubmit={handleSubmit}>
          <Input
            prefix={<DownOutlined onClick={()=> dispatch(checkAllTodo())} />}
            value={todo.todoName}
            onChange={(e) =>
              setTodo({ ...todo, todoName: e.target.value, id: uuidv4() })
            }
            placeholder="What need to be done?"
            className="w-[400px] my-4 p-4"
          />
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

      {/* {todolist.length > 0 && } */}
      <div className="flex items-center justify-between w-[400px] py-4 border-[1px]">
        <p className="text-xs">{`${todolist.length} items`}</p>

        <Radio.Group
        className="flex items-center gap-3"
          value={value}
          onChange={onChange}
          buttonStyle="solid"
          style={{
          }}
        >
          <Radio.Button className="w-[50px]" value={1}>All</Radio.Button>
          
          <Radio.Button value={2}>Active</Radio.Button>
          <Radio.Button value={3}>Complete</Radio.Button>
        </Radio.Group>
        <button className="text-xs" onClick={()=> dispatch(clearComplete())}>Clear complete</button>
      </div>
      {/* <Button onClick={handleCancelAll} className="bg-blue-700" type="primary">
        Cancel All
      </Button> */}
    </div>
  );
};

export default Todolist;
