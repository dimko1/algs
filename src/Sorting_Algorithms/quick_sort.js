var alg_module = ALGS.namespace('ALGS.sorting_algorithms');

(function(){
	
	alg_module.quick_sort = function(array){

		function partition(array, lo, hi){
			var i = lo, j = hi + 1;
	
			while(true){
				while(array[++i] < array[lo]){
					if ( i == hi ) break;
				}

				while (array[--j] > array[lo]){
					if ( j == lo ) break;
				}

				if (i >= j) break;

				array.swap(i,j);
			}

			array.swap(lo,j);
			return j;
		}

		function sort(array, lo, hi){
			if (hi <= lo) return;

			var j = partition(array, lo, hi);

			sort(array, lo, j-1);
			sort(array, j+1, hi);
		}

		sort(array, 0, array.length - 1);
		return array;
	}
})();


/*
quick_sort.getLargestByIndex = function(array, index){
	if (index > array.length) return -1;

	var lo = 0; 
	var hi = array.length - 1;

	while (hi > lo){
		var j = partition(array, lo, hi);

		if (j > index) hi = j - 1;
		else if (j < index ) lo = j + 1;
		else return array[j];
	}

	console.log(array);
	return array[j];
}*/
