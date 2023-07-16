import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initMockData } from "@/utils/mock.datasource";
import { TodoItem } from "@/types";

interface TodoState {
  todos: TodoItem[];
  searchResults: TodoItem[];
}

// 从 localStorage 中加载保存的数据，如果没有则使用初始数据
const savedData = localStorage.getItem("todos");
const initialData: TodoItem[] = savedData
  ? (JSON.parse(savedData) as TodoItem[])
  : initMockData();

const initialState: TodoState = {
  todos: initialData,
  searchResults: initialData,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoItem>) => {
      const newTodo = action.payload;
      for (const key in newTodo) {
        if (!newTodo[key as keyof TodoItem]) {
          alert(`请填写${key}字段`);
          return;
        }
      }
      state.todos.push(action.payload);
      // 保存数据到 localStorage
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos.splice(action.payload, 1);
      // 保存数据到 localStorage
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    searchTodo: (state, action: PayloadAction<string>) => {
      const searchQuery = action.payload.toLowerCase();
      state.searchResults = state.todos.filter((todo) =>
        todo.title.toLowerCase().includes(searchQuery)
      );
    },
    clearSearchResults: (state) => {
      state.searchResults = state.todos;
    },
    setAllTodosExpanded: (state, value: PayloadAction<boolean>) => {
      state.todos = state.todos.map((todo) => ({
        ...todo,
        expanded: value,
      }));
    },
  },
});

export const { addTodo, deleteTodo, searchTodo, clearSearchResults } =
  todoSlice.actions;
export default todoSlice.reducer;
