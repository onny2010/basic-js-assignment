/* ---------------------------------------------------------------------------------------------
                                 1st problem: conversion of seer to mon
 -----------------------------------------------------------------------------------------------*/

function seerToMon(seer) {
    // Error massages
    if (typeof seer != 'number') {
        return 'ERROR: Please enter a valid number'
    }
    else if (seer < 0) {
        return 'ERROR: Please enter a positive number'
    }
    // operations
    var mon = seer / 40;
    return mon;
}

// input/output
var firstMon = seerToMon(120);
console.log('The weight is:', firstMon);
var secondMon = seerToMon(100);
console.log('The weight is:', secondMon);
var thirdMon = seerToMon(90);
console.log('The weight is:', thirdMon);


/*  ---------------------------------------------------------------------------------------------
                                  2nd problem: total sale amount 
 ---------------------------------------------------------------------------------------------*/

function totalSales(shirts, pants, shoes) {
    // Error massages
    if (typeof shirts, pants, shoes != 'number') {
        return 'ERROR: Please enter a valid Quantity'
    }
    else if (shirts, pants, shoes < 0) {
        return 'ERROR: Please enter a positive Quantity'
    }

    // operations
    const shirt = shirts * 100;
    const pant = pants * 200;
    const shoe = shoes * 500;

    const total = shirt + pant + shoe;
    return total;
}

// input/output
const fisrtDay = totalSales(15, 10, 5);
console.log('Total sale of first Day:', fisrtDay);
const secondDay = totalSales(5, 4, 7);
console.log('Total sale of first Day:', secondDay);
const thirdDay = totalSales(10, 12, 3);
console.log('Total sale of first Day:', thirdDay);



/*  --------------------------------------------------------------------------------------------- 
                                 3rd problem: delivery cost of t-shirt
 --------------------------------------------------------------------------------------------- */
function deliveryCost(costs) {
    // Error massages
    if (typeof costs != 'number') {
        return 'ERROR: Please enter a valid ammount'
    }
    else if (costs < 0) {
        return 'ERROR: Please enter a positive ammount'
    }

    // operations
    const forFirst100Cost = 100;
    const forSecond100Cost = 80;
    const forRestTshirtsCost = 50;
    if (costs <= 100) {
        const totalCost = costs * forFirst100Cost;
        return totalCost;
    }
    else if (costs <= 200) {
        const first100Items = 100 * forFirst100Cost;
        const restcosts = costs - 100;
        const second100Items = restcosts * forSecond100Cost;
        const totalCost = first100Items + second100Items;
        return totalCost;
    }
    else {
        const first100Items = 100 * forFirst100Cost;
        const second100Items = 10 * forSecond100Cost;
        const restcosts = costs - 200;
        const restItems = restcosts * forRestTshirtsCost;
        const totalCost = first100Items + second100Items + restItems;
        return totalCost;
    }
}

// input/output
const first100 = deliveryCost(90);
console.log('For first 100 products:', first100);
const second100 = deliveryCost(190);
console.log('For second 100 products:', second100);
const restItem = deliveryCost(201);
console.log('For rest products:', restItem);




/*---------------------------------------------------------------------------------------------
                            4th and last problem: Finding perfect friend
 ---------------------------------------------------------------------------------------------*/
let friends = ['ovi', 'roni', 'ava', 'shartaj', 'ahad', 'farabi', 'tonni', 'soumy', 'saeid'];

function perfectFriend(friends) {
    // Error massages
    if (typeof friends != 'string') {
        return 'ERROR: Please enter a string';
    }

    // operations++
    let bestFriend = [];

    for (const element of friends) {
        if (element.length == 5) {
            bestFriend.push(element);
            break;
        }
    }
    return bestFriend;
}

// input/output
const specialFriend = perfectFriend(friends);
console.log('My Perfect friend is:', specialFriend);