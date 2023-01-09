type Todo = {
  name: string;
  priority: number;
  isDone: boolean;
};

type Db = {
  todoList: Todo[];
};

export { Todo, Db };
