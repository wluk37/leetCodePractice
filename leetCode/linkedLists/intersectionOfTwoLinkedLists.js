/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  var intersection = 0;
  var result = null;
  var listA = [];
  var listB = [];

  var track = function(node) {
    var result;
    var traverse = (nod, list = []) => {
      if (nod === null) {
        result = list;
        return;
      } else {
        list.push(nod);
        traverse(nod.next, list);
      }
    };
    traverse(node)
    return result
  };

  listA = track(headA);
  listB = track(headB);

  var longerList = listA.length > listB.length ? listA : listB;
  var shorterList = listA.length < listB.length ? listA : listB;
  var listDiff = Math.abs(listA.length - listB.length);

  for (var i = longerList.length - 1; i >= 0; i--) {
    if (longerList[i] !== shorterList[i - listDiff]) {
      intersection = i;
      break;
    }
  }

  var traverse = function(node, num) {
    if (num === 0) {
      result = node.next
      return;
    } else {
      num--;
      traverse(node.next, num);
    }
  }

  if (intersection === 0) {
    return result;
  } else {
    traverse(headA, intersection);
    return result;
  }
};