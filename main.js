//QUERYSELECTORS HERE
var letsCook = document.querySelector('#letsCook');



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

function generateRandomDish(event) {
    if (event === 'Side'){
        var sideIndex = getRandomIndex(sides);
        var tonightSide = sides[sideIndex];
        return tonightSide;
    } else if (event === 'Main Dish') {
        var mainDishIndex = getRandomIndex(mains);
        var tonightMain = mains[mainDishIndex];
        return tonightMain;
    } else if (event === 'Dessert') {
        var dessertIndex = getRandomIndex(desserts);
        var tonightDessert = desserts[dessertIndex];
        return tonightDessert;
    }
    // } else if (event === 'Entire Meal') {

    // }
}