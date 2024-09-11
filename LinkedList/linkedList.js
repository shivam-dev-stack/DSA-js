class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }


    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    insert(position, data){
        const newNode = new Node(data);
        let count = 0;
        if (position === 0) {
            this.prepend(data);
        }
        else{
            let current = this.head;
            while(current){
                if (position==count+1){
                    newNode.next = current.next;
                    current.next = newNode;
                }
                count += 1
                current = current.next
            }
        }
    }

    
    delete(data) {
        if (!this.head) {
            return; 
        }
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    deleteNth(position){
        let count = 0;
        if (!this.head) {
            return; 
        }

        if (position==count) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while(current){
            if (position == count+1){
                current.next = current.next.next;
            }
            count += 1
            current = current.next
        }
    }

    search(data) {
        let current = this.head;
        while (current !== null) {
            if (current.data === data) {
                return `${data} Found`; 
            }
            current = current.next;
        }
        return `${data} Not Found`; 
    }

    count(data){
        let current = this.head;
        let count = 0
        while (current !== null) {
            if (current.data === data) {
                count+=1
            }
            
            current = current.next;
        }
        return `${data} found ${count} times`; 
    }

    reverseList() {
        let curr = this.head;
        let prev = null;
        let next;
    
        while (curr !== null) {
            
            next = curr.next;
    
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev
    }

    print() {
        let current = this.head;
        const elements = [];
        while (current !== null) {
            elements.push(current.data);
            current = current.next;
        }
        console.log(elements.join(' -> '));
    }

}

export {LinkedList};