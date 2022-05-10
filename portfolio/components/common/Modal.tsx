import React, { FC } from "react";
import customStyles from './Modal.module.css';
import layoutStyles from '../../styles/layout.module.css';

interface ModalProps {
    show: boolean,
}

const Modal: FC<ModalProps> = ({children, show}) => {
    const [positions, setPositions] = React.useState({
        top: '50%',
        left: '50%',
    })

    if (!show) {
        return null;
    }

    return (
        <div 
            id="draggable_modal"
            className={`${customStyles.modal_container} ${layoutStyles.flex_col}`} 
            style={{
                top: positions.top,
                left: positions.left,
            }}
        >
            {children}
        </div>
    )
}

export default Modal;