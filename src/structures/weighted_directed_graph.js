var WDEdge = function(v, w, weight){
	this.from = v;
	this.to = w;
	this.weight = weight;
}

var WDGraph = function(V){
	this.adj = [];

    this.V = V;
    for (var v = 0 ; v < V ; v++){
        this.adj[v] = [];
    }
}

WDGraph.prototype.addEdge = function(e){
	this.adj[e.from].push(e);
}

WDGraph.prototype.adj = function(v){
	return this.adj[v];
} 

WDGraph.prototype.print = function(){
	for (var i = 0; i < this.adj.length; i++){
		var e = this.adj[i];

		for (var j = 0; j < e.length; j++){
			var element = e[j];
			console.log(element.from + '->' + element.to, ':', element.weight);
		}
		
	}
}