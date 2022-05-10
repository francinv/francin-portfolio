import React, { FC } from "react";
import TerminalContent from "./TerminalContent";
import TerminalToolbar from "./TerminalToolbar";

interface TerminalProps {
    handleShow: () => void;
    handleEnhance: () => void;
}

const Terminal: FC<TerminalProps> = ({handleEnhance, handleShow}) => {
    return (
        <>
            <TerminalToolbar handleEnhance={handleEnhance} handleShow={handleShow} />
            <TerminalContent />
        </>
    );
}

export default Terminal;