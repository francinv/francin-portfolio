import { LanguageType, RepositoryType } from "./commonTypes";

export type GithubStatistics = {
    stars: number;
    commits: number;
    prs: number;
    issues: number;
    contributions: number;
    status: string;
    error: string | null;
}

export type MostUsedLanguages = {
    status: string;
    error: string | null;
    languagesArray: Array<LanguageType>;
}

export type MyRepositories = {
    status: string;
    error: string | null;
    repositoriesArray: Array<RepositoryType>;
}

export type ContextType = {
    modalShow: boolean;
    modalType: string;
    fullSizeModal: boolean;
    viewType: string;
    searchValue: string;
    githubStatistic: GithubStatistics;
    mostUsedLanguages: MostUsedLanguages;
    myRepositories: MyRepositories;
    filteredRepositories: Array<RepositoryType>;
    setModalShowFn: (show: boolean) => void;
    setModalTypeFn: (type: string) => void;
    setFullSizeModalFn: (fullSize: boolean) => void;
    setViewTypeFn: (viewType: string) => void;
    setSearchValueFn: (value: string) => void;
    setGithubStatisticFn: (statistic: GithubStatistics) => void;
    setMostUsedLanguagesFn: (languages: MostUsedLanguages) => void;
    setMyRepositoriesFn: (repositories: MyRepositories) => void;
    setFilterRepositoriesFn: (repositories: Array<RepositoryType>) => void;
}