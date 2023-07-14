import React from 'react'
import Tag from '../Tag/Tag'
import { TodoCardProps } from '../../types'

const Todocard: React.FC<TodoCardProps> = ({ title, content, priority, tags }) => {
    return (
        < >
            <h2>{title}</h2>
            <p>{content}</p>
            <div className='todo-tags'>
                <Tag type="priority" text={priority} />
                {
                    tags.map((tag, index) => (
                        <Tag key={index} text={tag} type="tag" />
                    ))
                }
            </div>
        </>
    )
}

export default (Todocard)