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
            <div className='todo-card-header'>
                <span className='todo-card-title'>{title}</span>
                <span className='todo-card-createdTime'>创建:{createdTime}</span>
            </div>

            {
                expanded && <>
                    <div className='todo-card-body'>
                        <p>{content}</p>
                    </div>
                    <div className='todo-card-footer'>
                        <Tag type="priority" text={priority} />
                        {tagsRender()}
                    </div>
                </>
            }
        </>
    )
}

export default (Todocard)