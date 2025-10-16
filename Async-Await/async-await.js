// Tha async Keyword
async function withAsync(value) {
  if (value === 0) {
    return "zero";
  } else {
    return "not zero";
  }
}

// Leave this commented out until step 3:

withAsync(100).then((resolveValue) => {
  console.log(
    ` withAsync(100) returned a promise which resolved to: ${resolveValue}.`
  );
});

// The await Operator
