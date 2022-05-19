import React, { FC } from "react";
import LoadingContainer from "./LoadingContainer";
import LoadingSpinner from "./LoadingSpinner";

const Loading: FC = () => {
    return (
        <LoadingContainer>
            <LoadingSpinner />
        </LoadingContainer>
    )
}

export default Loading;