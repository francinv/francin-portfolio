import React, { FC } from "react";
import LoadingContainer from "./LoadingContainer";
import LoadingSpinner from "./LoadingSpinner";

/**
 * Loading component is used to show a loading animation.
 * @returns JSX.Element
 */
const Loading: FC = () => {
    return (
        <LoadingContainer>
            <LoadingSpinner />
        </LoadingContainer>
    )
}

export default Loading;