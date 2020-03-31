// the local storage for add the first item to cart
function addElement1 () {
	if (typeof(Storage) !== "undefined") {
		localStorage.setItem("productName", "samsung computer");
		localStorage.setItem("desc", "a korean computer");
		localStorage.setItem("price", "300");
		localStorage.setItem("mysrc", "images/carousel1.jpeg");
		localStorage.setItem("myDiv", "div");
		localStorage.setItem("count", 1);
	}
}
// the local storage for add the second item to cart
function addElement2 () {
	if (typeof(Storage) !== "undefined") {
		localStorage.setItem("productName1", "Dell computer");
		localStorage.setItem("desc1", "japanese computer");
		localStorage.setItem("price1", "280");
		localStorage.setItem("mysrc1", "images/carousel2.jpeg");
		localStorage.setItem("myDiv1", "div");
		localStorage.setItem("count1", 1);
	}
}
// the local storage for add the first item to cart
function addElement3 () {
	if (typeof(Storage) !== "undefined") {
		localStorage.setItem("productName2", "HP computer");
		localStorage.setItem("desc2", "american computer");
		localStorage.setItem("price2", "277");
		localStorage.setItem("mysrc2", "images/carousel3.jpeg");
		localStorage.setItem("myDiv2", "div");
		localStorage.setItem("count2", 1);
	}
}


