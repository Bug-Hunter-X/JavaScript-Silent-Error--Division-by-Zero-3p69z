# JavaScript Silent Error: Division by Zero

This repository demonstrates a common silent error in JavaScript: division by zero.  The `bug.js` file contains the erroneous code that fails silently.  `bugSolution.js` provides a corrected version that handles the potential error gracefully. 

This type of error can be difficult to debug because it doesn't immediately throw an exception, it may instead return NaN or Infinity which can be hard to track down.  Always explicitly check for division by zero before performing the operation to prevent unexpected behavior and maintain code stability.