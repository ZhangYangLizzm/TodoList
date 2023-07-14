import { ReactNode } from 'react';

export interface TodoCardProps {
  title: string;
  content: string;
  priority: string
  tags: string;
  expanded:boolean
}

export interface TodoListProps {
  todoList: TodoCardProps[]
  children: ReactNode,
  deleteTodo: (index: number) => void
}