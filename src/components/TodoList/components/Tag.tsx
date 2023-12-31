import React from 'react'

interface TagProps {
    type: "priority" | "tag",
    text: string
}
const getColor = (type: "priority" | "tag") => {
    let bgColor, fontColor;
    if (type === "priority") {
        bgColor = "#FEF2F2";
        fontColor = "#E11D48";
    } else if (type === "tag") {
        bgColor = "#F0FDF4";
        fontColor = "#16A34A";
    }
    return { bgColor, fontColor };
};

const Tag: React.FC<TagProps> = ({ type, text }) => {
    const { bgColor, fontColor } = getColor(type)
    return (
        <div className='todo-card-tag' style={{ backgroundColor: bgColor }}>
            <span style={{ color: fontColor }}>{text}</span>
        </div >
    )
}

export default Tag