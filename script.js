let cardName = document.querySelector("#cardName");
let cardNumber = document.querySelector("#cardNumber");
let cardMonth = document.querySelector("#cardMonth");
let cardYear = document.querySelector("#cardYear");
let cardCVC = document.querySelector("#cardCVC");

let cardNameDisplay = document.querySelector(".cardNameDisplay");
let cardNumberDisplay = document.querySelector(".cardNumberDisplay");
let cardMonthDisplay = document.querySelector("#cardMonthDisplay");
let cardYearDisplay = document.querySelector("#cardYearDisplay");
let cardCVCDisplay = document.querySelector(".cardCVCDisplay");

let confirmButton = document.querySelector("#confirmButton");

cardName.oninput = () => {
	cardNameDisplay.innerText = cardName.value;
	cardName.classList.remove("error");
}

cardNumber.oninput = () => {
	/*
		https://stackoverflow.com/questions/17260238/how-to-insert-space-every-4-characters-for-iban-registering
	*/
	// insert a blank space every 4 characters
	cardNumber.value = cardNumber.value
		.replace(/[^\dA-Z]/g, "")
		.replace(/(.{4})/g, "$1 ")
		.trim();

	cardNumberDisplay.innerText = cardNumber.value;
	cardNumber.classList.remove("error");
};

cardMonth.oninput = () => {		
  cardMonthDisplay.innerText = cardMonth.value;
	cardMonth.classList.remove("error");
};

cardYear.oninput = () => {
	cardYearDisplay.innerText = cardYear.value;
	cardYear.classList.remove("error");
};

cardCVC.oninput = () => {	
	cardCVCDisplay.innerText = cardCVC.value;
	cardCVC.classList.remove("error");
};

// actually i dont wanna deal with this anymore lol
confirmButton.onclick = () => {
	// check if card name is blank or has a non A-Z
	if (cardName.value == "") {
    cardName.classList.add("error");
  }

	// check if card number has non number or blank
	if (cardNumber.value == "" || cardNumber.value.length != 19) {
    cardNumber.classList.add("error");
  }

	// check if card month has non number or blank or 
	if (cardMonth.value == "") {
    cardMonth.classList.add("error");
  }

	// check if card year has non number or blank
	if (cardYear.value == "") {
		cardYear.classList.add("error");
	}
	
	// check if card cvc has non number or blank
	if (cardCVC.value == "") {
		cardCVC.classList.add("error")
	}
}