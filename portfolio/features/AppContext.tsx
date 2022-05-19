import React, { createContext, FC, useState } from "react";
import { contextType, githubStatisticsContext, topLangContext, myRepositoryContext } from "../typings/contextType";
import { repositoriesType } from "../typings/repoTypes";

/**
 * Context default values for the application. This is the values that will be active when the application is started.
 */
const contextDefaultValues: contextType = {
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

export const PortfolioContext = createContext<contextType>(contextDefaultValues);

/**
 * Provider of the application context.
 * @param children of the component.
 * @returns JSX.Element
 */
const PortfolioProvider: FC = ({children}) => {
    const [modalShow, setModalShow] = useState<boolean>(contextDefaultValues.modalShow);
    const [modalType, setModalType] = useState<string>(contextDefaultValues.modalType);
    const [fullSizeModal, setFullSizeModal] = useState<boolean>(contextDefaultValues.fullSizeModal);
    const [viewType, setViewType] = useState<string>(contextDefaultValues.viewType);
    const [searchValue, setSearchValue] = useState<string>(contextDefaultValues.searchValue);
    const [githubStatistic, setGithubStatistic] = useState<githubStatisticsContext>(contextDefaultValues.githubStatistic);
    const [mostUsedLanguages, setMostUsedLanguages] = useState<topLangContext>(contextDefaultValues.mostUsedLanguages);
    const [myRepositories, setMyRepositories] = useState<myRepositoryContext>(contextDefaultValues.myRepositories);
    const [filteredRepositories, setFilteredRepositories] = useState<Array<repositoriesType>>(contextDefaultValues.filteredRepositories);

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
    const setGithubStatisticFn = (value: githubStatisticsContext) => {
        setGithubStatistic(value);
    }
    const setMostUsedLanguagesFn = (value: topLangContext) => {
        setMostUsedLanguages(value);
    }
    const setMyRepositoriesFn = (value: myRepositoryContext) => {
        setMyRepositories(value);
    }
    const setFilterRepositoriesFn = (value: Array<repositoriesType>) => {
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