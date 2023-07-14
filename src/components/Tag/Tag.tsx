import React from 'react'
import getColor from '../../utils/getColor'
interface TagProps {
    type: string,
    text: string
}

const Tag: React.FC<TagProps> = ({ type, text }) => {
    const { bgColor, fontColor } = getColor(type)
    return (
        <div className='todo-tag' style={{ backgroundColor: bgColor }}>
            <span style={{ color: fontColor }}>{text}</span>
        </div >
    )
}

export default Tag