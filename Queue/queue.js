class Queue {
	constructor(max) {
		this.items = []
		this.frontIndex = 0
		this.backIndex = 0
		this.max = max
	}

	enqueue(item) {
		if(this.backIndex>=this.max){
			return "Overflow"
		}
		this.items[this.backIndex] = item
		this.backIndex++
		return item + ' inserted'
	}

	dequeue() {
		if(this.backIndex==0){
			return "Underflow"
		}
		const item = this.items[this.frontIndex]
		delete this.items[this.frontIndex]
		this.frontIndex++
		return item
	}

	peek() {
		return this.items[this.frontIndex]
	} 

	get printQueue() {
		return this.items.filter((x)=>x!=undefined); 
	
	}
}

export {Queue};