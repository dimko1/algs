//var num = [];

function fillnumbers(amount){
	for (var i = 0 ; i < amount; i++){
		num[i] = Math.floor(Math.random() * 100 + 1);
	}
}

function setvals(val){
	num.push(val);
}


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

	console.log(result);

	return result.concat(left.slice(il)).concat(right.slice(ir));
}

function mergeSort(items){

	if (items.length < 2){
		return items;
	}

	var middle = Math.floor(items.length / 2);

	var left = items.slice(0, middle);
	var right = items.slice(middle);


	var params = merge(mergeSort(left), mergeSort(right)); 

	params.unshift(0, items.length);
	items.splice.apply(items, params);

	return items;
}

var bin_tree = new BinaryTree();


bin_tree.addNode(50, 'F');
bin_tree.addNode(10, 'B');
bin_tree.addNode(4, 'A');
bin_tree.addNode(25, 'D');
bin_tree.addNode(24, 'C');
bin_tree.addNode(26, 'E');
bin_tree.addNode(70, 'G');
bin_tree.addNode(72, 'I');
bin_tree.addNode(71, 'H');

console.log(bin_tree.traversePostOrder());


/*var key1 = {};
var key2 = {};
var o = {};
o[key1] = "First";
o[key2] = "Second";
alert( o[key1] );*/



//var binary_heap = new BinaryHeap();
//var num = new Array();
//num.generate_numbers(100);

//for (var i = 0 ; i < num.length; i++){
//	binary_heap.insert(num[i]);
//}

//binary_heap.print();

//for (var i = 0 ; i < 100; i++){
//	console.log(binary_heap.getMax());
//}
//var num = new Array();
//num.generate_numbers(100);
//console.log(num);

//num.knuth_shuffle();
//console.log(num);


//var s = Quicksort();
//var a = s.getLargestByIndex(num, 11);

/*var pq = new PriorityQueue();

var timeNow = new Date();
num.generate_numbers(1000000);

var timeAfter = new Date();

var interval  = new Date();
interval.setTime( timeAfter.getTime() - timeNow.getTime());

console.log('Time elapsed for generation is ' + interval.getMilliseconds());

timeNow = new Date();
//pq.generate_numbers(100);

//console.log(pq);

console.log(pq.getNMax(5, num));

timeAfter = new Date();
interval.setTime(timeAfter.getTime() - timeNow.getTime());
console.log('Time elapsed for sorting is ' + interval.getMilliseconds());



console.log(pq);
//s.sortArray(num);

//console.log(a);
//console.log(num);*/

