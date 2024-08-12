export type stateForCategoryTreeType = {
    checked: boolean;
    indeterminate: boolean;
}

export type nodesType = {
    children: nodesType[];
    id: string;
    originalId: string;
    parent: string | null;
    state: stateForCategoryTreeType;
    text: string;
}

export type categoryDataType = {
    id: string,
    name: string,
    productId: string,
    children: object[]
}

export type rootsTreeType = {
    product1: string[],
    product2: string[],
    [key: string]: string[]
}

export type payloadDataType = {
    name: string,
    description: string,
    active: boolean,
    actionIds: string[]
}

export type actionListItemType = {
    id: string;
    title: string,
    actionListFilter: object[],
}

export type nodeItemType = {
    originalId: string;
    actionListFilter: object[],
    text: string,
    state: {
        checked: boolean;
    };
}
