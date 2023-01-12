// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
renderButtons();
renderIngredientsBoard();
renderPrice();
}

function renderPatty() {
  var  patty = document.querySelector("#patty");
  //you can also use getElementById
//   alert('hi guys')
    
   state.Patty ? (patty.style.display = "inherit"): patty.style.display = "none"
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  var  cheese = document.querySelector('#cheese');

   state.Cheese ? cheese.style.display = "inherit": cheese.style.display = "none"
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  var  tomatoes = document.querySelector('#tomato');

return state.Tomatoes ? tomatoes.style.display = "inherit": tomatoes.style.display = "none"
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  var  onion = document.querySelector('#onion');

  return state.Onions ? onion.style.display = "inherit": onion.style.display = "none"
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  var  lettuce = document.querySelector('#lettuce');

  return state.Lettuce ? lettuce.style.display = "inherit": lettuce.style.display = "none"
}

document.querySelector(".btn-patty").onclick = function () {
    state.Patty = !state.Patty
    renderAll();
// alert('hi')
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function(){
    state.Cheese = !state.Cheese;
    renderAll();
    // alert('he')
}

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function(){
    state.Tomatoes = !state.Tomatoes;
    renderAll()
    // alert('he')
}


// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function(){
    state.Onions = !state.Onions;
    renderAll()
    // alert('he')
}


// Trial 2 - Setup event listener for the lettuce button

document.querySelector(".btn-lettuce").onclick = function(){
    state.Lettuce = !state.Lettuce;
    renderAll()
    // alert('he')
}


//Challenge 1 - Add/Remove the class active to the buttons based on state
var buttons = document.querySelectorAll('.button')
function renderButtons(){
  buttons.forEach((i) =>{
    state[i.textContent] ? i.classList.add('active') :i.classList.remove('active')
  })
 
}

//Challenge 2 - Render only the items selected in the ingredients board based on the state
var menu = document.querySelectorAll('.items')
function renderIngredientsBoard(){
  menu.forEach(i => {
    state[i.textContent] ? i.style.display = 'inherit' : i.style.display = 'none'
  })
}

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients

document.getElementById('price-details').innerHTML = `INR ${160}`
function renderPrice(){
    var cost = 10
  Object.keys(state).forEach(ingredient => {
    state[ingredient] ? cost += ingredients[ingredient]:null
  })
  document.getElementById('price-details').innerHTML = `INR ${cost}`
} 


