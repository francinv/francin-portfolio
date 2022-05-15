import React, { FC, useContext } from "react";
import customStyles from './Modal.module.css';
import layoutStyles from '../../../styles/layout.module.css';
import { PortfolioContext } from "../../../features/AppContext";

const Modal: FC = ({children}) => {
    const {modalShow, fullSizeModal} = useContext(PortfolioContext);
    const [positions, setPositions] = React.useState({
        top: '50%',
        left: '50%',
    })

    if (!modalShow) {
        return null;
    }

    return (
        <div 
            id="draggable_modal"
            className={`${customStyles.modal_container} ${layoutStyles.flex_col}`} 
            style={{
                top: positions.top,
                left: positions.left,
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