"use strict";
const add_edge = (graph, from, to, cost) => {
    const edge = { from, to, cost };
    graph.push(edge);
};
const bellmanFord = (graph, v, start) => {
    const d = new Array(v);
    for (let j = 0; j < d.length; j++) {
        d[j] = Number.POSITIVE_INFINITY;
    }
    d[start] = 0;
    for (let i = 0; i < v; i++) {
        for (const edges of graph) {
            if ((d[edges.from] + edges.cost) < d[edges.to]) {
                d[edges.to] = d[edges.from] + edges.cost;
            }
        }
    }
    return d;
};
const E = 7;
const V = 5;
const start = 1;
var mainGraph = [];
add_edge(mainGraph, 1, 2, 6);
add_edge(mainGraph, 1, 3, 5);
add_edge(mainGraph, 2, 4, -1);
add_edge(mainGraph, 3, 2, -2);
add_edge(mainGraph, 3, 4, 4);
add_edge(mainGraph, 3, 5, 3);
add_edge(mainGraph, 4, 5, 3);
const d = bellmanFord(mainGraph, V, start);
for (let i = start; i < V; i++) {
    console.log(`The cost to getfrom node ${start} to ${i} is ${d[i]}`);
}
// bellmanFord(V, start);
