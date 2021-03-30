const prices = [8,12,16,24,36];
const viewers= ["10K","50K","100K","500K","1M"];
const myrange = document.getElementById("myrange");
const priceplace = document.getElementById("prices");
const viewerplace = document.getElementById("viewers");
const checkBox = document.getElementById("annual");
var discount = 1;

console.log("Script ready!");

function changed(){
	console.log("Range changed");
	if(checkBox.checked){
		discount = .75;
	}
	else{
		discount = 1;
	}
	
	let i = myrange.value;
	let prc = prices[i];
	let pric = prc*discount;
	priceplace.innerHTML = "$" + pric.toFixed(2);
	viewerplace.innerHTML = viewers[i];
	}
	
checkBox.addEventListener('change', changed);