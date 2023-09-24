window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
};

//the listener function here

// window.woho = () => {
// 	alert("wohooo")
// }
let button = document.getElementById("theGreen")
button.addEventListener("click", woho);

function woho() {
	alert("wohoo")
}