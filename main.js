/****************************Week 2 Day 4 Exercise XP***************** */

/**
 * @author: Koua wilfired
 * @description: The purpose of this code is to master functions in js
 */

/******************* EXERCICE 1   ***************/
/******************* Part I : function with no parameters ***************/ 

function infoAboutMe() {
    console.log("I am wilfried elvire i love it");
}
infoAboutMe();


/******************* Part II : function with parameters ***************/


function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log("You name is " + personName + ", you are " + personAge + " years old, your favorite color is " + personFavoriteColor);
}

//test the function using arguments
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

/******************* Exercise 2 : Tips ***************/

function calculateTip() {

    let amountBill = prompt("Please enter the amount of the Bill !!");
    let final  = 0;
    let tipsArray = [0.2,0.15,0.1];

    // condition the cheque the bill

    if (amountBill < 50) {
        final  = parseInt(amountBill) * tipsArray[0] + parseInt(amountBill);
        console.log("tip " + amountBill * 0.2 + " and final bill " + final);
    } else if (amountBill > 50 || amountBill <= 200) {
         final = parseInt(amountBill) * tipsArray[1] + parseInt(amountBill);
         console.log("tip " + amountBill * tipsArray[1] + " and final bill " + final);
    } else {
        final  = parseInt(amountBill) * tipsArray[2] + parseInt(amountBill);
        console.log("tip " + amountBill * tipsArray[2] + " and final bill " + final);
    }
}
// call the function
calculateTip();



/******************* Exercise 3 : Find The Numbers Divisible By 23  ***************/

function isDivisible(divisor) {
    let sum = 0;
    for (let index = 0; index < 500; index++) {
        if (index % divisor == 0) {
            console.log(index);
            sum += index;
        }

    }
    console.log(sum);
}
isDivisible(3);
isDivisible(45);



/******************* Exercise 4 : Shopping List  ***************/

//define variables
const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}

//2 Create an array called shoppingList 
let shoppingList = ["banana", "orange", "apple"];

// Create a function called myBill() that takes no parameters.
function myBill() {
    let priceTotal = 0;
    for (let indexShopping = 0; indexShopping < shoppingList.length; indexShopping++) {
        if (!!stock[shoppingList[indexShopping]]) {
            priceTotal += prices[shoppingList[indexShopping]]
        }
    }
    return "The total price is : " + (priceTotal > 0 ? priceTotal : 0) ;

}

const bill = myBill();
console.log(bill);






/******************* Exercise 5 : What’s In My Wallet ?  ***************/

/* 1 Create a function named changeEnough(itemPrice, 
amountOfChange) that receives two arguments : */
/* In the function, determine whether or not you can afford the item */
function changeEnough(itemPrice, amountOfChange) {
    let sum = 0.25 * amountOfChange[0] +
        0.1 * amountOfChange[1] +
        0.05 * amountOfChange[2] +
        0.01 * amountOfChange[3]

    return sum >= itemPrice
}
// 3. Change format is [quarters, dimes, nickel, penny]
// 4. Illutsration
console.log(`For itemPrice: 14.11 and change: [2,100,0,0], changeEnough ? : ${changeEnough(14.11, [2, 100, 0, 0])}`)
console.log(`For itemPrice: 0.75 and change: [0,0,20,5], changeEnough ? : ${changeEnough(0.75, [0, 0, 20, 5])}`)






/******************* Exercise 6 : Vacations Costs  ***************/

// this function return hotel cost
function hotelCost(nightNight) {
    return nightNight * 140
}

// this function return plane coast
function planeRideCost(destination) {
    let prices = {
        london: 183,
        paris: 220,
        other: 300
    }

    return prices.hasOwnProperty(destination.toLowerCase()) ?
        prices[destination.toLowerCase()] :
        prices.other
}

//  this function define the rental coast
function rentalCarCost(numberOfDays) {
    let total = numberOfDays * 40
    if (numberOfDays > 10){
        total -= total * 5 / 100
    }
    return total
}

//auto call function to setup the program
(function totalVacationCost() {
    // User input number of nights
    let input,
    nightNight = 0,
        destination = "",
        numberOfDays = 0

    do {
        input = prompt("How many nights would you like to stay in the hotel?")
        if (!isNaN(input))
        nightNight = Number(input)
    } while (nightNight === 0)
    // User input destination
    do {
        input = prompt("What is your destination?")
        if (null !== input && /^\w+(\s?\w?)*$/.test(input))
            destination = input.trim()
    } while (destination === "")
    // User input number of days
    do {
        input = prompt("How many days would you like to rent the car?")
        if (!isNaN(input))
            numberOfDays = Number(input)
    } while (numberOfDays === 0)

    console.log(`Number of nights: ${nightNight} / Hotel costs: ${hotelCost(nightNight)}`)
    console.log(`Destination: ${destination} / Plan ride costs: ${planeRideCost(destination)}`)
    console.log(`Number of Days: ${numberOfDays} / Car rental costs: ${rentalCarCost(numberOfDays)}`)
    console.log(`Total vacation cost: ${(hotelCost(nightNight) + planeRideCost(destination) + rentalCarCost(numberOfDays))}`)
})()