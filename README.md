# Big O Notation
Imagine we have multiple implementations of the same function.  
How do we determine which is best?

<strong> Big O Notation allows us to classify and compare different implementations of code and discuss their tradeoffs. </strong>

## Timing Our Code
We can use the performance.now() function to measure the number of miliseconds elapsed since the program was started.  

However, there are certain drawbacks:
- Different machines will record different times
- The same machine will record different times
- For fast algorithims, speed measurements may not be precise enough

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