import { FC } from "react";

export interface ToolbarIconProps {
    iconVisible: boolean;
}

export const CrossIcon: FC<ToolbarIconProps> = ({iconVisible}) => {
    if (iconVisible) {
        return (
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7.5" cy="7.5" r="7.5" fill="#FC615C"/>
                <path d="M11.25 3.75L3.75 11.25" stroke="#9A070E" strokeLinecap="square" strokeLinejoin="round"/>
                <path d="M3.75 3.75L11.25 11.25" stroke="#9A070E" strokeLinecap="square" strokeLinejoin="round"/>
            </svg>
        )
    } else {
        return (
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7.5" cy="7.5" r="7.5" fill="#FC615C"/>
            </svg>
        );
    }
}

export const MinusIcon: FC<ToolbarIconProps> = ({iconVisible}) => {
    if (iconVisible) {
        return (
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7.5" cy="7.5" r="7.5" fill="#FCBB40"/>
                <line x1="2" y1="7.5" x2="13" y2="7.5" stroke="#B06E1D"/>
            </svg>
        );
    } else {
        return (
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7.5" cy="7.5" r="7.5" fill="#FCBB40"/>
            </svg>
        );
    }
}

export const EnhanceIcon: FC<ToolbarIconProps> = ({iconVisible}) => {
    if(iconVisible) {
        return (
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7.5" cy="7.5" r="7.5" fill="#34C648"/>
                <path d="M9.84169 10.0927L4.90512 9.92031L10.0767 5.09784L9.84169 10.0927Z" fill="#09610B"/>
                <path d="M4.62853 4.37709L9.5651 4.54948L4.3935 9.37195L4.62853 4.37709Z" fill="#09610B"/>
            </svg>
        );
    } else {
        return (
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7.5" cy="7.5" r="7.5" fill="#34C648"/>
            </svg>
        );
    }
}


