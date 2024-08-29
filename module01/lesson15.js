class Node{
    constructor(data){
        this.data = data
        this.next = null
        this.previous = null
    }
}

class DoubleLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.size
    }

    add(data){
        let newNode = new Node(data)

        if(this.head === null ){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            newNode.previous = this.tail
            this.tail = newNode
            
        }

        this.size++
    }

    insertAt(data, index){
        let newNode = new Node(data)
        let current = this.head
        if(index < 0 || index > this.size){
            return console.log("Index fora do escopo");
        }

        if(index === 0 ){
            this.head.previous = newNode
            newNode.next = this.head
            this.head = newNode
            
        } else{
        
            for(let i = 0; i < index -1; i++){
                current = current.next
            }

            current.next.previous = newNode
            newNode.next = current.next
            current.next = newNode
            newNode.previous = current


        }

        this.size++
    }

    showList(){
        let current = this.head
        while (current !== null) {
            console.log(current.data);
            current = current.next
            }
    }


}

let doubleList = new DoubleLinkedList()

doubleList.add("elemento0")
doubleList.add("elemento1")
doubleList.add("elemento2")
doubleList.add("elemento3")
doubleList.add("elemento4")
doubleList.insertAt("Novo elemento 3", 3)

doubleList.showList()