class Node {
    constructor(data){

        this.data = data
        this.next = null
    }
}


class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }



    
    add(data){
        let newNode = new Node(data)
    
        if(this.head === null){
            this.head = newNode
        }else{
            let current = this.head
            while(current.next !== null){
                current = current.next
            }

            current.next = newNode
            
        }
        this.size++
    }


    insertAt(data, index){
        let newNode = new Node(data)
        let current = this.head       
        
        if(index < 0 || index > this.size){
            return console.log("Objeto fora dos ");
        }

        if(index === 0){
            newNode.index = this.head
            this.head = newNode

        }else{
            for(let i = 0; i !== index-1; i++){
                current = current.next
            }
            newNode.next = current.next
            current.next = newNode

        }
        this.size++
    }
    

    removeFrom(index){

        let current = this.head

        if(index < 0 || index > this.size){
            return console.log("index Objeto fora dos");
        }

        if (index === 0) {
            this.head = current.next
        }else{

            for(let i = 0; i < index -1; i++){
                current = current.next   
            }

            current.next = current.next.next
        }

        this.size--
    }

    indexOf(){
        
    }

    printList() {
        let current = this.head

       

            while (current !== null) {
                console.log(current.data);
                current = current.next
            }
        }
    }


        




let list = new LinkedList()
list.add("Elemento 0")
list.add("Elemento 1")
list.add("Elemento 2")
list.add("Elemento 3")
// list.insertAt("Novo elemento 2", 2)
list.removeFrom(3)

list.printList()
