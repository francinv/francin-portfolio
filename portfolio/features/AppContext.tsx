import React, { createContext, FC, useState } from "react";
import { ContextType } from "../typings/contextType";

const contextDefaultValues: ContextType = {
    modalShow: false,
    modalType: "",
    fullSizeModal: false,
    viewType: "galleryView",
    searchValue: "",
    setModalShowFn: () => {},
    setModalTypeFn: () => {},
    setFullSizeModalFn: () => {},
    setViewTypeFn: () => {},
    setSearchValueFn: () => {},
};

export const PortfolioContext = createContext<ContextType>(contextDefaultValues);

const PortfolioProvider:FC = ({children}) => {
    const [modalShow, setModalShow] = useState<boolean>(contextDefaultValues.modalShow);
    const [modalType, setModalType] = useState<string>(contextDefaultValues.modalType);
    const [fullSizeModal, setFullSizeModal] = useState<boolean>(contextDefaultValues.fullSizeModal);
    const [viewType, setViewType] = useState<string>(contextDefaultValues.viewType);
    const [searchValue, setSearchValue] = useState<string>(contextDefaultValues.searchValue);

    const setModalShowFn = (value: boolean) => {
        setModalShow(value);
    }
    const setModalTypeFn = (value: string) => {
        setModalType(value);
    }
    const setFullSizeModalFn = (value: boolean) => {
        setFullSizeModal(value);
    }
    const setViewTypeFn = (value: string) => {
        setViewType(value);
    }
    const setSearchValueFn = (value: string) => {
        setSearchValue(value);
    }
    return (
        <PortfolioContext.Provider value={{
            modalShow,
            modalType,
            fullSizeModal,
            viewType,
            searchValue,
            setModalShowFn,
            setModalTypeFn,
            setFullSizeModalFn,
            setViewTypeFn,
            setSearchValueFn
        }}>
            {children}
        </PortfolioContext.Provider>
    );
}

export default PortfolioProvider;