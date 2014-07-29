Node = function(key, value){
	this.key = key;
	this.value = value;
	this.left = null;
	this.right = null;
	this.count = 0;
}


BinaryTree = function(){

}

BinaryTree.prototype.root = null;

BinaryTree.prototype.addNode = function(key, value){
	this.root = this.putNode( this.root, key, value );
}

BinaryTree.prototype.putNode = function(node, key, value){
	if ( !node ) return new Node(key, value);


	if (node.key > key ){
		node.left = this.putNode( node.left, key, value);
	} else if (node.key < key) {
		node.right = this.putNode(node.right, key, value);
	} else if (node.key == key){
		node.value = value;
	}

	node.count = 1 + getSize(node.left) + getSize(node.right);

	return node;
}


BinaryTree.prototype.getNode = function(key){

	var currentNode = this.root;

	while (currentNode != null){
		if (currentNode.key > key) currentNode = currentNode.left;
		else if (currentNode.key < key) currentNode = currentNode.right;
		else if (currentNode.key == key ) return currentNode;
	}

	return null;
}


BinaryTree.prototype.floor = function(key){
	var n = getFloor(this.root, key);
	return n;
}

BinaryTree.prototype.ceil = function(key){
	var n = getCeil(this.root, key);
	return n;
}

BinaryTree.prototype.traverse = function(){
	var array = [];

	traverseTree(this.root, array);

	return array;
}

BinaryTree.prototype.traverseInOrder = function(){
	var array = [];

	traverseTreeInOrder(this.root, array);

	return array;
}

BinaryTree.prototype.traversePreOrder = function(){
	var array = [];

	traverseTreePreOrder(this.root, array);

	return array;
}

BinaryTree.prototype.traversePostOrder = function(){
	var array = [];

	traverseTreePostOrder(this.root, array);

	return array;
}

BinaryTree.prototype.deleteMin = function(){
	deleteMin(this.root);
}

BinaryTree.prototype.deleteNode = function(key){
	this.root = deleteNode(this.root, key);
}

BinaryTree.prototype.getMinNode = function(){
	return getMin(this.root);
}

BinaryTree.prototype.getRoot = function(){
	return this.root;
}

function deleteNode(node, key){
	if (!node) return null;

	if (node.key > key) node.left = deleteNode(node.left, key);
	else if (node.key < key) node.right = deleteNode(node.right, key);
	else {
		if (!node.right) return node.left;
		if (!node.left) return node.right;

		var t = node;

		node = getMin(t.right);
		node.right = deleteMin(t.right);

		node.left = t.left;
	}

	node.count = 1 + getSize(node.left) + getSize(node.right);

	return node;
}

/**
 * recursively search for node with minimum key
 */
function getMin(node){
	
	if (!node.left) return node;

	return getMin(node.left); 
}

/**
 * recursive function used to delete minimal item in the tree
 * recuresively we are checking if node has left child. if no - return right child.
 * @param  {node} node object. 
 */
function deleteMin(node){
	if (node.left == null) return node.right;

	node.left = deleteMin(node.left);
	node.count = 1 + getSize(node.left) + getSize(node.right);

	return node;
}


/**
 * function recursively scans all elements of the tree and gets all keys in sorted order
 * first gets all left elements, and then all right elements. since function is recursive
 * all keys will be in order
 */
function traverseTree(node, data){
	if (!node) return;

	traverseTree(node.left, data);
	data.push(node.key);
	traverseTree(node.right, data);
}


function traverseTreeInOrder(node, data){
	if (!node) return;

	traverseTreeInOrder(node.left, data);
	data.push(node.value);
	traverseTreeInOrder(node.right, data);
}

function traverseTreePreOrder(node, data){
	if (!node) return;
	data.push(node.value);
	traverseTreePreOrder(node.left, data);
	traverseTreePreOrder(node.right, data);
}

function traverseTreePostOrder(node, data){
	if (!node) return;
	traverseTreePostOrder(node.left, data);
	traverseTreePostOrder(node.right, data);
	data.push(node.value);
}



function getFloor(node, key){
	if ( node == null ) return null;

	if (node.key == key ) return node;

	if (node.key > key) return getFloor(node.left, key);

	var x = getFloor(node.right, key);

	if (x) return x;

	return node;
}

function getCeil(node, key){

	if ( node == null ) return null;

	if (node.key == key ) return node;

	if (node.key < key) return getCeil(node.right, key);

	var x = getCeil(node.left, key);

	if (x) return x;

	return node;
}

function getSize(node){
	if (!node) return 0;

	return node.count;
}



