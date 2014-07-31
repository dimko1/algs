BinaryHeap = function(){

}

BinaryHeap.prototype.data = [];

BinaryHeap.prototype.insert = function(value) {
	if (this.data.length == 0) this.data.length = 1;
	
	this.data[this.data.length] = value;

	this.swim(this.data.length);
}

BinaryHeap.prototype.swim = function(k){
	var current_element = k - 1;
	var parent = Math.floor(current_element / 2);

	while ( current_element > 1 && this.data[parent] < this.data[current_element]){
		this.data.swap(current_element, parent);
		current_element = parent;
		parent = Math.floor(parent / 2);
	}
}


BinaryHeap.prototype.sink = function(k){
	while ( 2 * k < this.data.length){
		var child = 2 * k;

		if ( child < this.data.length && this.data[child] < this.data[child + 1]) child++;

		if (this.data[child] > this.data[k]) this.data.swap(child, k);

		k = child;
	}
}

BinaryHeap.prototype.getMax = function(){
	var max = this.data[1];

	this.data.swap(1, this.data.length - 1);

	this.data.length = this.data.length - 1;

	this.sink(1);

	return max;
}

BinaryHeap.prototype.length = function(){
	return this.data.length;
}

BinaryHeap.prototype.print = function(){
	console.log(this.data);
}
