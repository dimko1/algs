//Topological sort for directed graph
var alg_module = ALGS.namespace('ALGS.graphs.directed_algs');

(function(){

    alg_module.tsort = function(graph){
        var TSort = function(graph){
            this.visited = [];
            this.reversePost = [];

            for (var i = 0; i < graph.getV(); i++){
                if (!this.visited[i]){
                    this.dfs(graph, i);
                }
            }
        }

        TSort.prototype.getReversed = function() {
            return this.reversePost;
        };

        TSort.prototype.dfs = function(graph, v){
            this.visited[v] = true;

            var edges = graph.getAdj(v);

            for (var i = 0; i < edges.length; i++){
                if (!this.visited[edges[i]]){
                    this.dfs(graph, edges[i]);
                }
            }
            this.reversePost.push(v);
        }

        return new TSort(graph);
    }
})();




