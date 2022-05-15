import React, { FC, useContext, useEffect } from "react";
import { PortfolioContext } from "../../features/AppContext";
import SymbolView from "./SymbolView";
import sampleResponse from "../../assets/sampleResponse.json";
import { ResponseType } from "../../typings/commonTypes";
import paddingStyles from "../../styles/padding.module.css";
import style from "./Finder.module.css";
import GalleryView from "./GalleryView";

const FinderContent: FC = () => {
    const { searchValue, viewType } = useContext(PortfolioContext);
    const res = sampleResponse as ResponseType;

    useEffect(() => {
        console.log(searchValue);
        console.log(viewType);
    }, [searchValue, viewType])
    
    return (
        <div className={`${style.gallery_container}`}>
            {
                viewType === "galleryView"
                ? <GalleryView repositories={res.data.viewer.repositories.nodes} />
                : <SymbolView repositories={res.data.viewer.repositories.nodes}/>
            }
        </div>
    );
}

export default FinderContent;