import React from "react";
import { FileIcon } from "../Icons/File";
import { FolderIcon } from "../Icons/Folder";
import { TerminalIcon } from "../Icons/Terminal";
import style from './Button.module.css';
import colorStyles from '../../styles/colors.module.css';
import commonStyles from '../../styles/common.module.css';

interface ProgramButtonProps {
    text: string,
    index: string,
    handleClick: (index: string) => void
    
}

const ProgramButton: React.FC<ProgramButtonProps> = ({text, handleClick, index}) => {
    function getIconComponent() {
        switch(text) {
            case 'Terminal':
                return <TerminalIcon />
            case 'My projects':
                return <FolderIcon />
            case 'CV.pdf':
                return <FileIcon />
        }
    }


    return (
        <button className={`${style.button_container} hover_button`} onClick={() => handleClick(index)} key={index}>
            {getIconComponent()}
            <p className={`${colorStyles.text_white} ${commonStyles.text_16}`}>{text}</p>
        </button>
    )
}

export default ProgramButton;