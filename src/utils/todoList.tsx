import create from "zustand";

interface TodoListState {
  todoList: any[];
  setTodoList: (newTodoList: any[]) => void;
}

const useTodoList = create<TodoListState>((set) => {
  const storedTodoList = JSON.parse(localStorage.getItem("todoList") || "[]");

  return {
    todoList: storedTodoList,
    setTodoList: (newTodoList) => {
      set({ todoList: newTodoList });
      localStorage.setItem("todoList", JSON.stringify(newTodoList));
    },
  };
});

export default useTodoList;
