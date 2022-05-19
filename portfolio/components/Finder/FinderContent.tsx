import React, { FC, useContext, useEffect } from "react";
import { PortfolioContext } from "../../features/AppContext";
import SymbolView from "./SymbolView";
import style from "./Finder.module.css";
import colorStyle from "../../styles/colors.module.css";
import GalleryView from "./GalleryView";
import { client } from "../../services/apolloConfig";
import { FETCH_REPOS } from "../../services/dataQueries";
import { ApolloQueryResult } from "@apollo/client";
import { repoResponse } from "../../typings/responseTypes";

const FinderContent: FC = () => {
    const { searchValue, viewType, myRepositories, setMyRepositoriesFn, setFilterRepositoriesFn} = useContext(PortfolioContext);
            
    useEffect(() => {
        const fetchRepositories = async () => {
            const response: ApolloQueryResult<repoResponse> = await client.query({query: FETCH_REPOS});
            if (response) {
                setMyRepositoriesFn({
                    status: 'success',
                    error: null,
                    repositoriesArray: response.data.viewer.repositories.nodes,
                });
            }
        }

        if (myRepositories.status === 'idle') {
            fetchRepositories();
        }
        if (myRepositories.status === 'success') {
            const unFilteredRepositories = myRepositories.repositoriesArray;
            if (searchValue) {
                const filteredRepositories = unFilteredRepositories.filter(function(repo) {
                    return repo.name.toLowerCase().includes(searchValue.toLowerCase()) || repo.languages.nodes.some(function(language) {
                        return language.name.toLowerCase().includes(searchValue.toLowerCase());
                    });
                });
                setFilterRepositoriesFn(filteredRepositories);
            } else {
                setFilterRepositoriesFn(myRepositories.repositoriesArray);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue, viewType, myRepositories]);
    
    return (
        <div className={`${style.gallery_container} ${colorStyle.text_white}`}>
            {
                viewType === "galleryView"
                ? <GalleryView />
                : <SymbolView />
            }
        </div>
    );
}

export default FinderContent;