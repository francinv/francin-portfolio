import React, { FC, useContext, useEffect, useState } from "react";
import { PortfolioContext } from "../../features/AppContext";
import SymbolView from "./SymbolView";
import sampleResponse from "../../assets/sampleResponse.json";
import { ResponseType } from "../../typings/commonTypes";
import style from "./Finder.module.css";
import GalleryView from "./GalleryView";

const FinderContent: FC = () => {
    const res = sampleResponse as ResponseType;
    const [repositories, setRepositories] = useState(res.data.viewer.repositories.nodes);
    const { searchValue, viewType } = useContext(PortfolioContext);

    useEffect(() => {
        const unFilteredRepositories = res.data.viewer.repositories.nodes;
        if (searchValue) {
            const filteredRepositories = unFilteredRepositories.filter(function(repo) {
                return repo.name.toLowerCase().includes(searchValue.toLowerCase()) || repo.languages.nodes.some(function(language) {
                    return language.name.toLowerCase().includes(searchValue.toLowerCase());
                });
            });
            setRepositories(filteredRepositories);
        } else {
            setRepositories(res.data.viewer.repositories.nodes);
        }
    }, [searchValue, viewType])
    
    return (
        <div className={`${style.gallery_container}`}>
            {
                viewType === "galleryView"
                ? <GalleryView repositories={repositories} />
                : <SymbolView repositories={repositories}/>
            }
        </div>
    );
}

export default FinderContent;