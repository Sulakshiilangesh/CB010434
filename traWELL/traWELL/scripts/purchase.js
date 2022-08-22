//constants and variables
const addToFav = document.getElementById("addToFav");
const orderFav = document.getElementById("orderFav");
const checkLoyalty = document.getElementById("checkLoyalty");

const addToCart1 = document.getElementById("addToCart1");
const addToCart2 = document.getElementById("addToCart2");
const addToCart3 = document.getElementById("addToCart3");
const addToCart4 = document.getElementById("addToCart4"); 

const toteBag = document.getElementById("toteBags").innerHTML;
const toteBagCost = document.getElementById("toteBagCost").innerHTML;
const selectColour1 = document.getElementById("choose_item1");

const roundNectTshirt = document.getElementById("roundNectTshirt").innerHTML;
const roundNectTshirtCost = document.getElementById(
  "roundNectTshirtCost"
).innerHTML;
const selectColour2 = document.getElementById("choose_item2");

const collaredtTshirt = document.getElementById("collaredtTshirt").innerHTML;
const collaredtTshirtCost = document.getElementById(
  "collaredtTshirtCost"
).innerHTML;
const selectColour3 = document.getElementById("choose_item3");

const hoodie = document.getElementById("hoodie").innerHTML;
const hoodieCost = document.getElementById("hoodieCost").innerHTML;
const selectColour4 = document.getElementById("choose_item4");

let cartOutput = document.getElementById("displayOrder");
let loyaltyOutput = document.getElementById("displayLoyalty");

let cart = []; //empty array to show ordered items

//displaying cart
function displayCart() {
  let output = "<h5>CURRENT ORDER</h5>";
  output += "<ul>";
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].colour == "") {
      cart[i].colour = "Black";
    }
    output +=
      "<li>" +
      "<span>" +
      cart[i].name +
      "</span>" +
      "<span>" +
      cart[i].price +
      "</span>" +
      "<span>" +
      cart[i].colour +
      "</span>" +
      "</li>";
  }
  output += "</ul>";
  cartOutput.innerHTML = output;
}

//add to cart buttons
addToCart1.addEventListener("click", (event) => {
  event.preventDefault();
  const item = {
    name: toteBag,
    price: toteBagCost,
    colour: selectColour1.options[selectColour1.selectedIndex].value,
  };
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
  addToCart1.value = "Added to Cart";
});

addToCart2.addEventListener("click", (event) => {
  event.preventDefault();
  const item = {
    name: roundNectTshirt,
    price: roundNectTshirtCost,
    colour: selectColour2.options[selectColour2.selectedIndex].value,
  };
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
  addToCart2.value = "Added to Cart";
});

addToCart3.addEventListener("click", (event) => {
  event.preventDefault();
  const item = {
    name: collaredtTshirt,
    price: collaredtTshirtCost,
    colour: selectColour3.options[selectColour3.selectedIndex].value,
  };
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
  addToCart3.value = "Added to Cart";
});

addToCart4.addEventListener("click", (event) => {
  event.preventDefault();
  const item = {
    name: hoodie,
    price: hoodieCost,
    colour: selectColour4.options[selectColour4.selectedIndex].value,
  };
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
  addToCart4.value = "Added to Cart";
});

//add to favourites button
addToFav.addEventListener("click", () => {
  localStorage.setItem("favourites", JSON.stringify(cart));
  localStorage.removeItem("cart");
  cart = [];
  cartOutput.innerHTML = "";
});

//order favourites button
orderFav.addEventListener("click", () => {
  cart.push(...JSON.parse(localStorage.getItem("favourites")));
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
});

//check loyalty button
checkLoyalty.addEventListener("click", () => {
  if (cart.length > 3) {
    let loyalty = cart.length * 20
    loyaltyOutput.innerText = "You have \t" + loyalty + "\t loyalty points."
  }
  else {
    loyaltyOutput.innerText = "You have don't have any loyalty points."
  }
})
