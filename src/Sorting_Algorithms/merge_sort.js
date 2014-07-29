var SORTING_ALGORITHMS = SORTING_ALGORITHMS || {};

(function(){
	
	SORTING_ALGORITHMS.merge_sort = function(array){
		

		function merge(left, right){
			var result = [];
			var il = 0;
			var ir = 0;

			while (il < left.length && ir < right.length){
				if (left[il] < right[ir]){
					result.push(left[il++]);
				} else {
					result.push(right[ir++]);
				}
			}
			return result.concat(left.slice(il)).concat(right.slice(ir));
		}

		function merge_sort(items){
			if (items.length < 2){
				return items;
			}

			var middle = Math.floor(items.length / 2);

			var left = items.slice(0, middle);
			var right = items.slice(middle);


			var params = merge(merge_sort(left), merge_sort(right)); 

			params.unshift(0, items.length);
			items.splice.apply(items, params);

			return items;
		}

		return merge_sort(array);
	}
})();

