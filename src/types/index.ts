
export interface TodoCardProps {
  title: string;
  content: string;
  priority: string
  tags: string[];
}

export interface TodoListProps {
  mockData: TodoCardProps[]
}