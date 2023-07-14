import React, { memo, useEffect, useRef, useState } from 'react';
import Todocard from '../TodoCard/TodoCard';
import { TodoListProps } from '../../types';
import { IconDelete, IconTodoConfirm } from '@/components/Icon'
import "./TodoList.scss"


const TodoCardMemoized = memo(Todocard);
const TodoList: React.FC<TodoListProps> = ({ mockData }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [selectedTodo, setSelectedTodo] = useState<number | null>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }, [mockData]);
    return (
        <div className="todo-list" >
            <IconDelete id="icon-delete" style={{ visibility: selectedTodo ? 'visible' : "hidden" }} />
            <IconTodoConfirm id="icon-todo-confirm" style={{ visibility: selectedTodo ? 'visible' : "hidden" }} />
            <div>
                {mockData.map((mockItem, index) => (
                    <div ref={index === mockData.length - 1 ? scrollRef : null} key={index} className={`todo-card ${selectedTodo === index ? 'todo-card-active' : ''}`} onClick={() => setSelectedTodo(index)}>
                        <TodoCardMemoized {...mockItem} />
                    </div>
                ))}
            </div>
        </div>
    );
};
export default TodoList;