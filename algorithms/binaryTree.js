//js实现排序二叉树
function BinaryTree() {
	//二叉树的根节点对象
	var Node = function(key) {
		this.key = key;
		this.left = null;
		this.right = null;
	}

	var root = null;

	/**
	 * 插入子节点
	 * @param {*} node（要插入位置的父节点）
	 * @param {*} newNode （要插入的新节点）
	 */
	var insertNode = function(node, newNode) {
		if(newNode.key < node.key) {
			if(node.left === null) {
				node.left = newNode;
			} else {
				insertNode(node.left, newNode);
			}
		} else {
			if(node.right === null) {
				node.right = newNode;
			} else {
				insertNode(node.right, newNode);
			}
		}
	}

	//插入根节点
	this.insert = function(key) {
		var newNode = new Node(key);
		//如果根节点不存在，生成根节点
		if(root === null) {
			root = newNode;
		} else {//根节点已存在，插入新节点
			insertNode(root, newNode);
		}
	}

	/**
	 * 二叉树（中序遍历）
	 * @param {*} node (遍历的节点)
	 * @param {*} callback (回调函数)
	 */
	let inOrderTraverseNode = function(node, callback) {
		if(node !== null) {
			inOrderTraverseNode(node.left, callback);
			callback(node.key);
			inOrderTraverseNode(node.right, callback);
		}
	}
	/**
	 * 前序遍历
	 * @param {*} node(遍历的节点)
	 * @param {*} callback(回调函数)
	 */
	let preOrderTraverseNode = function(node, callback) {
		if(node !== null) {
			callback(node.key);
			preOrderTraverseNode(node.left, callback);
			preOrderTraverseNode(node.right, callback);
		}
	}
	
	//中序遍历(对外接口)
	this.inOrderTraverse = function(callback) {
		inOrderTraverseNode(root, callback);
	}
	//前序遍历
	this.preOrderTraverse = function(callback) {
		preOrderTraverseNode(root, callback)
	}
}


/**
 * 二叉树排序方法
 * @param {*} data 
 */
const binarySort1 = function(data) {
	console.log(data)
	let tree = new BinaryTree();
	let arr = [];
	data.map((item)=>{
		tree.insert(item);
	});
	tree.preOrderTraverse(function(val) {
		arr.push(val);
	})
	console.log(arr)
}


