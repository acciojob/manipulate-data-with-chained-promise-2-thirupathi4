//your JS code here. If required.
function processArray() {
  const output = document.getElementById("output");

  // Step 1: Return the array right away, not after 3 sec
  Promise.resolve([1, 2, 3, 4])

    // Step 2: Filter evens after 1 second
    .then(arr => {
      return new Promise(resolve => {
        setTimeout(() => {
          const evens = arr.filter(num => num % 2 === 0);
          output.textContent = evens;
          resolve(evens);
        }, 1000);
      });
    })

    // Step 3: Double evens after another 2 seconds
    .then(evens => {
      return new Promise(resolve => {
        setTimeout(() => {
          const doubled = evens.map(num => num * 2);
          output.textContent = doubled;
          resolve(doubled);
        }, 2000);
      });
    });
}

processArray();