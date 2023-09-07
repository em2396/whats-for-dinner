//QUERYSELECTORS HERE
var letsCook = document.querySelector('#letsCook');
var sideRadioButton = document.querySelector('#sideRadioButton');
var mainRadioButton = document.querySelector('#mainRadioButton');
var dessertRadioButton = document.querySelector('#dessertRadioButton');
var entireMealRadioButton = document.querySelector('#entireMealRadioButton');
var cookpotImage = document.querySelector('.cookpotImage');
var dishResult = document.querySelector('#dishResult');

//VARIABLE DECLARATIONS HERE
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


//EVENTLISTENERS HERE
letsCook.addEventListener('click', generateRandomDish)



//FUNCTIONS HERE

//Create a function that picks a random index of a given array
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function generateRandomDish() {
    cookpotImage.classList.add('hidden');
    var dishForTonight
    if (sideRadioButton.checked) {
        var sideIndex = getRandomIndex(sides);
        dishForTonight = sides[sideIndex];
    } else if (mainRadioButton.checked) {
        var mainIndex = getRandomIndex(mains);
        dishForTonight = mains[mainIndex];
    } else if (dessertRadioButton.checked) {
        var dessertIndex = getRandomIndex(desserts);
        dishForTonight = desserts[dessertIndex];
    } else if (entireMealRadioButton.checked) {
        var sideIndex = getRandomIndex(sides);
        var mainIndex = getRandomIndex(mains);
        var dessertIndex = getRandomIndex(desserts);
        dishForTonight = mains[mainIndex] + ', ' + sides[sideIndex] + ', ' + desserts[dessertIndex];
    } else if (!entireMealRadioButton.checked || !sideRadioButton.checked || !mainRadioButton.checked || !dessertRadioButton.checked) {
        alert(`Please select a dish type.`)
    }
    dishResult.innerText = `You should make: ${dishForTonight}`
    return dishForTonight;
}