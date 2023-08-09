## Frequency Counter
This pattern uses objects or sets to collect values/frequencies of values.  
This can often avoid the need for nested loops or O(n^2) operations with arrays/strings

<strong>Example: </strong>  
Write a function called <strong>same</strong>, which accepts two arrays.  
The function should return true if every value in the array has it's corresponding value squared in the second array.  
The frequency of values must be the same.

```js
same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false
```

<strong>Initial Approach: </strong>
```js
function same(arr1, arr2) {
  /*
    Create an object to hold the values of array1 as keys along with it's square and count as values

    Example:
    {
      1: {
        squaredValue : 1,
        initialCount : 2,
        finalSquaredCount: 2
      }
    }
  */
  const collectionObj = { };

  // Fill the collction object
  for(let i = 0; i < arr1.length; i++) {
    const initialValue = arr1[i];
    const squaredValue = initialValue ** 2
    const initialCount = arr1.filter((elm) => elm === initialValue).length
    const finalCount = arr2.filter((elm) => elm === squaredValue).length

    collectionObj[initialValue] = {
      squaredValue,
      initialCount,
      finalCount
    }
  }
  
  // Iterate throught the collection object and for each key, validate if the array1 count is equal to the number of times the squared value shows up in array2
  for(let i = 0; i < Object.values(collectionObj).length; i++) {
    const obj = Object.values(collectionObj)[i];

    if(obj.initialCount !== obj.finalCount) {
      return false
    }
  }

  return true
}

console.log(same([1,2,3], [4,1,9]))
console.log(same([1,2,3], [1,9]))
console.log(same([1,2,1], [4,4,1]))
```

<strong>Refactored Approach</strong>  
```js
function sameRefactored(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false
  }

  /*
    Create two objects to hold the contents of both arrays
    Compare the two objects later

    collectionObj will be similar to the initial approach, but without the finalSquaredCount key
    collectionObj2 will hold the elements of arr2 as keys and the counts as values
  */
  collectionObj = {};
  collectionObj2 = {};

  // Fill collectionObj
  for(let initialValue of arr1) {
    const squaredValue = initialValue ** 2;

    if(!collectionObj[initialValue]) {
      collectionObj[initialValue] = { squaredValue, initialCount: 1 }
    } else {
      collectionObj[initialValue] = { squaredValue, initialCount: collectionObj[initialValue].initialCount + 1 }
    }
  }

  // Fill collectionObj2
  for(let initialValue of arr2) {
    if(!collectionObj2[initialValue]) {
      collectionObj2[initialValue] = 1
    } else {
      collectionObj2[initialValue] = collectionObj2[initialValue] + 1
    }
  }

  // Loop through the value objects in collectionObj and compare them against collectionObj2
  for(let initialObject of Object.values(collectionObj)) {
    // If the squared value isn't a key in collectionObj2, return false
    if(initialObject.squaredValue in collectionObj2) {
      return false
    }

    // If the counts of each value don't match, return false
    if(collectionObj2[initialObject.squaredValue] !== initialObject.initialCount) {
      return false
    }
  }

  return true
}

console.log(same([1,2,3], [4,1,9]))
console.log(same([1,2,3], [1,9]))
console.log(same([1,2,1], [4,4,1]))
```

Here, the initial approach uses the array.filter() method within a for loop which gives it a time complexity of O(n^2)  

However, the second approaches uses three seperate loops, with a final time complexity of O(n)

<strong>Example: </strong>  
Given two strings, write a function to determine if the second string is an anagram of the first.
```js
anagram('', '') // true
anagram('aaz', 'zza') // false
anagram('anagram', 'nagaram') // true
anagram('rat', 'car') // false
anagram('awesome', 'awesom') // false
```

<strong>Initial Approach: </strong>
```js
function anagram(str1, str2) {
  // If both strings aren't the same length, return false
  if(str1.length !== str2.length) {
    return false
  }

  const arr1 = str1.split('');
  const arr2 = str2.split('');

  const collectionObj1 = { };
  const collectionObj2 = { };

  /*
    Iterate through one of the arrays (doesn't matter which one since we already validated the lengths)
    If the character isn't a key in the corresponding collection object, add it with a value of 1
    If the character is already a key, increment it by one
  */
  for(let i = 0; i < arr1.length; i++) {
    const val1 = arr1[i];
    const val2 = arr2[i];

    collectionObj1[val1] ? collectionObj1[val1] += 1 : collectionObj1[val1] = 1
    collectionObj2[val2] ? collectionObj2[val2] += 1 : collectionObj2[val2] = 1 
  }

  // Iterate through the keys of one of the collection objects and check if the count is the same in the second collection object (for the same key)
  for(key1 of Object.keys(collectionObj1)) {
    const collectionObj1Count = collectionObj1[key1];
    const collectionObj2Count = collectionObj2[key1];

    if(collectionObj1Count !== collectionObj2Count) {
      return false
    }
  }

  return true
}

console.log(anagram('', ''))
console.log(anagram('aaz', 'zza'))
console.log(anagram('anagram', 'nagaram'))
console.log(anagram('rat', 'car'))
console.log(anagram('awesome', 'awesom'))
```

## Multiple Pointers
Creating pointers that correspond to an index or position and moves towards the beginning, end or middle based on a certain condition

<strong>Very</strong> efficient for solving problems with minimal space complexity as well

<strong>Example: </strong>  
Write a function called <strong>sumZero</strong> which accepts a <strong>sorted</strong> array of integers.  
The function should find the <strong>first pair</strong> where the sum is 0  
Return an array that includes both values that sum to zero or undefined if a pair doesn't exist

```js
sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3,3]
sumZero([-2, 0, 1, 3]) // undefined
sumZero([1, 2, 3]) // undefined
```

<strong>Initial Approach:</strong>
```js
function sumZero(arr) {
  for(let i = 0; i < arr.length; i++)  {
    const firstVal = arr[i];

    for(let j = i + 1; j < arr.length; j++ ) {
      const secondVal = arr[j];

      if(firstVal < 0 && secondVal < 0 || firstVal > 0 & secondVal > 0) continue

      if(firstVal + secondVal === 0) {
        return [firstVal, secondVal]
      }
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]))
console.log(sumZero([-2, 0, 1, 3]))
console.log(sumZero([1, 2, 3]))
```

<strong>Refactored Approach:</strong>
```js
function sumZero(arr) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while(leftPointer < rightPointer) {
    const sum = arr[leftPointer] + arr[rightPointer];

    if(sum === 0) {
      return [arr[leftPointer], arr[rightPointer]];
    } else if(sum < 0) {
      leftPointer++
    } else {
      rightPointer--
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]))
console.log(sumZero([-2, 0, 1, 3]))
console.log(sumZero([1, 2, 3]))
```

## Sliding Window
This pattern involves creating a **window** which can either be an array or number from one position to another

Depending on a certain condition, the window either increases or closes (and a new window is created)

Very useful for keeping track of data in an array/string

**Example:**
```js
maxSubarraySum([1,2,5,2,8,1,5], 2) // 10
maxSubarraySum([1,2,5,2,8,1,5], 4) // 17
maxSubarraySum([4,2,1,6], 1) // 6
maxSubarraySum([4,2,1,6,2], 4) // 13
maxSubarraySum([], 4) // null
```

**Initial Approach:**
```js
function maxSubarraySum(arr, n) {
	if(n > arr.length) {
		return null;
	}

	let sum = -Infinity;
	
	let j = n - 1
	for(let i = 0; i < arr.length; i++) {
	
		let count = 0;
	
		for(let x = i; x <= j; x++) {
			count += arr[x]
		}
	
		if(count > sum) {
			sum = count
		}
	
		j++;
	}
	return sum
}

console.log(maxSubarraySum([1,2,5,2,8,1,5], 2))
console.log(maxSubarraySum([1,2,5,2,8,1,5], 4))
console.log(maxSubarraySum([4,2,1,6], 1))
console.log(maxSubarraySum([4,2,1,6,2], 4))
console.log(maxSubarraySum([], 4))
```

**Refactored Approach**
```js
function maxSubarraySum(arr, n) {
	let maxSum = 0;
	let tempSum = 0;

	if(arr.length < n) return null

	// Sum together the first n digits
	for(let i = 0; i < n; i++) {
		maxSum += arr[i];
	}
	tempSum = maxSum;

	// Starting at index n, remove the first value and add the next value for    each iteration and compare
	for(let i = n; i < arr.length; i++) {
		tempSum = tempSum - arr[i - n] + arr[i];
		maxSum = Math.max(maxSum, tempSum);
	}
	
	return maxSum;
}

console.log(maxSubarraySum([1,2,5,2,8,1,5], 2))
console.log(maxSubarraySum([1,2,5,2,8,1,5], 4))
console.log(maxSubarraySum([4,2,1,6], 1))
console.log(maxSubarraySum([4,2,1,6,2], 4))
console.log(maxSubarraySum([], 4))
```