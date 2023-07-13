import React from 'react'
import './TodoCard.scss'
import Tag from '../Tag/Tag'
import { TodoCardProps } from '../../types'

const Todocard: React.FC<TodoCardProps> = ({ title, content, tags }) => {
    return (
        <div className='todo-card'>
            <h2>{title}</h2>
            <p>{content}</p>
            <div className='todo-tags'>
                {
                    tags.map((tag, index) => (
                        <Tag key={index} {...tag} />
                    ))
                }
            </div>
        </div>
    )
}

export default (Todocard)