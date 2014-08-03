var alg_module = ALGS.namespace('ALGS.graphs.undirected_algs');


(function(){
    alg_module.dfs = function(graph, s){
        //DEPTH FIRST SEARCH for undirected graph
        var DFS = function(graph, s){
            this.visited = [];
            this.edgeTo = [];

            this.startingPoint = s;
            
            this.dfs(graph,s);
        };

        DFS.prototype.dfs = function(graph, v){
            this.visited[v] = true;
            var edges = graph.getAdj(v);
            for (var i = 0; i < edges.length; i++){
                if (!this.visited[edges[i]]){
                    this.dfs(graph, edges[i]);
                    this.edgeTo[edges[i]] = v;
                }
            }
        }

        DFS.prototype.hasPathTo = function(v){    
            return this.visited[v];
        }

        DFS.prototype.getPathTo = function(v){
            if (!this.hasPathTo(v)){
                return null;
            }
            
            var path = [];
            for (var x = v; x != this.startingPoint; x = this.edgeTo[x]){
                path.push(x);
            }
            
            path.push(this.startingPoint);
            return path;
        }

        return new DFS(graph, s);
    }
})();
