import Graph from './Graph.mjs'

const grafo1 = new Graph()
const grafo2 = new Graph()
const grafo3 = new Graph(true)  // direcionado

// GRAFO 1 (não direcionado)

// (addEdge() cria os vértices automaticamente)

grafo1.addEdge('A', 'B')
grafo1.addEdge('A', 'C')
grafo1.addEdge('B', 'C')
grafo1.addEdge('C', 'D')
grafo1.addEdge('B', 'D')

// GRAFO 2 (não direcionado)

grafo2.addEdge('A', 'B')
grafo2.addEdge('B', 'C')
grafo2.addEdge('B', 'E')
grafo2.addEdge('D', 'E')
grafo2.addEdge('E', 'F')

// GRAFO 3 (direcionado)

grafo3.addEdge('A', 'B')
grafo3.addEdge('A', 'D')
grafo3.addEdge('B', 'D')
grafo3.addEdge('B', 'E')
grafo3.addEdge('C', 'B')
grafo3.addEdge('C', 'F')
grafo3.addEdge('D', 'C')
grafo3.addEdge('D', 'E')
grafo3.addEdge('E', 'F')
grafo3.addEdge('F', 'E')