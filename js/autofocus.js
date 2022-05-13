document.addEventListener("DOMContentLoaded", function(){
	// 'use strict';
	console.log('ji')
	const rBtn = document.getElementById("recordButton")
	const sBtn = document.getElementById("stopButton")

	rBtn.focus();

	rBtn.addEventListener("click", function(e){ sBtn.focus() })
});
