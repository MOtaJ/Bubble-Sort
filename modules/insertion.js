let array = [1, 7, 4, 9, 8]

function insertionSort(arr){
  for (var i = 1; i < arr.length; i++){
    let current = arr[i];
    let check = i - 1;
      while (check >= 0 && arr[check] > current ) {
        arr[check + 1] = array[check]
        check--;
      }
    arr[check + 1] = current;
  }
  return arr;
}

console.log(insertionSort(array));

module.exports = insertionSort;