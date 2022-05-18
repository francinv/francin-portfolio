import React, { createContext, FC, useState } from "react";
import { ContextType } from "../typings/contextType";

const contextDefaultValues: ContextType = {
    modalShow: false,
    modalType: "",
    terminalText: "(base) francinvincent@Francins-MBP ~ % ",
    fullSizeModal: false,
    viewType: "galleryView",
    searchBarPlaceholder: "Search for a project",
    searchValue: "",
    setModalShowFn: () => {},
    setModalTypeFn: () => {},
    setTerminalTextFn: () => {},
    setFullSizeModalFn: () => {},
    setViewTypeFn: () => {},
    setSearchBarPlaceholderFn: () => {},
    setSearchValueFn: () => {},
};

export const PortfolioContext = createContext<ContextType>(contextDefaultValues);

const PortfolioProvider:FC = ({children}) => {
    const [terminalText, setTerminalText] = useState<string>(contextDefaultValues.terminalText);
    const [modalShow, setModalShow] = useState<boolean>(contextDefaultValues.modalShow);
    const [modalType, setModalType] = useState<string>(contextDefaultValues.modalType);
    const [fullSizeModal, setFullSizeModal] = useState<boolean>(contextDefaultValues.fullSizeModal);
    const [viewType, setViewType] = useState<string>(contextDefaultValues.viewType);
    const [searchBarPlaceholder, setSearchBarPlaceholder] = useState<string>(contextDefaultValues.searchBarPlaceholder);
    const [searchValue, setSearchValue] = useState<string>(contextDefaultValues.searchValue);

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
    const setViewTypeFn = (value: string) => {
        setViewType(value);
    }
    const setSearchBarPlaceholderFn = (value: string) => {
        setSearchBarPlaceholder(value);
    }
    const setSearchValueFn = (value: string) => {
        setSearchValue(value);
    }
    return (
        <PortfolioContext.Provider value={{
            modalShow,
            modalType,
            terminalText,
            fullSizeModal,
            viewType,
            searchBarPlaceholder,
            searchValue,
            setModalShowFn,
            setModalTypeFn,
            setTerminalTextFn,
            setFullSizeModalFn,
            setViewTypeFn,
            setSearchBarPlaceholderFn,
            setSearchValueFn
        }}>
            {children}
        </PortfolioContext.Provider>
    );
}

export default PortfolioProvider;