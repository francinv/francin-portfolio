import React, { FC } from "react";
import style from "./Loading.module.css";
import layoutStyle from "../../../styles/layout.module.css";

const LoadingContainer: FC = ({ children }) => {
    return (
        <div className={`${style.loading_container} ${layoutStyle.flex_col} ${layoutStyle.center_all}`}>
            {children}
        </div>
    )
}

export default LoadingContainer;