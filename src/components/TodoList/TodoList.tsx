import React, { useEffect, useRef, useState } from 'react';
import Todocard from '../TodoCard/TodoCard';
import { TodoListProps } from '../../types';
import { IconDelete, IconTodoConfirm } from '@/components/Icon'
import "./TodoList.scss"

const TodoList: React.FC<TodoListProps> = ({ todoList, children, deleteTodo }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [selectedTodo, setSelectedTodo] = useState<number | null>(null);
    const [expanded, setExpanded] = useState(true)
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }, [todoList]);

    return (
        <div className="todo-list" >
            <IconDelete id="icon-delete" style={{ visibility: selectedTodo !== null ? 'visible' : "hidden" }} onClick={() => deleteTodo(selectedTodo!)} />
            <IconTodoConfirm id="icon-todo-confirm" style={{ visibility: selectedTodo !== null ? 'visible' : "hidden" }} onClick={() => setSelectedTodo(null)} />
            <div className='todo-list-container'>
                <button onClick={() => setExpanded(!expanded)} >折叠</button>
                {/* <div>
                    <input type="text" />
                    <button>搜索</button>
                </div> */}
                {todoList.map((todoItem, index) => (
                    <div ref={index === todoList.length - 1 ? scrollRef : null} key={index} className={`todo-card ${selectedTodo === index ? 'todo-card-active' : ''}`} onClick={() => setSelectedTodo(index)}>
                        <Todocard {...todoItem} expanded={expanded} />
                    </div>
                ))}
                {children}
            </div>
        </div>
    );
};
export default TodoList;