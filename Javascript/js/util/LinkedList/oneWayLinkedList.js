// One way linked list

function LinkedList() {
	let Node = function (val) {　　　　　　 //新元素构造
		this.val = val;
		this.next = null;
	};
	let length = 0;
	let head = null;

	this.append = function (val) {
		let node = new Node(val);　　　　   //构造新的元素节点
		let current = head;
		if (head === null) {　　　　　　　　//头节点为空时  当前结点作为头节点
			head = node;
		} else {
			while (current.next) {　　　　　//遍历，直到节点的next为null时停止循环，当前节点为尾节点
				current = current.next;
			}
			current.next = node;　　　　　　//将尾节点指向新的元素，新元素作为尾节点
		}
		length++;　　　　　　　　　　　　　　//更新链表长度
	};
	this.removeAt = function (position) {
		if (position > -1 && position < length) {
			let current = head;
			let index = 0;
			let previous;
			if (position == 0) {
				head = current.next;
			} else {
				while (index++ < position) {
					previous = current;
					current = current.next;
				}
				previous.next = current.next;
			}
			length--;
			return current.val;
		} else {
			return null;
		}
	};
	this.insert = function (position, val) {
		if (position > -1 && position <= length) {　　　//校验边界
			let node = new Node(val);
			current = head;
			let index = 0;
			let previous;
			if (position == 0) {　　　　　　 //作为头节点，将新节点的next指向原有的头节点。
				node.next = current;
				head = node;　　　　　　　　　//新节点赋值给头节点
			} else {
				while (index++ < position) {
					previous = current;
					current = current.next;
				}　　　　　　　　　　　　　　　//遍历结束得到当前position所在的current节点，和上一个节点
				previous.next = node;　　　　//上一个节点的next指向新节点  新节点指向当前结点，可以参照上图来看
				node.next = current;
			}
			length++;
			return true;
		} else {
			return false;
		}
	};
	this.toString = function () {
		let string = head.val;
		let current = head.next;
		while (current) {
			string += ',' + current.val;
			current = current.next;
		}
		return string;
	};
	this.indexOf = function (val) {
		let current = head;
		let index = -1;
		while (current) {
			if (val === current.val) { //从头节点开始遍历
				return index;
			}
			index++;
			current = current.next;
		}
		return -1;
	};
	this.getLength = function () {
		return length;
	}
	this.getHead = function () {
		return head;
	}
}

// 创建链表
let li = new LinkedList();
li.append(1);
li.append(2);
li.append(4);
li.append(4);
li.append(5);
li.insert(2, 3);
li.insert(2, 3);
console.log(li.toString())  // 1,2,3,3,4,4,5
console.log(li.getHead())   // 1->2->3->3->4->4->5


function toOneWayLinkedList(array = []) {

}