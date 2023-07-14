import React from 'react'
import Tag from '../Tag/Tag'
import { TodoCardProps } from '../../types'

const Todocard: React.FC<TodoCardProps> = ({ title, content, priority, tags, expanded }) => {
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
            <h2>{title}</h2>
            {
                expanded && <>
                    <p>{content}</p>
                    <div className='todo-tags'>
                        <Tag type="priority" text={priority} />
                        {tagsRender()}
                    </div>
                </>
            }
        </>
    )
}

export default (Todocard)