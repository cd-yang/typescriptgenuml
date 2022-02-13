import * as React from 'react';
import * as ReactDOM from 'react-dom';
import factory from 'mxgraph';

export const mx = factory({
    mxBasePath: 'mxgraph',
});

ReactDOM.render(<div>Hello World</div>, document.getElementById('root'));

const container = document.getElementById('graph');
if (container) {
    container.style.position = 'relative';
    container.style.overflow = 'hidden';
    container.style.width = `500px`;
    container.style.height = `500px`;
    container.style.background = 'url(/images/grid.gif)';
    container.style.cursor = 'default';

    // Creates the graph inside the given container
    const graph = new mx.mxGraph(container);
    graph.setConnectable(true);

    // Specifies the default edge style
    graph.getStylesheet().getDefaultEdgeStyle().edgeStyle = 'orthogonalEdgeStyle';

    // Enables rubberband selection
    // new mx.RubberBandHandler(graph);

    // Gets the default parent for inserting new cells. This
    // is normally the first child of the root (ie. layer 0).
    const parent = graph.getDefaultParent();

    const v1 = graph.insertVertex(
        parent,
        'id',
        'Hello,',
        20, 20,
        80, 30,
        // geometryClass: MyCustomGeometryClass,
    );

    // Adds cells to the model in a single step
    // graph.batchUpdate(() => {
    //     const v1 = graph.insertVertex(
    //         parent,
    //         'Hello,',
    //         [20, 20],
    //         [80, 30],
    //         // geometryClass: MyCustomGeometryClass,
    //     );
    //     const v2 = graph.insertVertex({
    //         parent,
    //         value: 'World!',
    //         position: [200, 150],
    //         size: [80, 30],
    //         // geometryClass: MyCustomGeometryClass,
    //     });
    //     const e1 = graph.insertEdge({
    //         parent,
    //         value: '',
    //         source: v1,
    //         target: v2,
    //     });
    // });
}