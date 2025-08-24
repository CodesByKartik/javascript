const accounName = "Kartik";
let accountBalance = 1000.50;
var accountType = "Savings";

// accounName = "Rahul"; //This will cause an error
console.log("Account Name:", accounName);  

accountBalance = 1200.75; // This is valid
console.log("Account Balance:", accountBalance);

accountType = "Current"; // This is valid
console.log("Account Type:", accountType);

console.table([accounName, accountBalance, accountType]);