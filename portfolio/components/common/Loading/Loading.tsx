import React, { FC } from "react";
import LoadingContainer from "./LoadingContainer";
import LoadingSpinner from "./LoadingSpinner";
import colorStyle from "../../../styles/colors.module.css";

const Loading: FC = () => {
    return (
        <LoadingContainer>
            <LoadingSpinner />
        </LoadingContainer>
    )
}

export default Loading;