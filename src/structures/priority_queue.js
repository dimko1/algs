function PriorityQueue(){
}

PriorityQueue.prototype.array = [];

PriorityQueue.prototype.addItem = function(item){
	this.array.push(item);
}

PriorityQueue.prototype.generate_numbers = function(amount){
	this.array.generate_numbers(amount);
}

PriorityQueue.prototype.delMax = function(){
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
