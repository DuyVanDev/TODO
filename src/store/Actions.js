import {
  ADD_MENU,
  ADD_SETTING,
  ADD_TODO,
  CANCEL_ALL_TODO,
  CHECK_ALL_TODO,
  CHECK_COMPLETE,
  CLEAR_COMPLETE,
  EDIT_TODO,
  FILTER_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from "./Contants";

export const addMenu = (payload) => ({
  type: ADD_MENU,
  payload,
});

export const addSetting = (payload) => ({
  type: ADD_SETTING,
  payload,
});

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const removeTodo = (payload) => ({
  type: REMOVE_TODO,
  payload,
});

export const editTodo = (payload) => ({
  type: EDIT_TODO,
  payload,
});

export const toggleTodo = (payload) => ({
  type: TOGGLE_TODO,
  payload,
});

export const checkAllTodo = (payload) => ({
  type: CHECK_ALL_TODO,
  payload,
});

export const cancelAllTodo = (payload) => ({
  type: CANCEL_ALL_TODO,
  payload,
});

export const filterTodo = (payload) => ({
  type: FILTER_TODO,
  payload,
});

export const clearComplete = (payload) => ({
  type: CLEAR_COMPLETE,
  payload,
});

export const checkComplete = (payload) => ({
  type: CHECK_COMPLETE,
  payload,
});
