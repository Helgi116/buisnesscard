'use strict'

let btnDownload = document.getElementById("btn-download"),
	btnScan = document.getElementById("btn-scan"),
	gap = document.getElementById("gap");

function showGap() {
	gap.classList.remove("hide");
}	

function hideGap() {
	gap.classList.add("hide");
}
	
btnScan.addEventListener('click', function() {
	showGap();
});

gap.addEventListener('click', function() {
	hideGap();
});

