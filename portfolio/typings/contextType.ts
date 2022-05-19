export type ContextType = {
    modalShow: boolean;
    modalType: string;
    fullSizeModal: boolean;
    viewType: string;
    searchValue: string;
    setModalShowFn: (show: boolean) => void;
    setModalTypeFn: (type: string) => void;
    setFullSizeModalFn: (fullSize: boolean) => void;
    setViewTypeFn: (viewType: string) => void;
    setSearchValueFn: (value: string) => void;
}