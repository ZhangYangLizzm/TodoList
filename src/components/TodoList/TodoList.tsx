import React, { useEffect, useRef } from 'react';
import Todocard from '../TodoCard/TodoCard';
import { TodoListProps } from '../../types';
const TodoList: React.FC<TodoListProps> = ({ mockData }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }, [mockData]);
    return (
        <div className="todo-list">
            {mockData.map((mockItem, index) => (
                <div ref={index === mockData.length - 1 ? scrollRef : null} key={index}>
                    <Todocard {...mockItem} />
                </div>
            ))}
        </div>
    );
};
export default TodoList;