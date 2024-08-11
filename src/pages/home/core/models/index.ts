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
