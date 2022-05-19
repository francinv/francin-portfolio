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
    type: string,
}

/**
 * ProgramButton is a button that opens an overlay with wanted content.
 * @param text to display under Icon, type of ProgramButton.
 * @returns 
 */
const ProgramButton: React.FC<ProgramButtonProps> = ({text, type}) => {
    const { setModalShowFn, setModalTypeFn} = useContext(PortfolioContext);

    /**
     * Function to determine what Icon to return based on the type.
     * @returns JSX.Element of Icon
     */
    function getIconComponent() {
        switch(type) {
            case 'Terminal':
                return <TerminalIcon />
            case 'Projects':
                return <FolderIcon height="60"/>
            case 'CV':
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
                setModalTypeFn(type);
            }} 
            key={type}
        >
            {getIconComponent()}
            <p className={`${commonStyles.text_16}`}>{text}</p>
        </button>
    )
}

export default ProgramButton;