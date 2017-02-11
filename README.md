# All sorting-algorithms w/ description and psuedocode

# Bubble-Sort

=======
# 5 sorting-algorithms w/ description and pseudocode


## Bubble-Sort

Make the lighter bubbles (or smaller ones) go to the top, and the larger bubbles go to the bottom.  Bubbles will switch places one at a time until no more switches can be made.  Then it will be considered sorted.

### pseudocode for Bubble-Sort

procedure bubbleSort( A : list of sortable items )
   n = length(A)
   repeat
     swapped = false
     for i = 1 to n-1 inclusive do
       /* if this pair is out of order */
       if A[i-1] > A[i] then
        /* swap them and remember something changed */
         swap( A[i-1], A[i] )
         swapped = true
       end if
     end for
   until not swapped
end procedure

### Best Case
- When the array is already sorted out

### Worst Case
- When the array is reversed, having to run many times over to put it in least-most order.


## Insertion-Sort

Similiar to sorting a hand of cards from least to greatest.  Taking one card out, moving it over, and insert it back into your hand.

### Pseudo-code for Insertion-Sort

function insertionSort(arr)
    for i = 1 and less than arr.length
        x = arr[i]
        j = i - 1
        while j > = 0 && arr[j] > x
        arr[j + 1} = arr[j]
        j--
        end while
        arr[j + 1] = x
        end for
        return arr

### Best Case
- If the array is already sorted, so it only runs through once

### Worst Case
- If the array is sorted in reverse order

## Selection-Sort

If you have 10 cookies that are all unsorted and different sizes, the easiest way to sort them is to take the smallest cookie and set it aside.  That will be considered sorted.  After, find the next smallest cookie and place it next to the other small cookie.  Now you have 2, repeat until you have all 10 sorted.  That's selection-Sort.

### Pseudo-Code for Selection-Sort

function selectionSort(arr)
    for i = 0 and less than arr.length
    let x = min
    for j = i + 1 and less than arr.length
    if arr[j] < arr[x]
    x = j
    end if
    end j for loop
    if i != x
    swap(arr, i, x)
    end if
    end i for loop
    return arr
    end function
    function swap(items, firstIndex, secondIndex)
    let x = items[firstIndex]
    items[firstIndex] = items[secondIndex]
    items[secondIndex} = temp;

### Best Case
- Array is already in sorted order

### Worst Case
- Array is in descending order

## Merge-Sort

Merge Sort involves cutting a list in half like paper until you have only small bits.  Then you take those pieces and glue it back together to form an even better, sorted, piece of paper.  Would be considered one of the "efficient" algorithms to use.

### pseudocode for Merge-Sort

function mergeSort(array)
    if array.length is less than or equal to 1
    return array;
    end if

    left = array.splice(p, array length divided by 2)
    right = array
    left = mergesort(left)
    right = mergesort(right)

    return merge(left, right)

    function merge(left, right)
        let sortedArray = [];
        while left length is greater than 0 and right length is greater than 0 {
        if left[0] is greater than right[0] {
            sortedArray,push(right.shift())
            close if else {
            sortedArray.push(left.shift())
            close if
        close while
        while(left length greater than 0) {
        sortedArray.push(left.shift())
        close while
        while(right length greater than 0) {
        sortedArray.push(rightshift())
        close while
        return sortedArray
        close function merge
    close function mergeSort

### Best Case
- The array is already sorted

### Worst Case
- Having to do the maximum number of comparisons in an array

