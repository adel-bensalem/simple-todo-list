import { Db, Todo } from "./types";

const db: Db = {
  todoList: [],
};

function addTodo(todo: Todo) {
  const savedTodo = { ...todo, priority: db.todoList.length };

  db.todoList = [...db.todoList, savedTodo];

  return savedTodo;
}

function removeTodo(priority: number) {
  db.todoList = db.todoList.filter((todo) => priority !== todo.priority);
}

function editTodo(priority: number, nextTodo: Todo) {
  const index = db.todoList.findIndex((todo) => priority === todo.priority);

  db.todoList = [
    ...db.todoList.slice(0, index),
    nextTodo,
    ...db.todoList.slice(index + 1),
  ];
}

function getTodoList() {
  return db.todoList;
}

export { addTodo, removeTodo, editTodo, getTodoList };
