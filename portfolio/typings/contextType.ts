export type ContextType = {
    terminalText: string;
    modalShow: boolean;
    modalType: string;
    fullSizeModal: boolean;
    viewType: string;
    searchBarPlaceholder: string;
    searchValue: string;
    setModalShowFn: (show: boolean) => void;
    setModalTypeFn: (type: string) => void;
    setTerminalTextFn: (text: string) => void;
    setFullSizeModalFn: (fullSize: boolean) => void;
    setViewTypeFn: (viewType: string) => void;
    setSearchBarPlaceholderFn: (placeholder: string) => void;
    setSearchValueFn: (value: string) => void;
}