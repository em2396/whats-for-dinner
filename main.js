var letsCook = document.querySelector('#letsCook');
var sideRadioButton = document.querySelector('#sideRadioButton');
var mainRadioButton = document.querySelector('#mainRadioButton');
var dessertRadioButton = document.querySelector('#dessertRadioButton');
var entireMealRadioButton = document.querySelector('#entireMealRadioButton');
var cookpotImage = document.querySelector('.cookpotImage');
var dishResult = document.querySelector('#dishResult');
var youShouldMake = document.querySelector('#youShouldMake');

var sides = [
    'Miso Glazed Carrots', 
    'Coleslaw', 
    'Garden Salad', 
    'Crispy Potatoes', 
    'Sweet Potato Tots',
    'Coconut Rice',
    'Caesar Salad',
    'Shrimp Summer Rolls',
    'Garlic Butter Mushrooms',
    'Hush Puppies',
    'Crispy Broccoli',
    'Cheesy Rice',
    'Garlic Noodles'
];

var mains = [
    'Spaghetti and Meatballs',
    'Pineapple Chicken',
    'Shakshuka',
    'Thai Yellow Curry',
    'Bibimbap',
    'Chicken Parmesan',
    'Butternut Squash Soup',
    'BBQ Chicken Burgers',
    'Ramen',
    'Empanadas',
    'Chicken Fried Rice',
    'Sheet Pan Fajitas',
    'Margherita Pizza',
    'Pepperoni Pizza',
    'Mac and Cheese',
    'Grilled Cheese'
];

var desserts = [
    'Apple Pie',
    'Lemon Meringue Pie',
    'Black Forest Cake',
    'Banana Bread',
    'Peach Cobbler',
    'Cheesecake',
    'Funfetti Cake',
    'Baklava',
    'Flan',
    'Macarons',
    'Chocolate Cupcakes',
    'Pavlova',
    'Pumpkin Pie',
    'Key Lime Pie',
    'Tart Tatin',
    'Croissants',
    'Eclairs',
    'Homemade Ice Cream'
];

letsCook.addEventListener('click', generateRandomDish);

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function generateRandomDish() {
    cookpotImage.classList.add('hidden');
    youShouldMake.classList.remove('hidden');
    var dishForTonight;
    if (sideRadioButton.checked) {
        var sideIndex = getRandomIndex(sides);
        dishForTonight = sides[sideIndex];
        dishResult.innerText = `${dishForTonight}`;
        return dishForTonight;
    } else if (mainRadioButton.checked) {
        var mainIndex = getRandomIndex(mains);
        dishForTonight = mains[mainIndex];
        dishResult.innerText = `${dishForTonight}`;
        return dishForTonight;
    } else if (dessertRadioButton.checked) {
        var dessertIndex = getRandomIndex(desserts);
        dishForTonight = desserts[dessertIndex];
        dishResult.innerText = `${dishForTonight}`;
        return dishForTonight;
    } else if (entireMealRadioButton.checked) {
        var sideIndex = getRandomIndex(sides);
        var mainIndex = getRandomIndex(mains);
        var dessertIndex = getRandomIndex(desserts);
        dishForTonight = mains[mainIndex] + ', ' + sides[sideIndex] + ', ' + desserts[dessertIndex];
        dishResult.innerText = `${dishForTonight}`;
        return dishForTonight;
    } else if (!entireMealRadioButton.checked || !sideRadioButton.checked || !mainRadioButton.checked || !dessertRadioButton.checked) {
        alert(`Please select a dish type.`)
        cookpotImage.classList.remove('hidden');
    }
};