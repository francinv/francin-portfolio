import React, { FC, useContext } from "react";
import style from './Modal.module.css';
import layoutStyles from '../../../styles/layout.module.css';
import { PortfolioContext } from "../../../features/AppContext";

/**
 * Modal is a component that shows a modal. The state is used to determine if the modal should be shown or not, in 
 * addition the state will also be used to determine if the modal should cover the whole screen or not.
 * @param children will be the content of the modal.
 * @returns JSX.Element
 */
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