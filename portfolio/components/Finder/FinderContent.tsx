import React, { FC, useContext, useEffect, useState } from "react";
import { PortfolioContext } from "../../features/AppContext";
import SymbolView from "./SymbolView";
import { RepositoriesResponseType, RepositoryType } from "../../typings/commonTypes";
import style from "./Finder.module.css";
import GalleryView from "./GalleryView";
import { client } from "../../services/apolloConfig";
import { FETCH_REPOS } from "../../services/dataQueries";
import { ApolloQueryResult } from "@apollo/client";
import { MyRepositories } from "../../typings/contextType";

const FinderContent: FC = () => {
    const { searchValue, viewType, myRepositories, setMyRepositoriesFn, setFilterRepositoriesFn} = useContext(PortfolioContext);

    const fetchRepositories = async () => {
        const response: ApolloQueryResult<RepositoriesResponseType> = await client.query({query: FETCH_REPOS});
        if (response) {
            setMyRepositoriesFn({
                status: 'success',
                error: null,
                repositoriesArray: response.data.viewer.repositories.nodes,
            });
        }
    }
            
    useEffect(() => {
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
    }, [searchValue, viewType, myRepositories]);
    
    return (
        <div className={`${style.gallery_container}`}>
            {
                viewType === "galleryView"
                ? <GalleryView />
                : <SymbolView />
            }
        </div>
    );
}

export default FinderContent;