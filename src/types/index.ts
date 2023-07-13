interface Tag {
  type: string;
  content: string;
}
export interface TodoCardProps {
  title: string;
  content: string;
  tags: Array<Tag>;
}

export interface TodoListProps{
    mockData:TodoCardProps[]
}