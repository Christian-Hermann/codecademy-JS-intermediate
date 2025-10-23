// Debugging with console.log()
// Returns the string whose first letter is later in the alphabet. If both first letters are equal, returns null.
function getLaterFirstLetter(string1, string2) {
  const firstLetter1 = string1.charAt(0);
  const firstLetter2 = string2.charAt(0);
  console.log(firstLetter1);
  console.log(firstLetter2);

  if (firstLetter1 === firstLetter2) {
    return null;
  } else if (firstLetter1 > firstLetter2) {
    return string1;
  } else {
    return string2;
  }
}

// Stack Overflow
// Returns whether or not the provided string contains a substring of "cake" in it.
function containsCake(string) {
  return string.includes("cake");
}

// Should return true
console.log(
  "containsCake('I think cake is my soul mate.') returns: " +
    containsCake("I think cake is my soul mate.")
);

// Should return false
console.log(
  "containsCake('Pie is certainly the coolest dessert.') returns: " +
    containsCake("Pie is certainly the coolest dessert.")
);
