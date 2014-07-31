var DirectedGraph = function(V){
    this.V = V;
    for (var v = 0 ; v < V ; v++){
        this.adj[v] = [];
    }
};

DirectedGraph.prototype.addEdge = function(v,w){
    this.adj[v].push(w);
};

DirectedGraph.prototype.getAdj = function(v){
    return this.adj[v];
};

DirectedGraph.prototype.getV = function(){
    return this.V;
};