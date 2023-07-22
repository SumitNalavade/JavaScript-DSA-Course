# Big O Notation
Imagine we have multiple implementations of the same function.  
How do we determine which is best?

<strong> Big O Notation allows us to classify and compare different implementations of code and discuss their tradeoffs. </strong>

It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow.

## Timing Our Code
We can use the performance.now() function to measure the number of miliseconds elapsed since the program was started.  

However, there are certain drawbacks:
- Different machines will record different times
- The same machine will record different times
- For fast algorithms, speed measurements may not be precise enough

<strong> Example: </strong>  
```
// The following two functions both add up numbers up to a certain number (n)

function addUpTo(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += 1;
  }

  return total;
}

function addUpToModified(n) {
    return n * (n + 1) / 2;
}

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);

t1 = performance.now();
addUpToModified(1000000000)
t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);
```

<strong> Result: </strong>

```
Time Elapsed: 0.5810063330009579 seconds
Time Elapsed: 0.000006083004176616669 seconds
```

## Counting Operations
Instead of counting the number of seconds, we can instead count the number of operations performed which will be the same regardless of external factors

<strong>Example: </strong>

```addUpToModified(n)``` uses 1 multiplication, 1 addition and 1 division  
```addUpTo(n)``` uses ```n``` additions, ```n``` assignments and ```n``` comparisons

Regardless of the exact number of operations, for ```addUpTo(n)```, the number of operations performance will grow with ```n```
while ```addUpToModified(n)``` will remain constant

## Big O Definition
We say that an algorithms is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n) as n increases.

- f(n) could be linear (f(n) = n)
- f(n) could be quadratic (f(n) = n^2)
- f(n) could be constant (f(n) = 1)
- f(n) could be something entirely different

<strong>Example: </strong>  
```addUpTo(n)``` is linear, ```O(n)``` because the number of operations increases as the number of inputs ```n``` increases.  

```addUpToModified(n)``` is constant ```O(1)``` because the number of operations remains 3 regardless of the number of inputs.

<strong>Example: </strong>
```
function countUpAndDown(n) {
  console.log("Going Up!");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }

  console.log("At the top!\nGoing down...");
  for(let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
}

countUpAndDown(10);
```
We may think of this function as having a time complexity of ```O(2n)```, however we care about the bigger picture, so we say the time complexity is ```O(n)``` since the number of operations increase proportionally to the number of inputs

<strong>Example: </strong>
```
function printAllPairs(n) {
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

printAllPairs(10);
```
This function has a time complexity of ```O(n^2)``` since the number of operations square as ```n``` increases due to a nested loop.

## Simplifying Big O Expressions
When determining time complexities, there are some helpful rules for Big O expressions

- <strong>Constants don't matter</strong>
  - ~~O(2n)~~ O(n)
  - ~~O(500)~~ O(1)
  - ~~O(13n^2)~~ O(n^2)
- <strong>Smaller terms don't matter</strong>
  - ~~O(n + 10)~~ O(n)
  - ~~O(1000n + 50)~~ O(n)
  - ~~O(n^2 + 5n + 8)~~ O(n^2)
- <strong>Arithmetic operations are constant</strong>
- <strong>Variable assignments are constant</strong>
- <strong>Accessing elements in an array or object is constant</strong>
- <strong>In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop</strong>

## Space Complexity
We can also use Big O notation to analyze space complexity:   
<strong>How much additional memory do we need to allocate in order to run our code</strong>

We focus on <strong>auxiliary space complexity:</strong> to refer to space required by the algorithm, not the space taken up by the inputs

- <strong>Most primitives (booleans, numbers, undefined) are constant space</strong>
- <strong>Strings require O(n) space (where ```n``` is the string length) </strong>
- <strong>Reference types, like arrays and objects, are generally ```O(n)```</strong>

<strong>Example: </strong>
```
function sum(arr) {
  let total = 0;
  for(let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
}
```
This function has a space complexity of ```O(1)``` because, we only assign one variable per iteration of the loop, regardless of the number of times we loop

<strong>Example: </strong>
```
function double(arr) {
  let newArray = [];
  for(let i = 0; i < arr.length; i++) {
    newArray.push(2 * arr[i]);
  }

  return newArray;
}
```
This function has a space complexity of ```O(n)``` because the amount of space taken up by ```newArray``` increases per iteration of the loop