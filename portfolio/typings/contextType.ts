import { langType } from "./languageTypes";
import { repositoriesType } from "./repoTypes";
import { statistics } from "./statisticsTypes";

export type githubStatisticsContext = {
    status: string;
    error: string | null;
    statistics: statistics | undefined;
}

export type topLangContext = {
    status: string;
    error: string | null;
    languagesArray: Array<langType>;
}

export type myRepositoryContext = {
    status: string;
    error: string | null;
    repositoriesArray: Array<repositoriesType>;
}

export type contextType = {
    modalShow: boolean;
    modalType: string;
    fullSizeModal: boolean;
    viewType: string;
    searchValue: string;
    githubStatistic: githubStatisticsContext;
    mostUsedLanguages: topLangContext;
    myRepositories: myRepositoryContext;
    filteredRepositories: Array<repositoriesType>;
    setModalShowFn: (show: boolean) => void;
    setModalTypeFn: (type: string) => void;
    setFullSizeModalFn: (fullSize: boolean) => void;
    setViewTypeFn: (viewType: string) => void;
    setSearchValueFn: (value: string) => void;
    setGithubStatisticFn: (statistic: githubStatisticsContext) => void;
    setMostUsedLanguagesFn: (languages: topLangContext) => void;
    setMyRepositoriesFn: (repositories: myRepositoryContext) => void;
    setFilterRepositoriesFn: (repositories: Array<repositoriesType>) => void;
}