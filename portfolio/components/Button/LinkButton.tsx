import React from "react";
import { GithubIcon } from "../Icons/GitHub";
import { LinkedInIcon } from "../Icons/LinkedIn";
import style from './Button.module.css';

interface LinkButtonProps {
    linkTo: string,
    text: string
}

const LinkButton: React.FC<LinkButtonProps> = ({linkTo, text}) => {

    function getIconComponent() {
        switch(text) {
            case 'GitHub':
                return <GithubIcon />
            case 'LinkedIn':
                return <LinkedInIcon />
        }
    }
    
    return (
        <a className={`${style.button_container} hover_button`} href={linkTo} target='_blank' rel="noreferrer">
            {getIconComponent()}
            <p className={style.white}>{text}</p>
        </a>
    )
}

export default LinkButton;