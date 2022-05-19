import React, { FC, useContext } from "react";
import style from './Modal.module.css';
import layoutStyles from '../../../styles/layout.module.css';
import { PortfolioContext } from "../../../features/AppContext";

const Modal: FC = ({children}) => {
    const {modalShow, fullSizeModal} = useContext(PortfolioContext);

    if (!modalShow) {
        return null;
    }

    return (
        <div 
            id="draggable_modal"
            className={`${style.modal_container} ${layoutStyles.flex_col}`} 
            style={{
                width: fullSizeModal ? '100%' : '70%',
                height: fullSizeModal? '100%' : '70%',
                borderRadius: fullSizeModal ? '0' : '8px',
            }}
        >
            {children}
        </div>
    )
}

export default Modal;