var SORTING_ALGORITHMS = SORTING_ALGORITHMS || {};

(function(){

	SORTING_ALGORITHMS.selection_sort = function(array){
		var length = array.length;

		for (var i = 0; i < length; i++){
			var min = i;


			for (var j = i + 1 ; j < length; j++){
				if (array[min] > array[j]){
					min = j;
				}
			}
			array.swap(i,min);
		}

		return array;
	}
})();