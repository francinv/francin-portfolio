import React, { createContext, FC, useState } from "react";
import { RepositoryType } from "../typings/commonTypes";
import { ContextType, GithubStatistics, MostUsedLanguages, MyRepositories } from "../typings/contextType";

const contextDefaultValues: ContextType = {
    modalShow: false,
    modalType: "",
    fullSizeModal: false,
    viewType: "galleryView",
    searchValue: "",
    githubStatistic: {
        status: 'idle',
        error: null,
        statistics: undefined,
    },
    mostUsedLanguages: {
        status: 'idle',
        error: null,
        languagesArray: [],
    },
    myRepositories: {
        status: 'idle',
        error: null,
        repositoriesArray: [],
    },
    filteredRepositories: [],
    setModalShowFn: () => {},
    setModalTypeFn: () => {},
    setFullSizeModalFn: () => {},
    setViewTypeFn: () => {},
    setSearchValueFn: () => {},
    setGithubStatisticFn: () => {},
    setMostUsedLanguagesFn: () => {},
    setMyRepositoriesFn: () => {},
    setFilterRepositoriesFn: () => {},
};

export const PortfolioContext = createContext<ContextType>(contextDefaultValues);

const PortfolioProvider: FC = ({children}) => {
    const [modalShow, setModalShow] = useState<boolean>(contextDefaultValues.modalShow);
    const [modalType, setModalType] = useState<string>(contextDefaultValues.modalType);
    const [fullSizeModal, setFullSizeModal] = useState<boolean>(contextDefaultValues.fullSizeModal);
    const [viewType, setViewType] = useState<string>(contextDefaultValues.viewType);
    const [searchValue, setSearchValue] = useState<string>(contextDefaultValues.searchValue);
    const [githubStatistic, setGithubStatistic] = useState<GithubStatistics>(contextDefaultValues.githubStatistic);
    const [mostUsedLanguages, setMostUsedLanguages] = useState<MostUsedLanguages>(contextDefaultValues.mostUsedLanguages);
    const [myRepositories, setMyRepositories] = useState<MyRepositories>(contextDefaultValues.myRepositories);
    const [filteredRepositories, setFilteredRepositories] = useState<Array<RepositoryType>>(contextDefaultValues.filteredRepositories);

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
    const setGithubStatisticFn = (value: GithubStatistics) => {
        setGithubStatistic(value);
    }
    const setMostUsedLanguagesFn = (value: MostUsedLanguages) => {
        setMostUsedLanguages(value);
    }
    const setMyRepositoriesFn = (value: MyRepositories) => {
        setMyRepositories(value);
    }
    const setFilterRepositoriesFn = (value: Array<RepositoryType>) => {
        setFilteredRepositories(value);
    }
    return (
        <PortfolioContext.Provider value={{
            modalShow,
            modalType,
            fullSizeModal,
            viewType,
            searchValue,
            githubStatistic,
            mostUsedLanguages,
            myRepositories,
            filteredRepositories,
            setModalShowFn,
            setModalTypeFn,
            setFullSizeModalFn,
            setViewTypeFn,
            setSearchValueFn,
            setGithubStatisticFn,
            setMostUsedLanguagesFn,
            setMyRepositoriesFn,
            setFilterRepositoriesFn
        }}>
            {children}
        </PortfolioContext.Provider>
    );
}

export default PortfolioProvider;