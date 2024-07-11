export interface NodeData {
    id: string;
    type: string;
    description: string;
    detail: string;
    source?: string;
}

export interface EdgeData {
    from_: string;
    to: string;
    description: string;
}

export interface GraphData {
    nodes: NodeData[];
    edges: EdgeData[];
}
