/*
    Teste de percurso BFS (Breadth-First Search)
*/

import BinarySearchTree from "./BinarySearchTree.mjs";

const tree = new BinarySearchTree();

tree.insert(15)
tree.insert(10)
tree.insert(13)
tree.insert(7)
tree.insert(9)
tree.insert(2)
tree.insert(19)
tree.insert(17)
tree.insert(18)
tree.insert(16)
tree.insert(23)

let bfs = ''

tree.bfsTraversal(data => bfs += data + ' ')

console.log(bfs)