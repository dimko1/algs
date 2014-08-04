var alg_module = ALGS.namespace('ALGS.graphs.directed_algs');


(function(){
    alg_module.dfs = function(graph, s){
        //DEPTH FIRST SEARCH for directed graph. Well the same as for undirected
        var DFS = function(graph, s){
            this.visited = [];
            this.startingPoint = s;
            this.dfs(graph,s);
        };

        DFS.prototype.dfs = function(graph, v){
            this.visited[v] = true;
            var edges = graph.getAdj(v);
            for (var i = 0; i < edges.length; i++){
                if (!this.visited[edges[i]]){
                    this.dfs(graph, edges[i]);
                }
            }
        }

        DFS.prototype.hasPathTo = function(v){    
            return this.visited[v];
        }

        return new DFS(graph, s);
    }
})();
