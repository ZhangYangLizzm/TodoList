import React from 'react'
import Tag from '../Tag/Tag'
import { TodoCardProps } from '../../types'

const Todocard: React.FC<TodoCardProps> = ({ title, content, priority, tag }) => {
    return (
        < >
            <h2>{title}</h2>
            <p>{content}</p>
            <div className='todo-tags'>
                <Tag type="priority" text={priority} />
                <Tag type="tag" text={tag} />
            </div>
        </>
    )
}

export default (Todocard)