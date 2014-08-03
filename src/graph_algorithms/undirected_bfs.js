var alg_module = ALGS.namespace('ALGS.graphs.undirected_algs');

(function(){

    alg_module.bfs = function(graph, s){
        var BFS = function(graph, s){
            this.visited = [];
            this.edgeTo = [];
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
                        this.edgeTo[edges[i]] = v;
                    }
                }
            
            }
        }

        BFS.prototype.hasPathTo = function(v){
            console.log(this.visited);
            
            return this.visited[v];
        }

        BFS.prototype.getPathTo = function(v){
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


        return new BFS(graph, s);
    }
})();




