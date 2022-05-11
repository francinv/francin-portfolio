import React, { FC } from "react";
import CVContent from "./CVContent";
import CVToolbar from "./CVToolbar";

const CV: FC = () => {
    return (
        <div>
            <CVToolbar />
            <CVContent />
        </div>
    )
}

export default CV;
