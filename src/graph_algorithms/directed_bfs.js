var alg_module = ALGS.namespace('ALGS.graphs.directed_algs');

(function(){

    alg_module.bfs = function(graph, s){
        var BFS = function(graph, s){
            this.visited = [];
            this.startingPoint = s;
            
            this.bfs(graph);
        }

        BFS.prototype.bfs = function(graph){
            var queue = [];
            
            this.visited[this.startingPoint] = true;
            queue.push(this.startingPoint);
            
            while(queue.length !== 0 ){
                var v = queue.shift();
                var edges = graph.getAdj(v);
                
                
                for (var i = 0; i < edges.length; i++){
                    if (!this.visited[edges[i]]){
                        queue.push(edges[i]);
                        this.visited[edges[i]] = true;
                    }
                }
            }
        }

        BFS.prototype.hasPathTo = function(v){
            return this.visited[v];
        }

        return new BFS(graph, s);
    }
})();




