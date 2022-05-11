import React, { createContext, FC, useState } from "react";
import { ContextType } from "../typings/contextType";

const contextDefaultValues: ContextType = {
    modalShow: false,
    modalType: "",
    terminalText: "(base) francinvincent@Francins-MBP ~ % ",
    fullSizeModal: false,
    setModalShowFn: () => {},
    setModalTypeFn: () => {},
    setTerminalTextFn: () => {},
    setFullSizeModalFn: () => {},
};

export const PortfolioContext = createContext<ContextType>(contextDefaultValues);

const PortfolioProvider:FC = ({children}) => {
    const [terminalText, setTerminalText] = useState<string>(contextDefaultValues.terminalText);
    const [modalShow, setModalShow] = useState<boolean>(contextDefaultValues.modalShow);
    const [modalType, setModalType] = useState<string>(contextDefaultValues.modalType);
    const [fullSizeModal, setFullSizeModal] = useState<boolean>(contextDefaultValues.fullSizeModal);

    const setModalShowFn = (value: boolean) => {
        setModalShow(value);
    }
    const setModalTypeFn = (value: string) => {
        setModalType(value);
    }
    const setTerminalTextFn = (value: string) => {
        setTerminalText(value);
    }
    const setFullSizeModalFn = (value: boolean) => {
        setFullSizeModal(value);
    }
    return (
        <PortfolioContext.Provider value={{
            modalShow,
            modalType,
            terminalText,
            fullSizeModal,
            setModalShowFn,
            setModalTypeFn,
            setTerminalTextFn,
            setFullSizeModalFn,
        }}>
            {children}
        </PortfolioContext.Provider>
    );
}

export default PortfolioProvider;