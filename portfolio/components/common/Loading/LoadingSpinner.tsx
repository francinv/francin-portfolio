import React, { FC } from "react";
import style from "./Loading.module.css";

const LoadingSpinner: FC = () => {
    return (
        <div className={`${style.spinner}`}>
            <div className={`${style.spinner_blade}`}></div>
            <div className={`${style.spinner_blade}`}></div>
            <div className={`${style.spinner_blade}`}></div>
            <div className={`${style.spinner_blade}`}></div>
            <div className={`${style.spinner_blade}`}></div>
            <div className={`${style.spinner_blade}`}></div>
            <div className={`${style.spinner_blade}`}></div>
            <div className={`${style.spinner_blade}`}></div>
            <div className={`${style.spinner_blade}`}></div>
            <div className={`${style.spinner_blade}`}></div>
            <div className={`${style.spinner_blade}`}></div>
            <div className={`${style.spinner_blade}`}></div>
        </div>
    )
}

export default LoadingSpinner;