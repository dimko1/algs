var UndirectedGraph = function(V){
    this.V = V;
    for (var v = 0 ; v < V ; v++){
        this.adj[v] = [];
    }
};

UndirectedGraph.prototype.addEdge = function(v,w){
    this.adj[v].push(w);
    this.adj[w].push(v);
};

UndirectedGraph.prototype.getAdj = function(v){
    return this.adj[v];
};

UndirectedGraph.prototype.getVectors = function(){
    return this.V;

};