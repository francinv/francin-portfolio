import React, { useContext } from "react";
import { FileIcon } from "../Icons/File";
import { FolderIcon } from "../Icons/Folder";
import { TerminalIcon } from "../Icons/Terminal";
import style from './Button.module.css';
import colorStyles from '../../styles/colors.module.css';
import commonStyles from '../../styles/common.module.css';
import { PortfolioContext } from "../../features/AppContext";

interface ProgramButtonProps {
    text: string,
    index: string,
}

const ProgramButton: React.FC<ProgramButtonProps> = ({text, index}) => {
    const { setModalShowFn, setModalTypeFn} = useContext(PortfolioContext);

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
        <button 
            className={style.button_container} 
            onClick={() => {
                setModalShowFn(true);
                setModalTypeFn(index);
            }} 
            key={index}
        >
            {getIconComponent()}
            <p className={`${colorStyles.text_white} ${commonStyles.text_16}`}>{text}</p>
        </button>
    )
}

export default ProgramButton;