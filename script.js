// Variables
const vegetarian = 'Vegetarian Pizza';
const hawaiian = 'Hawaiian Pizza';
const pepperoni = 'Pepperoni Pizza';

const pizzaPrice = 80;

//DOM elements
const pizza = document.querySelector('.theChoosenPizza');
const amount = document.querySelector('.amountPizza');
const submitBtn = document.querySelector('.btn');
const result = document.querySelector('.response');

//function for checking the order name
function checkOrderName(orderName) {
  if (
    orderName.toLowerCase() == vegetarian.toLowerCase() ||
    orderName.toLowerCase() == hawaiian.toLowerCase() ||
    orderName.toLowerCase() == pepperoni.toLowerCase()
  ) {
    return true;
  } else {
    return false;
  }
}

//function for total price
function totalCost(orderQuantity) {
  return orderQuantity * pizzaPrice;
}

//function for cooking time
function cookingTime(orderQuantity) {
  if (orderQuantity >= 1 && orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return 15;
  } else {
    return 20;
  }
}

//function reset
function resetForm() {
  pizza.value = '';
  amount.value = '';
}

//event listener for submit button
submitBtn.addEventListener('click', function (e) {
  e.preventDefault();

  let orderName = pizza.value;
  let orderQuantity = amount.value;

  if (checkOrderName(orderName)) {
    const total = totalCost(orderQuantity);
    const time = cookingTime(orderQuantity);

    resetForm();
    result.style.padding = '50px';
    result.textContent = `You ordered ${orderQuantity} ${orderName}. Total cost is ${total} SEK. The cooking time will take ${time} minutes.`;
  } else {
    result.style.padding = '50px';
    result.textContent = `Sorry, we don't have ${orderName} on the menu. Please choose Vegetarian Pizza, Hawaiian Pizza or Pepperoni Pizza.`;
    resetForm();
  }
});
