// Bubble Sort
let arr = [10, 5, 7, 3, 20, 15, 17, 50];

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      //   let temp = arr[j];
      //   arr[j] = arr[j + 1];
      //   arr[j + 1] = temp;
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
}
console.log(arr);

// Linear Search
// let arr = [10, 5, 7, 3, 20, 15, 17, 50];
// function linearSearch(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return i;
//     }
//   }

//   return -1;
// }

// console.log(linearSearch(arr, 50));

// function binarySearch(arr, target) {
//   let low = 0;
//   let high = arr.length - 1;

//   while (low <= high) {
//     const mid = Math.floor((high + low) / 2);

//     if (arr[mid] === target) {
//       return mid;
//     } else if (arr[mid] > target) {
//       high = mid - 1;
//     } else {
//       low = mid + 1;
//     }
//   }

//   return -1;
// }

// console.log(binarySearch([2, 3, 5, 7, 8, 10, 12, 15, 18, 20], 340));
