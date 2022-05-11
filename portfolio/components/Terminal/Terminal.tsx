import React, { FC } from "react";
import TerminalContent from "./TerminalContent";
import TerminalToolbar from "./TerminalToolbar";

const Terminal: FC = () => {
    return (
        <>
            <TerminalToolbar />
            <TerminalContent />
        </>
    );
}

export default Terminal;