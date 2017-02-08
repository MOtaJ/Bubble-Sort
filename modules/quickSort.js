function quickSort(arr){
  let lArr = [];
  let rArr = [];
  let pivot = arr[0];

  if(arr.length <= 1){
    return arr;
  }

    for(let i = 0; i < arr.length; i++){
      if(arr[i] < pivot){
        lArr.push(arr[i]);
      }
      if(arr[i] > pivot){
        rArr.push(arr[i]);
      }
    }
  return quickSort(lArr).concat(pivot, quickSort(rArr));
}

module.exports = quickSort;