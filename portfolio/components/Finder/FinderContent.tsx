import React, { FC, useContext, useEffect } from "react";
import { PortfolioContext } from "../../features/AppContext";
import SymbolView from "./SymbolView";
import sampleResponse from "../../assets/sampleResponse.json";
import { ResponseType } from "../../typings/commonTypes";
import paddingStyles from "../../styles/padding.module.css";

const FinderContent: FC = () => {
    const { searchValue, viewType } = useContext(PortfolioContext);
    const res = sampleResponse as ResponseType;

    useEffect(() => {
        console.log(searchValue);
        console.log(viewType);
    }, [searchValue, viewType])
    
    return (
        <div className={paddingStyles.px_35}>
            {
                viewType === "galleryView"
                ? null
                : <SymbolView repositories={res.data.viewer.repositories.nodes}/>
            }
        </div>
    );
}

export default FinderContent;