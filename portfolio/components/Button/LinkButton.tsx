import React, { FC } from "react";
import { GithubIcon } from "../Icons/GitHub";
import { LinkedInIcon } from "../Icons/LinkedIn";
import style from './Button.module.css';
import colorStyles from '../../styles/colors.module.css';
import layoutStyle from '../../styles/layout.module.css';

interface LinkButtonProps {
    linkTo: string,
    text: string
}

/**
 * LinkButton is a link used that will redirect user to a specific page.
 * @param linkTo is the url of the website, text is the text that will be displayed under the link. 
 * @returns JSX.Element
 */
const LinkButton: FC<LinkButtonProps> = ({ linkTo, text }) => {

    /**
     * Method to return correct icon based on text passed as prop.
     * @returns JSX.Element of Icon
     */
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