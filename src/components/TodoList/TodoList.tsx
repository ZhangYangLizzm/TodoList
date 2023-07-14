import React, { useEffect, useRef, useState } from 'react';
import Todocard from '../TodoCard/TodoCard';
import { TodoListProps } from '../../types';
import { IconDelete, IconTodoConfirm } from '@/components/Icon'
import "./TodoList.scss"

const TodoList: React.FC<TodoListProps> = ({ mockData, children, deleteTodo }) => {
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
            <IconDelete id="icon-delete" style={{ visibility: selectedTodo !== null ? 'visible' : "hidden" }} onClick={() => deleteTodo(selectedTodo!)} />
            <IconTodoConfirm id="icon-todo-confirm" style={{ visibility: selectedTodo !== null ? 'visible' : "hidden" }} />
            <div>
                {mockData.map((mockItem, index) => (
                    <div ref={index === mockData.length - 1 ? scrollRef : null} key={index} className={`todo-card ${selectedTodo === index ? 'todo-card-active' : ''}`} onClick={() => setSelectedTodo(index)}>
                        <Todocard {...mockItem} />
                    </div>
                ))}
                {children}
            </div>
        </div>
    );
};
export default TodoList;