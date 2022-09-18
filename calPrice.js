// Script - calPrice.js

function calPrice() {
	// to calculate "JustJava" price
	var javaPrice = document.getElementById("javaCount").value* 2;
	
	// to calculate "Cafe au Lait" price
	if (document.getElementById("cafe1").checked){
		var cafePrice =  document.getElementById("cafeCount").value * 2;
	}
	if (document.getElementById("cafe2").checked){
		var cafePrice =  document.getElementById("cafeCount").value * 3;
	}
	
	// to calculate "Iced Cappuccino" price
	if (document.getElementById("cap1").checked){
		var capPrice =  document.getElementById("capCount").value * 4.75;
	}
	if (document.getElementById("cap2").checked){
		var capPrice =  document.getElementById("capCount").value * 5.75;
	}

	document.getElementById("javaPrice").value = javaPrice;
	document.getElementById("cafePrice").value = cafePrice;
	document.getElementById("capPrice").value = capPrice;
	document.getElementById("totalPrice").value = javaPrice + cafePrice + capPrice; 	
}

