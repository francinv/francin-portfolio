import React from "react";
import { GithubIcon } from "../Icons/GitHub";
import { LinkedInIcon } from "../Icons/LinkedIn";
import style from './Button.module.css';
import colorStyles from '../../styles/colors.module.css';
import layoutStyle from '../../styles/layout.module.css';

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
        <a 
            className={`
                ${style.btn_container} 
                ${style.btn_custom} 
                ${layoutStyle.flex_col}
                ${layoutStyle.items_center}
                ${colorStyles.text_white}
            `} href={linkTo} target='_blank' rel="noreferrer">
            {getIconComponent()}
            <p>{text}</p>
        </a>
    )
}

export default LinkButton;