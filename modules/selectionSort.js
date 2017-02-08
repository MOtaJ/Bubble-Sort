function selectionSort(arr){
  for(let i = 0; i < arr.length; i++){
    let min = i;
    for(let j = i + 1; j < arr.length; j++){
      if(arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i != min) {
      swap(arr, i, min);
    }
  }
  return arr;
}

function swap(items, firstIndex, secondIndex){
  let temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

let array = [15, 69, 54, 38, 21, 99, 154]

console.log(selectionSort(array));

module.exports = selectionSort;