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
