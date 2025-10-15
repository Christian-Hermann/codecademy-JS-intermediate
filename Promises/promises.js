// Constructing a Promise Object
const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344,
};

// Write your code below:
const myExecutor = (resolve, reject) => {
  if (inventory.sunglasses > 0) {
    resolve("Sunglasses order processed.");
  } else {
    reject("That item is sold out.");
  }
};

function orderSunglasses() {
  return new Promise(myExecutor);
}

const orderPromise = orderSunglasses();

console.log(orderPromise);

// The Node is setTimeout() Function
console.log("This is the first line of code in app.js.");
// Keep the line above as the first line of code
// Write your code here:
const usingSTO = () => {
  console.log("Not enough time in the day!");
};

setTimeout(usingSTO, 2000);

// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.");

// Success and Failure Callback Functions
const { checkInventory } = require("./library.js");

const order = [
  ["sunglasses", 1],
  ["bags", 2],
];

// Write your code below:
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectedValue) => {
  console.log(rejectedValue);
};

checkInventory(order).then(handleSuccess, handleFailure);

// Using catch() with Promises
const { checkInventory } = require("./library.js");

const order = [
  ["sunglasses", 0],
  ["bags", 2],
];

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectReason) => {
  console.log(rejectReason);
};

// Write your code below:
checkInventory(order).then(handleSuccess).catch(handleFailure);

// Using Promise.all()
nconst { checkAvailability } = require("./library.js");

const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(
    `Every item was available from the distributor. Placing order now.`
  );
};

const onReject = (rejectionReason) => {
  console.log(rejectionReason);
};

// Write your code below:
const checkSunglasses = checkAvailability("sunglasses", "Favorite Supply Co.");

const checkPants = checkAvailability('pants', 'Favorite Supply Co.')

const checkBags = checkAvailability('bags', 'Favorite Supply Co.')

Promise.all([checkSunglasses, checkPants, checkBags]).then(onFulfill).catch(onReject)

