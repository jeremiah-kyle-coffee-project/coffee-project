"use strict";

// TABLE CONTENT //

let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

let inputName = document.querySelector('#input-name');
let inputRoast = document.querySelector('#input-roast');
let CoffeeButton = document.querySelector('#input-submit');
CoffeeButton.addEventListener("click", addCoffees);

function addCoffees () {
    let addID = coffees.length + 1;
    let addName = inputName.value.toString();
    let addRoast = inputRoast.value.toString();
    let input = {id: addID, name: addName, roast: addRoast};
    coffees.push(input);
    coffeeList.innerHTML = renderCoffees(coffees);
}
// PUTS COFFEE DATA INTO TABLE WITHIN JS //
function renderCoffee(coffee) {
    let html = '<div class="product-container">';
    html += '<h1 class="product-name">' + coffee.name + '</h1>';
    html += '<p class="product-roast">' + coffee.roast + '</p>';
    html += '</div>';
    return html;
}
// CONVERTS ABOVE TABLE DATA INTO STRINGS //
function renderCoffees(coffees) {
    let html = "";
    for(let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// EXPORTS" DATA INTO TABLE OF HTML //
let coffeeList = document.querySelector('#coffees');
coffeeList.innerHTML = renderCoffees(coffees);

// SUBMIT SECTION //
let roastSelection = document.querySelector('#roast-selection');

function updateCoffees(x) {
    x.preventDefault();
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast || selectedRoast === "all") {
            filteredCoffees.push(coffee);
        }
    });
    coffeeList.innerHTML = renderCoffees(filteredCoffees);
}

let submitButton = document.querySelector('#submit');
submitButton.addEventListener("click", updateCoffees);

// LIVE SEARCH FUNCTION //
function searchCoffees() {
    let searchRoast = searchBox.value.toUpperCase();
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.name.toUpperCase().includes(searchRoast)) {
            filteredCoffees.push(coffee);
        }
    });
    coffeeList.innerHTML = renderCoffees(filteredCoffees);
}

let searchBox = document.querySelector('#searchBox');
searchBox.addEventListener("keyup", searchCoffees);