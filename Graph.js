/*
    Classe Graph
    Implementa uma representação computacional para grafos
    usando lista de adjacência
*/
export default class Graph {

    // Atributos privados
    #isDirected     // Direcionado?
    #isWeighted     // Arestas com peso?
    #adjMap         // Mapa de adjacência

    constructor(isDirected = false, isWeighted = false) {
        this.#isDirected = isDirected
        this.#isWeighted = isWeighted
        this.#adjMap = new Map()
    }

    // Adiciona um novo vértice no grafo
    addVertex(label) {
        // Adiciona apenas se o vértice ainda não existir
        if(! this.#adjMap.has(label)) {
            // Vértice não existe, vamos criá-lo
            this.#adjMap.set(label, new Set())

            // console.log('Mapa => ', this.#adjMap)
        }
    }

    // Adiciona uma nova aresta no grafo
    addEdge(origin, dest, label = null, weight = null) {

        // Verifica se o vértice de origem existe;
        // se não existir, cria-o
        if(! this.#adjMap.has(origin)) this.addVertex(origin)

        // Verifica se o vértice de destino existe;
        // se não existir, cria-o
        if(! this.#adjMap.has(dest)) this.addVertex(dest)

        let edge = `${dest}|${label}|${weight}`, adjSet

        // 1. Adiciona a aresta sentido origem -> destino
        
        // Obtém o conjunto de arestas do vértice de origem
        adjSet = this.#adjMap.get(origin)
        adjSet.add(edge)    // Adiciona a nova aresta ao conjunto

        // 2. Se o grafo NÃO for direcionado, adiciona também
        // uma aresta no sentido origem <- destino

        if(! this.#isDirected) {
            edge = `${origin}|${label}|${weight}`
            adjSet = this.#adjMap.get(dest)
            adjSet.add(edge)
        }

        console.log('Mapa => ', this.#adjMap)
    }

    // Testa se o vértice especificado existe ou não no grafo
    hasVertex(label) {
        return this.#adjMap.has(label)
    }

    // Testa se a aresta informada existe ou não no grafo
    hasEdge(origin, dest, label = null, weight = null) {
        let edge = `${dest}|${label}|${weight}`
        // Percorre cada um dos vértices de origem no mapa
        for(let key of this.#adjMap.keys()) {
            if(key === origin) {
                // Obtém o conjunto de arestas do vértice origin
                let adjSet = this.#adjMap.get(origin)
                if(adjSet.has(edge)) return true
            }
        }
        return false
    }

}

//////////////////////////////////////////////////////

// let g = new Graph()

// console.log(g)

// g.addVertex('A')
// g.addVertex('B')
// g.addVertex('C')

// g.addEdge('A', 'B')
// g.addEdge('B', 'C')
// g.addEdge('A', 'C')
// g.addEdge('C', 'A')
// g.addEdge('D', 'A')

// console.log('Existe o vértice C?', g.hasVertex('C'))
// console.log('Existe o vértice F?', g.hasVertex('F'))
// console.log('Existe a aresta A-C?', g.hasEdge('A', 'C'))
// console.log('Existe a aresta D-B?', g.hasEdge('D', 'B'))