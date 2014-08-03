//connected components for undirected graph agorithm

var alg_module = ALGS.namespace('ALGS.graphs.undirected_algs');

(function(){

    alg_module.cc = function(graph, s){
    	
    	var CC = function(graph){
		    this.marked = [];
		    this.id = [];
		    this.count = 0;
		    
		    for (var i = 0; i < graph.getVectors(); i++){
		        if (graph.getAdj(i).length == 0) continue;

		        if (!this.marked[i]){

		            this.dfs(graph,i);
		            this.count++;
		        }
		    }
		    
		    console.log(this.id);
		}

		CC.prototype.dfs = function(graph, v){
		    this.marked[v] = true;
		    this.id[v] = this.count;
		    var edges = graph.getAdj(v);
		    for ( var i = 0; i < edges.length; i++ ){
		        if ( !this.marked[edges[i]] ){
		            this.dfs(graph, edges[i]);
		        }
		    } 
		}

		CC.prototype.getId = function(v){
		    return this.id[v];
		}

		return new CC(graph, s);
    }
})();