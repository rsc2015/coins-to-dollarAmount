console.log("coinsToCash.js");

const piggyBank = { 
    quarters: 222,
    nickels: 335,
    dimes: 120,
    pennies: 342,

};

let dollarAmount = 0;


dollarAmount += piggyBank.quarters * 0.25 ;
dollarAmount += piggyBank.nickels * 0.05;
dollarAmount += piggyBank.dimes * 0.10;
dollarAmount += piggyBank.pennies * 0.01;

console.log("money in dollars" , " $ " + dollarAmount.toFixed(2));



