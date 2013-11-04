function LinkedList(){}

LinkedList.prototype = {
	length:0,
	first:null,
	last:null
}

LinkedList.Circular = function(){}

LinkedList.Circular.prototype = new LinkedList();

LinkedList.Circular.prototype.append = function(node){
	if(this.first === null){
		node.prev = node;
		node.next = node;
		this.first = node;
		this.last = node;
	} else {
		node.prev = this.last;
		node.next = this.first;
		this.first.prev = node;
		this.last.next = node;
		this.last = node;
	}
	this.length++;
};

LinkedList.Circular.prototype.insertAfter = function(node, newNode){
	newNode.next = node.next;
	node.next.prev = newNode;
	node.next = newNode;
	newNode.prev = node;
	if(newNode.prev == this.last){
		this.last = newNode;
	}
	this.length++;
};

LinkedList.Circular.prototype.remove = function(node){
	if(this.length == 1){
		this.first = null;
		this.last = null;
	} else {
		node.next.prev = node.prev;
		node.prev.next = node.next;
		if(node == this.first){
			this.first = node.next;
		}
		if(node == this.last){
			this.last = node.prev;
		}	
	}
	node.prev = null;
	node.next = null;
	this.length--;
}

LinkedList.Node = function(data){
	this.data = data;
	this.prev = null;
	this.next = null;
}

window.LinkedList = LinkedList;