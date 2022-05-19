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

/**
 * FinderContent is the main component in the Finder window. It renders all my projects with search functionality.
 * There is also possibility to switch between two views.
 * @returns JSX.Element
 */
const FinderContent: FC = () => {
    const { searchValue, viewType, myRepositories, setMyRepositoriesFn, setFilterRepositoriesFn} = useContext(PortfolioContext);
            
    useEffect(() => {

        /**
         * Function for fetching all repositories from GitHub. After fetching, it sets the repositories to the state.
         */
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

        // Fetch only if myRepositories.status is idle, this is to prevent fetching unneccessarily.
        if (myRepositories.status === 'idle') {
            fetchRepositories();
        }

        // Method for searching repositories, this function will only be run if the state is populated with repositories.
        if (myRepositories.status === 'success') {
            const unFilteredRepositories = myRepositories.repositoriesArray;
            if (searchValue) {
                // Use filter to filter the repositories based on the search value.
                const filteredRepositories = unFilteredRepositories.filter(function(repo) {
                    return repo.name.toLowerCase().includes(searchValue.toLowerCase()) || repo.languages.nodes.some(function(language) {
                        return language.name.toLowerCase().includes(searchValue.toLowerCase());
                    });
                });

                // After filtration, the state will be updated.
                setFilterRepositoriesFn(filteredRepositories);
            } else {

                // If there is no search value, the state will be updated with all repositories.
                setFilterRepositoriesFn(myRepositories.repositoriesArray);
            }
        }

        // useEffect will run every time searchValue, viewType or myRepositories changes.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue, viewType, myRepositories]);
    
    return (
        <div className={`${style.gallery_container} ${colorStyle.text_white}`}>
            {
                // Based on viewType state variable, render either SymbolView or GalleryView.
                viewType === "galleryView"
                ? <GalleryView />
                : <SymbolView />
            }
        </div>
    );
}

export default FinderContent;