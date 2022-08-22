//constants and variables
const adultsSelect = document.getElementById("adults");
const childrenSelect = document.getElementById("children");
const radioLocal = document.getElementById("ticketchoice_local");
const radioChild = document.getElementById("ticketchoice_child");
const radioForeign = document.getElementById("ticketchoice_foreign");
const childrenBelow6 = document.getElementById("ChildrenBelow6");
const childrenBelow15 = document.getElementById("ChildrenBelow15");

// formula variables
let TicketChoice;
let currentCost = 0;
let overallCost = 0;

const txtOutput = document.getElementById("currentOrderOutput");
const addOrderOutput = document.getElementById("addOrderOutput");

const selectActivity = document.getElementById("select_activity");
const selectNumberOfAdults = document.getElementById("adults");
const selectNumberOfChildren = document.getElementById("children");
const selectNumberOfChildrenBelow6 = document.getElementById("ChildrenBelow6");
const selectNumberOfChildrenBelow15 =
  document.getElementById("ChildrenBelow15");
const selectDuration = document.getElementById("duration");
const selectAnnualPasses = document.getElementById("annualPass");
const selectFoodTokens = document.getElementById("foodTokens");

let activityOutput = "";
let ticketOuptut = "";
let adultNumberOutput = "";
let childNumberOutput = "";
let childrenBelow6Output = "";
let childrenBelow15Output = "";
let durationOutput = "";
let annualPassOutput = "";
let foodTokensOutput = "";

//to display types of tickets for each pass

radioLocal.addEventListener("click", SelectEnable);
radioChild.addEventListener("click", SelectEnable);
radioForeign.addEventListener("click", SelectEnable);

function SelectEnable() {
  ticketOuptut = "";
  if (this.value == "LocalPass") {
    selectNumberOfAdults.value = null;
    selectNumberOfChildren.value = null;
    selectNumberOfChildrenBelow6.value = null;
    selectNumberOfChildrenBelow15.value = null;
    adultNumberOutput = "";
    childrenBelow6Output = "";
    childrenBelow15Output = "";
    childNumberOutput = "";
    currentCost = 0;
    adultsSelect.disabled = false;
    childrenSelect.disabled = true;
    adultsSelect.hidden = false;
    childrenSelect.hidden = false;
    childrenBelow6.hidden = true;
    childrenBelow15.hidden = true;
  } else if (this.value == "Children'sPass") {
    selectNumberOfAdults.value = null;
    selectNumberOfChildren.value = null;
    selectNumberOfChildrenBelow6.value = null;
    selectNumberOfChildrenBelow15.value = null;
    adultNumberOutput = "";
    childNumberOutput = "";
    currentCost = 0;
    adultsSelect.disabled = true;
    childrenSelect.disabled = true;
    adultsSelect.hidden = true;
    childrenSelect.hidden = true;
    childrenBelow6.hidden = false;
    childrenBelow15.hidden = false;
  } else if (this.value == "ForeignerPass") {
    selectNumberOfAdults.value = null;
    selectNumberOfChildren.value = null;
    selectNumberOfChildrenBelow6.value = null;
    selectNumberOfChildrenBelow15.value = null;
    adultNumberOutput = "";
    childrenBelow6Output = "";
    childrenBelow15Output = "";
    currentCost = 0;
    adultsSelect.disabled = false;
    childrenSelect.disabled = false;
    adultsSelect.hidden = false;
    childrenSelect.hidden = false;
    childrenBelow6.hidden = true;
    childrenBelow15.hidden = true;
  }
  TicketChoice = this.value;
  ticketOuptut = "Ticket choice: " + TicketChoice + "<br>";
  displayCurrentOrder();
}

//values of input fields

selectActivity.addEventListener("change", () => {
  let activity = selectActivity.options[selectActivity.selectedIndex].value;
  activityOutput = "";
  activityOutput += "Selected Activity: " + activity + "<br>";
  displayCurrentOrder();
});

selectNumberOfAdults.addEventListener("change", () => {
  let adultsNum = selectNumberOfAdults.value;
  adultNumberOutput = "";
  adultNumberOutput += "Number of Adults: " + adultsNum + "<br>";
  CalculateCurrentCost();
  displayCurrentOrder();
});

selectNumberOfChildren.addEventListener("change", () => {
  let childrenNum = selectNumberOfChildren.value;
  childNumberOutput = "";
  childNumberOutput += "Number of Children: " + childrenNum + "<br>";
  CalculateCurrentCost();
  displayCurrentOrder();
});

selectNumberOfChildrenBelow6.addEventListener("change", () => {
  let childrenBelow6Num = selectNumberOfChildrenBelow6.value;
  childrenBelow6Output = "";
  childrenBelow6Output +=
    "Number of Children below 6: " + childrenBelow6Num + "<br>";
  CalculateCurrentCost();
  displayCurrentOrder();
});

selectNumberOfChildrenBelow15.addEventListener("change", () => {
  selectNumberOfAdults.value = 0;
  selectNumberOfChildren.value = 0;
  let childrenBelow15Num = selectNumberOfChildrenBelow15.value;
  childrenBelow15Output = "";
  childrenBelow15Output +=
    "Number of Children below 15: " + childrenBelow15Num + "<br>";
  CalculateCurrentCost();
  displayCurrentOrder();
});

selectDuration.addEventListener("change", () => {
  let duration = selectDuration.options[selectDuration.selectedIndex].value;
  durationOutput = "";
  durationOutput += "Duration: " + duration + "<br>";
  CalculateCurrentCost();
  displayCurrentOrder();
});

selectAnnualPasses.addEventListener("change", () => {
  let AnnualPassNum = selectAnnualPasses.value;
  annualPassOutput = "";
  annualPassOutput += "Number of Annual Passes: " + AnnualPassNum + "<br>";
  CalculateCurrentCost();
  displayCurrentOrder();
});

selectFoodTokens.addEventListener("change", () => {
  let FoodTokenNum = selectFoodTokens.value;
  foodTokensOutput = "";
  foodTokensOutput += "Number of Food Tokens: " + FoodTokenNum + "<br>";
  CalculateCurrentCost();
  displayCurrentOrder();
});

//updating and displaying current order
function displayCurrentOrder() {
  let output =
    "<h5> CURRENT ORDER <br>" +
    activityOutput +
    ticketOuptut +
    adultNumberOutput +
    childNumberOutput +
    childrenBelow6Output +
    childrenBelow15Output +
    durationOutput +
    annualPassOutput +
    foodTokensOutput +
    "<br>" +
    "Cost of Current order = LKR " +
    currentCost +
    "</h5>";
  txtOutput.innerHTML = output;
}

function CalculateCurrentCost() {
  if (TicketChoice == "LocalPass") {
    currentCost = selectNumberOfAdults.value * 2500;
    if (selectDuration.value == "3hrs") {
      currentCost += 0 * selectNumberOfAdults.value;
    } else if (selectDuration.value == "1/2day") {
      currentCost += 250 * selectNumberOfAdults.value;
    } else if (selectDuration.value == "1day") {
      currentCost += 500 * selectNumberOfAdults.value;
    } else if (selectDuration.value == "2days") {
      currentCost += 1000 * selectNumberOfAdults.value;
    }
  } else if (TicketChoice == "Children'sPass") {

    let below6 = selectNumberOfChildrenBelow6.value;
    let below15 = selectNumberOfChildrenBelow15.value;

    if (!below6) {
      below6 = 0;
    } else if (!below15) {
      below15 = 0;
    }
    currentCost =
      below6 * 500 +
      below15 * 1000;
    if (selectDuration.value == "3hrs") {
      currentCost +=
        0 *
        (parseInt(below6) +
          parseInt(below15));
    } else if (selectDuration.value == "1/2day") {
      currentCost +=
        250 *
        (parseInt(below6) +
          parseInt(below15));
    } else if (selectDuration.value == "1day") {
      currentCost +=
        500 *
        (parseInt(below6) +
          parseInt(below15));
    } else if (selectDuration.value == "2days") {
      currentCost +=
        1000 *
        (parseInt(below6) +
          parseInt(below15));
    }
  } else if (TicketChoice == "ForeignerPass") {

    if (!selectNumberOfChildren.value) {
      selectNumberOfChildren.value = 0;
    }

    currentCost =
      selectNumberOfAdults.value * 3000 + selectNumberOfChildren.value * 2500;
    if (selectDuration.value == "3hrs") {
      currentCost +=
        1000 *
        (parseInt(selectNumberOfAdults.value) +
          parseInt(selectNumberOfChildren.value));
    } else if (selectDuration.value == "1/2day") {
      currentCost +=
        500 *
        (parseInt(selectNumberOfAdults.value) +
          parseInt(selectNumberOfChildren.value));
    } else if (selectDuration.value == "1day") {
      currentCost +=
        1000 *
        (parseInt(selectNumberOfAdults.value) +
          parseInt(selectNumberOfChildren.value));
    } else if (selectDuration.value == "2days") {
      currentCost +=
        2000 *
        (parseInt(selectNumberOfAdults.value) +
          parseInt(selectNumberOfChildren.value));
    }
  }

  currentCost += selectAnnualPasses.value * 5000 + selectFoodTokens.value * 500;
}

function validateForm() {
  if (!selectActivity.value) {
    alert("Please select an activity!");
    return false;
  } 
  
  if (!TicketChoice) {
    alert("Please enter your choice of ticket!");
    return false;
  } 
  
  if (TicketChoice == "LocalPass" || TicketChoice == "ForeignerPass") {
    if (!selectNumberOfAdults.value) {
      alert("Please enter the number of adults!");
      return false;
    }
    else if (selectNumberOfAdults.value < 0) {
      alert("Please enter a valid number of adults!");
      return false;
    }
    else if (selectNumberOfChildren.value < 0) {
      alert("Please enter a valid number of children!");
      return false;
    }
  } else if (TicketChoice == "Children'sPass") {
    if (
      !selectNumberOfChildrenBelow15.value &&
      !selectNumberOfChildrenBelow6.value
    ) {
      alert("Please enter the number of children!");
      return false;
    }
    else if (selectNumberOfChildrenBelow6.value < 0 || selectNumberOfChildrenBelow15.value < 0) {
      alert("Please enter a valid number of children!");
      return false;
    }
  } 
  
  if (!selectDuration.value) {
    alert("Please select a duration!");
    return false;
  }

  return true;
}

//add to order button
let addToOrder = document.getElementById("add_order");
addToOrder.addEventListener("click", AddOrder);

let overallOrderOutput = document.getElementById("overallOrderOutput");

let count = 1;

function AddOrder(event) {
  event.preventDefault();
  if (validateForm()) {
    overallCost += currentCost;

    let output2 =
      "<h5> ORDER " +
      count +
      "<br>" +
      activityOutput +
      ticketOuptut +
      adultNumberOutput +
      childNumberOutput +
      childrenBelow6Output +
      childrenBelow15Output +
      durationOutput +
      annualPassOutput +
      foodTokensOutput +
      "<br>" +
      "Cost of Order = LKR " +
      currentCost +
      "</h5>" +
      "<br>";

    addOrderOutput.innerHTML += output2;
    overallOrderOutput.innerHTML = "Cost of Overall order = LKR " + overallCost;
    count += 1;

    txtOutput.innerHTML = "";

    //resetting the form
    document.getElementById("activityForm").reset();

    activityOutput = "";
    ticketOuptut = "";
    adultNumberOutput = "";
    childNumberOutput = "";
    childrenBelow6Output = "";
    childrenBelow15Output = "";
    durationOutput = "";
    annualPassOutput = "";
    foodTokensOutput = "";
  }
}

//place order button
let placeTheOrder = document.getElementById("place_order");
placeTheOrder.addEventListener("click", PlaceOrder);

function PlaceOrder(event) {
  event.preventDefault();
  addOrderOutput.innerHTML = "";
  overallOrderOutput.innerHTML = "";

  //display a order successful message
  alert("Order Successful! Your tickets are by traWELL.");
}
