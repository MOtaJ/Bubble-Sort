let arr = [5, 1, 4, 4, 2, 6, 7, 2, 8];

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (var i = 0; i < arr.length-1; i++) {
      if (arr[i] > arr[i+1]) {
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

bubbleSort(arr);
console.log(arr);


module.exports = bubbleSort;
