export class ListNode {
  val?: number;
  next?: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function parseList(list: ListNode | null): number[] {
  let listElements: number[] = [];
  let currentListNode: ListNode | null = list;

  while (currentListNode && typeof currentListNode.val === 'number') {
    listElements.push(currentListNode.val);

    currentListNode = currentListNode.next;
  }

  return listElements;
}

function makeList(nums: number[]): ListNode {
  let list: ListNode | undefined = [...nums.reverse()].reduce(
    (listHead: ListNode | undefined, currentNode) => {
      if (!listHead) {
        return new ListNode(currentNode);
      }

      return new ListNode(currentNode, listHead);
    },
    undefined
  );

  return list || new ListNode();
}

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode {
  const parsedList1 = parseList(list1);
  const parsedList2 = parseList(list2);

  const mergedNumbers = [...parsedList1, ...parsedList2].sort();

  return makeList(mergedNumbers);
}
