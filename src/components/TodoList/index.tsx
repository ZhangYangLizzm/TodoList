import React, { useState } from "react";

import { SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

import Todocard from "./components/Card";
import { IconDelete, IconTodoConfirm } from "@/components/Icon";

import { deleteTodo, searchTodo } from "@/store/todoSlice";
import { useAppDispatch, useAppSelector } from "@/store/storehook";
import { TodoListProps } from "../../types";
import "./scss/TodoList.scss";
import useLocalStorage from "@/hooks/useLocalStorage";
const TodoList: React.FC<TodoListProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const todoList = useAppSelector((state) => state.todo.todos);
  const [selectedTodo, setSelectedTodo] = useState<number | null>(null);
  const [expanded, setExpanded] = useLocalStorage("todo-expanded", true);
  const [searchValue, setSearchValue] = useState("");
  const searchResults = useAppSelector((state) => state.todo.searchResults);

  const onChange = (value: string) => {
    setSearchValue(value);
    dispatch(searchTodo(value));
  };

  const onDelete = () => {
    dispatch(deleteTodo(selectedTodo!));
    setSelectedTodo(null);
  };
  const renderTodoList = () => {
    if (searchValue !== "") {
      if (searchResults.length === 0) {
        return <div>no results found!</div>;
      }
      return searchResults.map((todoItem, index) => (
        <div
          key={index}
          className={`todo-card ${
            selectedTodo === index ? "todo-card-active" : ""
          }`}
          onClick={() => setSelectedTodo(index)}
        >
          <Todocard {...todoItem} expanded={expanded} />
        </div>
      ));
    }
    return todoList.map((todoItem, index) => (
      <div
        key={index}
        className={`todo-card ${
          selectedTodo === index ? "todo-card-active" : ""
        }`}
        onClick={() => setSelectedTodo(index)}
      >
        <Todocard {...todoItem} expanded={expanded} />
      </div>
    ));
  };
  return (
    <div className="todo-list">
      <IconDelete
        id="icon-delete"
        style={{ visibility: selectedTodo !== null ? "visible" : "hidden" }}
        onClick={() => onDelete()}
      />
      <IconTodoConfirm
        id="icon-todo-confirm"
        style={{ visibility: selectedTodo !== null ? "visible" : "hidden" }}
        onClick={() => setSelectedTodo(null)}
      />
      <div className="todo-list-container">
        <div style={{ display: "flex", marginBottom: "32px" }}>
          <Button
            onClick={() => setExpanded(!expanded)}
            style={{ marginInlineEnd: "16px" }}
          >
            全部折叠
          </Button>
          <Input
            placeholder="You can input to search todo title here!"
            prefix={<SearchOutlined />}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
        {renderTodoList()}
        {children}
      </div>
    </div>
  );
};
export default TodoList;
