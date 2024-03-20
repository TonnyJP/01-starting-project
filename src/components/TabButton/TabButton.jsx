import React from "react"
export const TabButton = ({children, onClick, isSelected}) => {
    
    return <li>
        <button className={isSelected? "active": ""}onClick={onClick}>
            {children}
        </button>
    </li>
}