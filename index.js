// Use Array Methods to solve the tasks below 🎉

const toppings = ['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese'];

/*
TASK 1 🚀
// The customer would like to see the topping options, console log out each of the toppings one by one in the array above 
*/
function toppingOptions(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
    return
}

toppingOptions(toppings)


/*
TASK 2 🚀
// write a function that accepts an array and an item and removes that item from the array
for example you no longer have any onions and need to remove it from the list of toppings
Use .forEach() - hint - you will need to include the index in the callback
 */

function currentToppings(array, outOfStockTopping) {
    array.forEach(function (item, index) {
        if (item === outOfStockTopping) {
            array.splice(index, 1);
        }
    })
    return array
};
console.log(currentToppings(toppings, "Tomatoes"))

/*
TASK 3 🚀
// Sort the topping alphabetically and return them in a new array 
*/


let toppingsAlpha = []

toppingsAlpha = toppings.sort()

console.log(toppingsAlpha);



const vacations = [
    { city: 'Toronto', country: 'Canada', region: 'North America', temperature: 86, beach: true, sea: false, wifi: 'strong', hiking: false, overall_rating: 6, },
    { city: 'Miami', country: 'United States', region: 'North America', temperature: 95, beach: true, sea: true, wifi: 'strong', hiking: false, overall_rating: 8, },
    { city: 'Tel Aviv', country: 'Israel', region: 'Middle East', temperature: 102, beach: true, sea: true, wifi: 'strong', hiking: true, overall_rating: 10, },
    { city: 'Istanbul', country: 'Turkey', region: 'Europe', temperature: 86, beach: false, sea: false, wifi: 'medium', hiking: true, overall_rating: 7, },
    { city: 'Bangkok', country: 'Thailand', region: 'South East Asia', temperature: 101, beach: false, sea: false, wifi: 'medium', hiking: false, overall_rating: 5, },
    { city: 'Lima', country: 'Peru', region: 'South America', temperature: 86, beach: false, sea: false, wifi: 'weak', hiking: true, overall_rating: 7, },
    { city: 'Muscat', country: 'Oman', region: 'Middle East', temperature: 105, beach: true, sea: true, wifi: 'strong', hiking: true, overall_rating: 9, },
    { city: 'Sydney', country: 'Australia', region: 'Oceania', temperature: 92, beach: true, sea: true, wifi: 'strong', hiking: true, overall_rating: 8, },
    { city: 'Cape Town', country: 'South Africa', region: 'Africa', temperature: 87, beach: true, sea: true, wifi: 'medium', hiking: true, overall_rating: 10, },
    { city: 'Cancun', country: 'Mexico', region: 'North America', temperature: 95, beach: true, sea: true, wifi: 'medium', hiking: false, overall_rating: 7, },
];

/*
TASK 4 🚀
// The travel agent would like to send a couple on their honeymoon to a location with a beach and a temperature above 90 degrees. return their options in a new array 
*/

let honeymoonDest = vacations.filter(item =>
    (item.beach === true) && (item.temperature > 90))

console.log(honeymoonDest)

/*
TASK 5 🚀
// A developer decides to become a digital nomad for a year, they would like to live in a place with strong wifi, a beach, and good hiking, return their options
*/

let nomadLocation = vacations.filter(item =>
    (item.wifi === 'strong') && (item.hiking === true))

console.log(nomadLocation)
/* 
TASK 6 🚀
// write a function that allows a user to sort their vacations by hiking opportunities, beach access or a mix of both and return their options
*/

function helpMeDecide(array, choice) {
    if (choice === "hiking") {
        let hikingChoices = array.filter(item =>
            item.hiking === true)
        return hikingChoices
    }

    else if (choice === "beach") {
        let beachChoices = array.filter(item =>
            item.beach === true)
        return beachChoices
    }
    else if (choice === "both") {
        let hikeBeach = array.filter(item =>
            item.hiking === true && item.beach === true)
        return hikeBeach
    }
}


console.log(helpMeDecide(vacations, 'both'))

/* 
TASK 7 🚀
// write a function that finds the average of overall ratings in a given array. The function should take an array as its argument and should return the average of the overall ratings in that array 
hint - use .reduce()
*/

function rating(array) {
    const totalRating = array.reduce(function (accumulator, item) {
        return accumulator + item.overall_rating;

    }, 0);
    return totalRating
}
console.log(rating(vacations))





/*TASK 8 🚀
Find the airport codes for each of the cities in the vacation array and write a function to add them to the objects in the array
hint - your function should include array, index and code as parameters
you will need to invoke the function each time you wish to add a new code
*/

vacations.forEach(function (item) {
    item.airportCode = "";
});
function addAirportCode(array, i, code) {
    array[i].airportCode = code;

    return array;
}

addAirportCode(vacations, 0, "YYZ")
addAirportCode(vacations, 1, "MIA")
addAirportCode(vacations, 2, "TLV")
addAirportCode(vacations, 3, "IST")
addAirportCode(vacations, 4, "BKK")
addAirportCode(vacations, 5, "LIM")
addAirportCode(vacations, 6, "MCT")
addAirportCode(vacations, 7, "SYD")
addAirportCode(vacations, 8, "CPT")
addAirportCode(vacations, 9, "CUN")
