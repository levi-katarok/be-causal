import CytoscapeComponent from "react-cytoscapejs";
import { ElementDefinition } from 'cytoscape';
import React, { useEffect, useState } from 'react';
import Cytoscape, { EventObject, Core } from 'cytoscape';
import COSEBilkent from 'cytoscape-cose-bilkent';
import { Loader, StyledInput, StyledButton, SearchContainer } from 'components/CausalGraph/CausalGraph.styles';
import { useGraphData } from '../../contexts/GraphDataContext';
import { useNavigate } from 'react-router-dom';
import { NodeData, EdgeData } from  'types/index';

Cytoscape.use(COSEBilkent);

interface MyGraphProps {
    elements: ElementDefinition[];
}

// interface EdgeData {
//     from_: string;
//     to: string;
//     description: string;
// }

const MyGraph: React.FC<MyGraphProps & { layoutKey: number }> = ({ elements, layoutKey }) => {
    const navigate = useNavigate();

    const handleNodeClick = (event: EventObject) => {
        const nodeData = event.target.data();
        navigate(`/details/${nodeData.id}`);
    };

    return (
        <CytoscapeComponent
            key={layoutKey}
            elements={elements}
            style={{ width: '100%', height: '600px' }}
            cy={(cy: Core) => {
                cy.off('click', 'node');
                cy.on('click', 'node', handleNodeClick);
            }}
            layout={{
                name: 'cose-bilkent',
                idealEdgeLength: 100,
                nodeRepulsion: 420000000,
                edgeElasticity: 100,
                gravity: 80,
                numIter: 1000,
            }}
            stylesheet={[
                {
                    selector: 'node',
                    style: {
                        'background-color': '#0074D9',
                        'label': 'data(label)',
                        'text-valign': 'center',
                        'text-halign': 'center',
                        'color': '#000',
                        'font-size': 12,
                    }
                },
                {
                    selector: 'edge',
                    style: {
                        'width': 10,
                        'line-color': '#7FDBFF',
                        'target-arrow-color': '#7FDBFF',
                        'target-arrow-shape': 'triangle',
                        'curve-style': 'bezier',
                        'label': 'data(label)',
                    }
                }
            ]}
        />
    );
};

const GraphComponent: React.FC = () => {
    const { nodes, setNodes } = useGraphData();
    const [elements, setElements] = useState<ElementDefinition[]>([]);
    const [layoutKey, setLayoutKey] = useState(0);
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (nodes.length > 0) {
            const transformedNodes = nodes.map((node) => ({
                data: { id: node.id, label: node.description }
            }));
            setElements((prevElements) => [...prevElements, ...transformedNodes]);
        }
    }, [nodes]);

    const fetchData = () => {
        setIsLoading(true);
        const url = `/parser`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_query: query }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const transformedNodes = data.nodes.map((node: NodeData) => ({
                data: { id: node.id, label: node.description }
            }));
            const transformedEdges = data.edges.map((edge: EdgeData) => ({
                data: { source: edge.from_, target: edge.to, label: edge.description }
            }));

            setIsLoading(false);
            setTimeout(() => {
                const newElements = [...transformedNodes, ...transformedEdges];
                setElements(newElements);
                setLayoutKey(prevKey => prevKey + 1);
                setNodes(data.nodes); // Set the nodes in the context
            }, 500);
        })
        .catch(error => {
            console.error('Error:', error);
            setIsLoading(false);
        });
    };

    return (
        <div>
            <SearchContainer>
                <StyledInput
                    type="text"
                    value={query}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
                    placeholder="Enter query"
                />
                <StyledButton onClick={fetchData} disabled={isLoading}>
                    {isLoading ? "Loading..." : "Search"}
                </StyledButton>
                {isLoading && <Loader />}
            </SearchContainer>
            <MyGraph elements={elements} layoutKey={layoutKey} />
        </div>
    );
};

export default GraphComponent;
