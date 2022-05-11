import React from "react";
import { GithubIcon } from "../Icons/GitHub";
import { LinkedInIcon } from "../Icons/LinkedIn";
import style from './Button.module.css';
import iconStyle from '../Icons/Icon.module.css';
import colorStyles from '../../styles/colors.module.css';

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
        <a className={style.button_container} href={linkTo} target='_blank' rel="noreferrer">
            {getIconComponent()}
            <p className={colorStyles.text_white}>{text}</p>
        </a>
    )
}

export default LinkButton;