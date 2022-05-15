import React, { FC } from "react";
import FinderContent from "./FinderContent";
import FinderToolbar from "./FinderToolbar";

const Finder: FC = () => {
    return (
        <div style={{height: '100%'}}>
            <FinderToolbar />
            <FinderContent />
        </div>
    );
}

export default Finder;