import { ReactNode } from 'react';

export interface TodoCardProps {
  title: string;
  content: string;
  priority: string
  tag: string;
}

export interface TodoListProps {
  mockData: TodoCardProps[]
  children: ReactNode,
  deleteTodo: (index: number) => void
}