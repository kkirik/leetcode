import {ListNode, mergeTwoLists} from './mergeTwoLists';

describe('mergeTwoLists', () => {
  it('should return list with [1,1,2,3,4,4] elements when first list constains [1,2,4] and second one [1,3,4]', () => {
    const LIST1 = new ListNode(1, new ListNode(2, new ListNode(4)));
    const LIST2 = new ListNode(1, new ListNode(3, new ListNode(4)));
    const RESULT_LIST = new ListNode(
      1,
      new ListNode(
        1,
        new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4))))
      )
    );

    const mergedList = mergeTwoLists(LIST1, LIST2);

    expect(mergedList).toEqual(RESULT_LIST);
  });

  it('should return empty list when 2 lists are empty', () => {
    const LIST1 = new ListNode();
    const LIST2 = new ListNode();

    const mergedList = mergeTwoLists(LIST1, LIST2);

    expect(mergedList).toEqual(new ListNode());
  });

  it('should return list with 0 when first list is empty and second has element = 0', () => {
    const LIST1 = new ListNode();
    const LIST2 = new ListNode(0);

    const mergedList = mergeTwoLists(LIST1, LIST2);

    expect(mergedList).toEqual(new ListNode(0));
  });
});
