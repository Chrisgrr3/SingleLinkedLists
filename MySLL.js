class SLL {
    constructor() {
        this.head = null;
        // Pointer for the memory location of nodes in the SLL. Initially points at nothing.
    }

    // Console log the data of every node in the current list.
    read() {
        var current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
    
    // find: return true / false if current list contains a data equal to value.
    contains(value) {
        var runner = this.head;
        while(runner) {
            if (runner.data === value) {
                return true;
            }
            else {
                runner = runner.next;
            }
        }
        return false;
    }

    // Remove from front: remove and return the first node in the SLL.
    removeFromFront() {
        if (this.isEmpty()) return null;
        var current = this.head;
        this.head = this.head.next;
        current.next = null;
        return current.data;
    }

    isEmpty() {
        if (this.head === null) {
            return true;
        }
        return false;
    }

    addToFront(node) {
        node.next = this.head;
        this.head = node;
    }

    addDataToFront(data) {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;
    }

    count() {
        var runner = this.head;
        var count = 0;
        while (runner) {
            count +=1;
            runner = runner.next;
        }
        return count;
    }

    remove(val) {
        if (this.isEmpty()) {
            console.log("There are no values in this SLL to remove");
        }
        if (mySLL.contains(val)) {
            var runner = this.head;
            if(this.head.data === val) {
                this.head = this.head.next;
                return;
            }
            var target = null;
            while(runner) {
                if (runner.next.data === val) {
                    target = runner.next;
                    runner.next = target.next;
                    console.log("Successfully removed the target node from the SLL.");
                    return;
                }
                else {
                    runner = runner.next;
                }
            }
        }
        else {
            console.log("This SLL does not contain the specified value.");
        }
    }

    printSecondToLast() {
        if(this.count() >= 2) {
            var runner = this.head;
            while (runner) {
                if (runner.next.next == null) {
                    console.log(runner.data);
                    return;
                }
                runner = runner.next;
            }
        }
    }
}

class Node {
    constructor(data) {
        this.data = data;
        // Data is whatever the Node is holding onto.
        this.next = null
        // Pointer to reference another Node. Points to an instance of another node.
    }
}

var mySLL = new SLL();
mySLL.addDataToFront(10);
mySLL.addDataToFront(3);
mySLL.addDataToFront(17);
mySLL.addDataToFront(90);
mySLL.addDataToFront(200);
var empty = new SLL()

// var current = mySLL.head;

// while (current) {
//     console.log(current.data);
//     if (current.next === null) {
//         console.log("This is the last node.");
//     }
//     current = current.next;
// }

console.log("Lets read through all the nodes in this SLL...")
mySLL.read();
console.log();
console.log("Now, does SLL contain a node whose data is the number 9?")
console.log(mySLL.contains(9));
console.log("Neat! Now let's see if we can remove the node whose data is the number 3...");
console.log();
mySLL.remove(3);
console.log();
console.log("Now let's make sure that 3 is gone...");
mySLL.read();
console.log();
console.log("Wow, it worked! Now, what about if we try to count how many nodes are in our SLL...")
console.log(mySLL.count());
console.log();
console.log("Hmm, what if we can trick this SLL into removing a node based on a value that is not present in the SLL?");
mySLL.remove(25);
console.log();
console.log("Wow! They sure were clever in designing these classes.")
console.log();
console.log("Now, lets see if this method actually prints the data of the second to last node in the SLL...")
mySLL.printSecondToLast();


