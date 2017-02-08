function mergeSort(array) {
  if(array.length <= 1) {
    return array;
  }

  let left = array.splice(0, array.length/2);
  let right = array;
  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);

  function merge(left, right) {
    let sortedArray = [];
    while (left.length > 0 && right.length > 0) {
      if(left[0] > right[0]) {
        sortedArray.push(right.shift());
      } else {
        sortedArray.push(left.shift());
      }
    }
    while(left.length > 0) {
      sortedArray.push(left.shift());
    }
    while(right.length > 0) {
      sortedArray.push(right.shift());
    }
    return sortedArray;
  }
}

let array = [4, 9, 1, 13, 35, 67, 5, 18, 105, 87, 34, 6];

console.log(mergeSort(array));

module.exports = mergeSort;