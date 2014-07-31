var DirectedGraph = function(){
    this.V = 0;
    this.adj = [];
};

DirectedGraph.prototype.initGraph = function(V){
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