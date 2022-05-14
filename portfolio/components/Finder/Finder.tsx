import React, { FC } from "react";
import FinderContent from "./FinderContent";
import FinderToolbar from "./FinderToolbar";

const Finder: FC = () => {
    return (
        <div>
            <FinderToolbar />
            <FinderContent />
        </div>
    );
}

export default Finder;