import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// interface NodeData {
//     id: string;
//     type: string;
//     description: string;
//     detail: string;
//     source?: string;
// }
import { NodeData, EdgeData } from 'types/index'; // Using alias for types

interface GraphDataContextValue {
    nodes: NodeData[];
    setNodes: React.Dispatch<React.SetStateAction<NodeData[]>>;
}

interface GraphDataProviderProps {
    children: React.ReactNode;
}

const GraphDataContext = createContext<GraphDataContextValue | undefined>(undefined);

export const useGraphData = () => {
    const context = useContext(GraphDataContext);
    if (!context) {
        throw new Error('useGraphData must be used within a GraphDataProvider');
    }
    return context;
};

export const GraphDataProvider: React.FC<GraphDataProviderProps> = ({ children }) => {
    const [nodes, setNodes] = useState<NodeData[]>(() => {
        const savedNodes = localStorage.getItem('graphNodes');
        return savedNodes ? JSON.parse(savedNodes) : [];
    });

    useEffect(() => {
        localStorage.setItem('graphNodes', JSON.stringify(nodes));
    }, [nodes]);

    return (
        <GraphDataContext.Provider value={{ nodes, setNodes }}>
            {children}
        </GraphDataContext.Provider>
    );
};
