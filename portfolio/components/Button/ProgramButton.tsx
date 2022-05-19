import React, { useContext } from "react";
import { FileIcon } from "../Icons/File";
import { FolderIcon } from "../Icons/Folder";
import { TerminalIcon } from "../Icons/Terminal";
import style from './Button.module.css';
import colorStyles from '../../styles/colors.module.css';
import commonStyles from '../../styles/common.module.css';
import layoutStyle from '../../styles/layout.module.css';
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
                return <FolderIcon height="60"/>
            case 'CV.pdf':
                return <FileIcon />
        }
    }


    return (
        <button 
            className={`
                ${style.btn_custom} 
                ${style.btn_container} 
                ${layoutStyle.flex_col}
                ${layoutStyle.items_center}
                ${colorStyles.text_white}
            `} 
            onClick={() => {
                setModalShowFn(true);
                setModalTypeFn(index);
            }} 
            key={index}
        >
            {getIconComponent()}
            <p className={`${commonStyles.text_16}`}>{text}</p>
        </button>
    )
}

export default ProgramButton;