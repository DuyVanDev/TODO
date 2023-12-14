import { ToastWaring } from "../utils";
import { checkAllTodo } from "./Actions";
import {
  ADD_MENU,
  ADD_SETTING,
  ADD_TODO,
  CANCEL_ALL_TODO,
  CHECK_ALL_TODO,
  CLEAR_COMPLETE,
  EDIT_TODO,
  FILTER_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from "./Contants";

const menu = localStorage.getItem("menu");
const setting = localStorage.getItem("setting");
const todolist = localStorage.getItem("todolist");
export const initState = {
  menu: menu ? JSON.parse(menu) : [],
  setting: setting ? JSON.parse(setting) : {},
  todolist: todolist ? JSON.parse(todolist) : [],
};

export const reducer = (state, action) => {
  // console.log(state, action, action.type, action.payload, "state, action");
  switch (action.type) {
    // case ADD_MENU:
    //   return {
    //     ...state,
    //     menu: action.payload,
    //   };
    // case ADD_SETTING:
    //   return {
    //     ...state,
    //     setting: action.payload,
    //   };

    case ADD_TODO:
      return {
        ...state,
        todolist: action.payload,
      };
    case REMOVE_TODO:
      const newTodo = state.todolist.slice();
      const itemIndexRemove = state.todolist.findIndex((item) => item.id === action.payload.id);
      newTodo.splice(itemIndexRemove, 1);

      localStorage.setItem("todolist", JSON.stringify(newTodo));

      return {
        ...state,
        todolist: newTodo,
      };
    case EDIT_TODO:
      const {idEdit ,todoName } = action.payload
      const editTodo = state.todolist.slice();
      const dataEdit = editTodo.findIndex((item) => item.id ===idEdit);
      editTodo[dataEdit].todoName = todoName 
      localStorage.setItem("todolist", JSON.stringify(editTodo));
      return {
        ...state,
        todolist:editTodo,
      };

    case TOGGLE_TODO:
      console.log(action.payload);
      const { id, checked } = action.payload;
      const data = state.todolist.findIndex((item) => item.id === id);

      const newArr = state.todolist;
      newArr[data].complete = checked;
      localStorage.setItem("todolist", JSON.stringify(newArr));

      return {
        ...state,
        todolist: newArr,
      };
    case CHECK_ALL_TODO:
      const newCheckAllTodo = state.todolist;
      for (var list in newCheckAllTodo) {
        newCheckAllTodo[list].complete = true;
      }
      localStorage.setItem("todolist", JSON.stringify(newCheckAllTodo));
      return {
        ...state,
        todolist: newCheckAllTodo,
      };

    case CANCEL_ALL_TODO:
      const newCancelAllTodo = state.todolist;
      for (var list in newCancelAllTodo) {
        newCancelAllTodo[list].complete = false;
      }

      localStorage.setItem("todolist", JSON.stringify(newCancelAllTodo));
      return {
        ...state,
        todolist: newCancelAllTodo,
      };

    case FILTER_TODO:
      var filterTodo = JSON.parse(localStorage.getItem("todolist"));
      if (action.payload == 1) {
        filterTodo = filterTodo;
      }
      if (action.payload == 2) {
        filterTodo = filterTodo.filter((item) => item.complete == false);
      }
      if (action.payload == 3) {
        filterTodo = filterTodo.filter((item) => item.complete == true);
      }

      return {
        ...state,
        todolist: filterTodo,
      };

    case CLEAR_COMPLETE:
      const newTodoClear = [];
      for (var list in state.todolist) {
        if (state.todolist[list].complete != true) {
          newTodoClear.push(state.todolist[list]);
        }
      }
      localStorage.setItem("todolist", JSON.stringify(newTodoClear));

      return {
        ...state,
        todolist: newTodoClear,
      };
    default:
      return state;
  }
};
