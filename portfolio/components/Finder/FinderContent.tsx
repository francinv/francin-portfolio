import React, { FC, useContext, useEffect } from "react";
import { PortfolioContext } from "../../features/AppContext";

const FinderContent: FC = () => {
    const { searchValue, viewType } = useContext(PortfolioContext);

    useEffect(() => {
        console.log(searchValue);
        console.log(viewType);
    }, [searchValue, viewType])
    
    return (
        <div>
            FinderContent
        </div>
    );
}

export default FinderContent;