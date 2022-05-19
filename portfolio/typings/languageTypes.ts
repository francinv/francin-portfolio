export type langType = {
    name: string;
    color: string;
    size: number;
}

export type languageEdge = {
    size: number,
    node: {
        color: string,
        name: string
    }
}

export type languageNode = {
    languages: {
        totalSize: number,
        edges: languageEdge[]
    }
}