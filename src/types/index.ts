import { ReactNode } from "react";
export interface TodoItem {
  title: string;
  content: string;
  priority: string;
  tags: string;
  createdTime: string;
}
export type TodoList = TodoItem[];
export interface TodoCardProps extends TodoItem {
  expanded: boolean;
}

export interface TodoListProps {
  children: ReactNode;
}
