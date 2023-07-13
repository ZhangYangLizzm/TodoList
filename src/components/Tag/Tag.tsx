import React from 'react'
import useColor from '../../utils/useColor'
import './Tag.scss'
interface TagProps {
    type: string,
    content: string
}

const Tag: React.FC<TagProps> = ({ type, content }) => {
    const { bgColor, fontColor } = useColor(type)
    return (
        <div className='todo-tag' style={{ backgroundColor: bgColor }}>
            <span style={{ color: fontColor }}>{content}</span>
        </div >
    )
}

export default Tag