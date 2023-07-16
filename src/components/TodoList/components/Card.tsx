import React from 'react'
import Tag from './Tag'
import { TodoCardProps } from '../../../types'
import "../scss/TodoCard.scss"
const Todocard: React.FC<TodoCardProps> = ({ title, content, priority, tags, expanded, createdTime }) => {
    const tagsRender = () => {
        if (tags && tags.includes('、')) {
            return tags.split('、').map((tag, index) =>
                <Tag type="tag" text={tag} key={index} />
            )
        }
        return <Tag type="tag" text={tags} />
    }
    return (
        < >
            <span className='todo-card-title'>{title}</span>
            <span className='todo-card-createdTime'>创建:{createdTime}</span>
            {
                expanded && <>
                    <p>{content}</p>
                    <div className='todo-card-tags'>
                        <Tag type="priority" text={priority} />
                        {tagsRender()}
                    </div>
                </>
            }
        </>
    )
}

export default (Todocard)