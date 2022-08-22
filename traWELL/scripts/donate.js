const Name = document.getElementById("name");
const address = document.getElementById("address");
const donationAmount = document.getElementById("donationAmount");
const customAmount = document.getElementById("amount");
const holderName = document.getElementById("holder");
const ccn = document.getElementById("ccn");
const cvv = document.getElementById("cvv");
const expiryDate = document.getElementById("exp");

let donate = document.getElementById("donate");
donate.addEventListener("click", Donate);

function Donate() {
  if (validateForm()) {
    alert("Donation Successful!");
    document.getElementById("donateForm").reset();
  }
}

function validateForm() {
  if (!Name.value) {
    alert("Please enter your name!");
    return false;
  }

  if (!address.value) {
    alert("Please enter your address!");
    return false;
  }

  if (!donationAmount.value && !customAmount.value) {
    alert("Please enter the donation amount!");
    return false;
  }

  if (!donationAmount.value && customAmount.value < 0) {
    alert("Please enter a valid donation amount!");
    return false;
  }

  if (!holderName.value) {
    alert("Please enter the account holder's name!");
    return false;
  }

  if (!ccn.value) {
    alert("Please enter your credit card number!");
    return false;
  }

  if (!cvv.value) {
    alert(
      "Please enter the three-digit number at the back of your credit card!"
    );
    return false;
  }

  if (!expiryDate.value) {
    alert("Please enter the expiry date of your credit card!");
    return false;
  }

  return true;
}
