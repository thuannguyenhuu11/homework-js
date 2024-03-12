class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(0);
  let curr = dummy;
  let carry = 0;

  // Convert array representations to linked lists
  l1 = arrayToLinkedList(l1);
  l2 = arrayToLinkedList(l2);

  while (l1 !== null || l2 !== null) {
    let sum = carry;

    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
  }

  if (carry > 0) {
    curr.next = new ListNode(carry);
  }

  return dummy.next;
};

// Function to convert an array to a linked list
function arrayToLinkedList(arr) {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

let l1 = [2, 4, 3];
let l2 = [5, 6, 4];
let result = addTwoNumbers(l1, l2);

// Function to convert the linked list to an array for easy display
function linkedListToArray(head) {
  let arr = [];
  let current = head;
  while (current !== null) {
    arr.push(current.val);
    current = current.next;
  }
  return arr;
}

console.log(linkedListToArray(result)); // Output: [7, 0, 8]
