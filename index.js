class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}
class linked{
    constructor(){
        this.head = null
    }
    insert(data){
     let node = new Node(data)
     node.next = this.head
     this.head = node
    
    }
    delete(data){
        let cur = this.head
        let prev = null
        while(cur){
            if(cur.data === data){
                if(prev == null){
                    this.head = cur.next
                }else{
                    prev.next = cur.next
                }
                return
            }
            prev = cur
            cur = cur.next
        }
    }
    merge(head = this.head){
        if(!head || !head.next) return head
        let midle = this.getmidle(head)
        let nexttomidle = midle.next
        midle.next = null
        let left = this.merge(head)
        let right = this.merge(nexttomidle)
        return this.mergesort(left,right)
    }
    getmidle(head){
        if(!head) return head
        let slow = head
        let fast = head.next
        
        while(fast && fast.next){
            slow = slow.next
            fast =  fast.next.next
        }
        return slow
    }
    mergesort(left,right){
        if(!left) return right
        if(!right) return left
        let result ;
    if(left.data <= right.data){
        result = left
        result.next = this.mergesort(left.next,right)
    }else{
        result = right
        result.next = this.mergesort(left,right.next)
    }
    return result
    }
    sort(){
        this.head = this.merge(this.head)
    }
    print(){
        let cur = this.head
        let ans = []
        while(cur){
            ans.push(cur.data)
            cur =cur.next
        }
        console.log(ans.join("->"))
    }
}

let link = new linked()
link.insert(9)
link.insert(0)
link.insert(6)
link.insert(2)
link.insert(4)
link.insert(1)
link.print()
link.sort()
link.print()


