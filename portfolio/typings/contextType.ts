export type ContextType = {
    terminalText: string;
    modalShow: boolean;
    modalType: string;
    fullSizeModal: boolean;
    setModalShowFn: (show: boolean) => void;
    setModalTypeFn: (type: string) => void;
    setTerminalTextFn: (text: string) => void;
    setFullSizeModalFn: (fullSize: boolean) => void;
}