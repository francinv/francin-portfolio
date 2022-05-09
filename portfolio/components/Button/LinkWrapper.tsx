import React from "react";
import style from './Button.module.css';

interface LinkWrapperProps {
    linkTo: string,
    text: string
}

const LinkWrapper: React.FC<LinkWrapperProps> = ({linkTo, children}) => {
    
    return (
        <a className={`${style.button_container} hover_button`} href={linkTo}>
            {children}
        </a>
    )
}

export default LinkWrapper;