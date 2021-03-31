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
	let perc = i*25;
	myrange.style.background = "linear-gradient(to right,hsl(174,77%,80%) 0%,hsl(174,77%,80%) " + perc + "%,hsl(224,65%,95%) " + perc + "%,hsl(224,65%,95%) 100%";
	}
	
checkBox.addEventListener('change', changed);