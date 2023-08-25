"use strict";
const add_edge = (graph, from, to, cost) => {
    const edge = { from, to, cost };
    graph.push(edge);
};
const bellmanFord = (graph, v, start) => {
    v = (start > 0) ? v + start : v;
    const d = new Array(v).fill(Number.POSITIVE_INFINITY);
    d[start] = 0;
    for (let i = start; i < v; i++) {
        for (const edges of graph) {
            if ((d[edges.from] + edges.cost) < d[edges.to]) {
                d[edges.to] = d[edges.from] + edges.cost;
            }
        }
    }
    return d;
};
const displayGraph = (start, v, algoResults) => {
    v = (start > 0) ? v + start : v;
    console.log(v);
    for (let i = start; i < v; i++) {
        console.log(`The cost to get from node ${start} to ${i} is ${algoResults[i]}`);
    }
};
const N = 5;
const E = 7;
const V = N - 1;
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
displayGraph(start, V, d);
// bellmanFord(V, start);
