document.addEventListener("DOMContentLoaded", function(){

	var img1 = document.getElementById("img1");
	var img2 = document.getElementById("img2");
	var img3 = document.getElementById("img3");
	var img4 = document.getElementById("img4");

	var img101 = document.querySelector(".img101");

	var img1Childs = img1.childNodes;
	var img2Childs = img2.childNodes;
	var img3Childs = img3.childNodes;
	var img4Childs = img4.childNodes;
	
	var pill = document.querySelector('.chapter1_pill');
	var c203 = document.querySelector("chapter1_203");

	window.addEventListener("scroll", function() {

		var scrollValue = window.scrollY;
		console.log ("scrollY is " + scrollValue + "");


		//알약 움직임
		if ( scrollValue >= '5463') {
			pill.classList.add('pill_effect');
		} else {
			pill.classList.remove('pill_effect');
		};
		
	})
	
	// 1단계
	document.getElementById('step1').addEventListener("click", function(){

		img1.style.display = "block";
		img2.style.display = 'none';
		img3.style.display = 'none';
		img4.style.display = 'none';
		
	});


	// 2단계
	document.getElementById('step2').addEventListener("click", function(){

		img1.style.display = 'none';
		img2.style.display = 'block';
		img3.style.display = 'none';
		img4.style.display='none';
		//console.log("renren");

	});


	// 3단계
	document.getElementById('step3').addEventListener("click", function(){

		img1.style.display = "none";
		img2.style.display = 'none';
		img3.style.display = 'block';
		img4.style.display='none';

	});

	
	// 4단계
	document.getElementById('step4').addEventListener("click", function(){

		img1.style.display = "none";
		img2.style.display = 'none';
		img3.style.display = 'none';
		img4.style.display='block';

	});


})