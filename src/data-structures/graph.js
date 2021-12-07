//Edge list - List of arrays

// Adjacent list - 

//Adjacent matrix -
// -----------

class Graph{
    //By adjacent list
    constructor(){
        this.value = null;
        this.adjacentList = {};
        this.nodes = 0;
    }

    addVertex(node){
        this.adjacentList[node] = [];
        this.nodes++;
    }

    addEdge(node1, node2){
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
}