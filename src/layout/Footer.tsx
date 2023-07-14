import React, { ReactNode } from 'react'

interface FooterProps {
    children: ReactNode
}
const Footer: React.FC<FooterProps> = ({ children }) => {
    return (
        <div className='app-footer'>
            {children}
        </div>
    )
}

export default Footer