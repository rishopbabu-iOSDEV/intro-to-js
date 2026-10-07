console.log("New practice file added.");

// lays price = 10, quantity = 5, discount - 5

function calculateBill(price, quantity = 3, discount = 0) {
    if (price > 0) {
        if (quantity > 0) {
            return price * quantity - discount;
        } else {
            return "Quantity should be greater than 0.";
        }
    } else {
        return "Price and quantity should be greater than 0.";
    }
}

function calculateBill2(price, quantity, discount = 0) {
    if (price <= 0) return "Price should be greater than 0.";
    if (quantity <= 0) return "Quantity should be greater than 0.";
    return price * quantity - discount;
}


let bill = calculateBill(10, 5);
console.log(bill);

let bill2 = calculateBill(10, 0, 5);
console.log(bill2);


// Withdraw from ATM

function withdrawFromATM(balance, amount) {
    if (balance <= 0) return "Balance should be greater than 0.";
    if (amount <= 0) return "Amount should be greater than 0.";
    if (amount > balance) return "Insufficient balance.";
    return balance - amount;
}


const college="SIU";

// function student() {
//     console.log(`My college is ${college}`);
//     const percentage=80;
//     console.log(`My percentage is ${percentage}`);

//     if (percentage >= 75) {
//         let grade = "A";
//         console.log(`My grade is ${grade}`);
//     }
//     console.log(`My grade is ${grade}`);
// }

// student();
// console.log(`My Percentage is ${percentage}`);


function formatPrice(amount, currencySymbol = "₹") {
  return `${currencySymbol}${amount.toFixed(2)}`;
}

function describeItem(itemName, price) {
  const priceText = formatPrice(price); // one function calling another
  return `${itemName}: ${priceText}`;
}

console.log(describeItem("Notebook", 149)); // "Notebook: ₹149.00"







let fruits=["Apple", "Banana", "Cherry", "Date"];

console.log(fruits[3]);
fruits.push("Elderberry");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits[3]="Grapes";
console.log(fruits);

let students=["John", "Jane", "Jim", "Jill"];
console.log(students[2]);



