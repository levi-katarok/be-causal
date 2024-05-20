import React from 'react';
import { useParams } from 'react-router-dom';

import { useGraphData } from '../contexts/GraphDataContext';

const NodeDetails: React.FC = () => {
    const { nodes } = useGraphData();
    const { nodeId } = useParams<{ nodeId: string }>();
    const node = nodes.find(n => n.id === nodeId);
    console.log('node', node);
    if (!node) {
        return <div>Node not found</div>;
    }

    return (
        <div>
            <h1><b>Description:</b> {node.description}</h1>
            <p><b>Detail</b>: {node.detail}</p>
            <p> <b>Source:</b> {node.source && <a href={node.source} target="_blank" rel="noopener noreferrer">{node.source}</a>}</p>
        </div>
    );
};

export default NodeDetails;
