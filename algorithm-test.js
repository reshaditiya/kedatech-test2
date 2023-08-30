function maxSubarraySum(nums, k) {
  //invalid case
  if (k > nums.length) {
    return null;
  }

  let maxSum = 0;

  //run until -k element
  for (let i = 0; i <= nums.length - k; i++) {
    //calculate k size window
    const currentSum = nums.slice(i, i + k).reduce((acc, num) => acc + num, 0);
    console.log(nums.slice(i, i + k), currentSum, nums);

    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// console.log(maxSubarraySum([100, 200, -200, 400], 2)); // Output: 700
// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // Output: 39
// console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // Output: 5

//-------

// 3. Buatlah fungsi untuk mendapatkan jumlah semua bilangan genap dalam nested objek
// Input :
// {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup"
//     }
//   }
// }
// Output: 6

// Input:
// {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 4}, ee: 'car'}
// };
// Output: 12

function sumEvenNumbers(obj) {
  let sum = 0;

  //loop through the key
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      //recursive each key object
      sum += sumEvenNumbers(obj[key]);
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }

  return sum;
}

function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(Math.random() * arr.length)]; // Choose a random pivot element
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    }
    // If arr[i] === pivot, do nothing (it remains in the middle)
  }

  return [...quicksort(left), pivot, ...quicksort(right)];
}

const arrayToSort = [5, 2, 9, 3, 1, 8];
const sortedArray = quicksort(arrayToSort);
console.log(sortedArray);
