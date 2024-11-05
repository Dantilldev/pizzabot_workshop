const vegetarian = 'Vegetarian Pizza';
const hawaiian = 'Hawaiian Pizza';
const pepperoni = 'Pepperoni Pizza';

const pizzaPrice = 80;

//Put your Javscript code here:

// Task1.2
alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`
);

// task 2.3
let orderName = prompt(`Enter the name of the pizza you want to order today.`);

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

function totalCost(orderQuantity) {
  return orderQuantity * pizzaPrice;
}

function cookingTime(orderQuantity) {
  if (orderQuantity >= 1 && orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return 15;
  } else {
    return 20;
  }
}

if (checkOrderName(orderName)) {
  let orderQuantity = prompt(`How many of ${orderName} do you want`);

  const total = totalCost(orderQuantity);
  const time = cookingTime(orderQuantity);

  alert(
    `Great, I'll get started on your ${orderName} right away, it will cost ${total} kr. The pizzas will take ${time} minutes.`
  );
} else {
  alert(`Sorry, we don't have that pizza on the menu`);
}
