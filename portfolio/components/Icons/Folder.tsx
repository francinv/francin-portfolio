import React, { FC } from "react";

interface FolderProps {
    height: string;
}

export const FolderIcon: FC<FolderProps> = ({height}) => {
    return (
        <svg width="85" height={height} viewBox="0 0 85 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.08849 60H77.0878C78.7933 60 80.1763 58.617 80.1763 56.9115V9.4119C80.1763 7.70641 78.7933 6.32341 77.0878 6.32341H34.0681C32.4524 6.32341 30.9314 5.55911 29.9665 4.26244L27.8869 1.46849C27.1996 0.544231 26.1154 0 24.9635 0H7.08849C5.38301 0.000846394 4 1.38385 4 3.08934V56.9124C4 58.617 5.38301 60 7.08849 60Z" fill="#41AFE2"/>
            <g filter="url(#filter0_d_23_525)">
                <path d="M77.0869 60H7.08849C5.38301 60 4 58.617 4 56.9115V16.5512C4 14.8457 5.38301 13.4627 7.08849 13.4627H77.0878C78.7933 13.4627 80.1763 14.8457 80.1763 16.5512V56.9115C80.1754 58.617 78.7924 60 77.0869 60Z" fill="#66D2FD"/>
            </g>
            <path d="M76.0332 56.9614H8.14225C7.90865 56.9614 7.71905 56.7719 7.71905 56.5382C7.71905 56.3046 7.90865 56.1151 8.14225 56.1151H76.034C76.2676 56.1151 76.4572 56.3046 76.4572 56.5382C76.4572 56.7719 76.2676 56.9614 76.0332 56.9614Z" fill="#3BB0E2"/>
            <path d="M76.0332 53.498H8.14225C7.90865 53.498 7.71905 53.3084 7.71905 53.0748C7.71905 52.8412 7.90865 52.6516 8.14225 52.6516H76.034C76.2676 52.6516 76.4572 52.8412 76.4572 53.0748C76.4572 53.3084 76.2676 53.498 76.0332 53.498Z" fill="#4ABAEA"/>
            <defs>
                <filter id="filter0_d_23_525" x="0" y="5.46274" width="84.1763" height="54.5373" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="-4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23_525"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23_525" result="shape"/>
                </filter>
            </defs>
        </svg>
    )
}