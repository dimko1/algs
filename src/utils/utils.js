
/**
 * current function is used to swap two elements in array
 * @param  {int} a index of the first element
 * @param  {int} b index of the second element
 */
Array.prototype.swap = function(a,b){
	var tmp = this[a];
	this[a] = this[b];
	this[b] = tmp;
}

/**
 * current function is used to randomly generate numbers
 * @param  {int} amount - amount of items to henerate
 */
Array.prototype.generate_numbers = function(amount){
	for (var i = 0; i < amount; i++ ){
		this[i] = Math.floor(Math.random() * amount + 1);
	}
}

/**
 * current function is used to shuffle array using knuth shuffle algorithm
 */
Array.prototype.knuth_shuffle = function() {

	var random = 0;
	for (var i = 1; i < this.length; i++){
		var random = Math.floor(Math.random() * i);
		//onsole.log(random);
		this.swap(i, random); 
	}
};

function PriorityQueue(){
}

PriorityQueue.prototype.array = [];

PriorityQueue.prototype.addItem = function(item){
	this.array.push(item);
}

PriorityQueue.prototype.generate_numbers = function(amount){
	this.array.generate_numbers(amount);
}

PriorityQueue.prototype.delMin = function(){
	if (this.array.length == 0) return -1;

	var min = 0;

	for (var i = 1; i < this.array.length; i++){
		if (this.array[min] > this.array[i]) min = i;
	}

	this.array.swap(min, this.array.length - 1 );
	return this.array.pop();
}

PriorityQueue.prototype.getNMax = function(n, data){
	for (var i = 0; i < data.length; i++){
		this.addItem(data[i]);

		if (this.array.length > n){
			this.delMin();
		}
	}

	return this.array;
}

PriorityQueue.prototype.testMethod = function(){
	console.log('test method');
}

/**
 * implementation of the quick sort algorithm
 */
Quicksort = function(){
	var quick_sort = {};

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
	}


	quick_sort.sortArray = function(array){
		sort(array, 0, array.length - 1);
		return array;
	}

	return quick_sort;
 
};