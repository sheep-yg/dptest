document.addEventListener("DOMContentLoaded", function(){

	// 1단계
	document.getElementById('step1').addEventListener("click", function(){

		// 스텝바 전체 변화 모습
		document.getElementById('step1').classList.add('active');
		document.getElementById('step2').classList.remove('active');
		document.getElementById('step3').classList.remove('active');
		document.getElementById('step4').classList.remove('active');

		document.getElementById('stepbar').style.width = "0px";
		document.getElementById('stepbar').style.backgroundColor= "#D38098";

		// main		
		if ( document.body.classList.contains('main') ) {
			document.querySelector('.info_eyes').style.display = "none";
			document.querySelector('.blue1').innerText = "상황 설명보다는 대사 위주로";


			document.querySelector('.info_emoji').style.display = "none";
			document.querySelector('.blue3').style.display = "block";

			document.querySelector('.white_2').style.display = "block";
			document.querySelector('.info_scroll').style.display = "none";

			document.querySelector('.blue5').innerText = "초성만 남기고 줄여버리기";	

			document.querySelector('.blue6').innerText = "중요도에 따라 글씨 크기 바꾸기";	
			document.querySelector('.blue6').style.top = "78rem";	
			document.querySelector('.blue6').style.fontSize = "0.9em";	

			document.querySelector('.wiki').style.display = "block";
			document.querySelector('.wiki2').style.display = "none";

			document.querySelector('.plus').style.display = "none";
			document.querySelector('.imgimg').style.display = "none";
			document.querySelector('.blue4').innerText = "이미지와 짧은 글의 조합";


			document.querySelector('.info_text_blind').style.display = "none";
		} 

	});




	// 2단계
	document.getElementById('step2').addEventListener("click", function(){

		// 스텝바 전체 변화 모습
		document.getElementById('step1').classList.add('active');
		document.getElementById('step2').classList.add('active');
		document.getElementById('step3').classList.remove('active');
		document.getElementById('step4').classList.remove('active');

		document.getElementById('stepbar').style.width = "83.3px";
		document.getElementById('stepbar').style.backgroundColor= "#D38098";
		
		// main		
		if ( document.body.classList.contains('main') ) {
			
		} 

		console.log("run2");
	});




	// 3단계
	document.getElementById('step3').addEventListener("click", function(){

		// 스텝바 전체 변화 모습
		document.getElementById('step1').classList.add('active');
		document.getElementById('step2').classList.add('active');
		document.getElementById('step3').classList.add('active');
		document.getElementById('step4').classList.remove('active');

		document.getElementById('stepbar').style.width = "180px";
		document.getElementById('stepbar').style.backgroundColor= "#D38098";

		// main		
		if ( document.body.classList.contains('main') ) {
			
		} 

	});



	// 4단계
	document.getElementById('step4').addEventListener("click", function(){

				// 스텝바 전체 변화 모습
		document.getElementById('step1').classList.add('active');
		document.getElementById('step2').classList.add('active');
		document.getElementById('step3').classList.add('active');
		document.getElementById('step4').classList.add('active');
		
		document.getElementById('stepbar').style.width = "290px";
		document.getElementById('stepbar').style.backgroundColor= "#D38098";

		// main		
		if ( document.body.classList.contains('main') ) {
			document.querySelector('.info_eyes').style.display = "block";
			document.querySelector('.blue1').innerText = "말말말";	
			document.querySelector('.blue1').style.top = "37.8rem";			

			document.querySelector('.info_emoji').style.display = "block";
			document.querySelector('.blue3').style.display = "none";
		
			document.querySelector('.info_scroll').style.display = "block";
			document.querySelector('.white_2').style.display = "none";

			document.querySelector('.blue5').innerText = "ㅊㅅㅋㅈ";	

			document.querySelector('.blue6').innerText = "중요한 건 크게";	
			document.querySelector('.blue6').style.top = "79rem";	
			document.querySelector('.blue6').style.fontSize = "2.3rem";		

			document.querySelector('.wiki').style.display = "none";
			document.querySelector('.wiki2').style.display = "block";

			document.querySelector('.plus').style.display = "block";
			document.querySelector('.imgimg').style.display = "block";
			document.querySelector('.blue4').innerText = "글";	


			document.querySelector('.info_text_blind').style.display = "block";

		} 

	});



	//footer hover - 챕터 1
	document.getElementById('sticker_chapter1').addEventListener("mouseover", (event) => {

		document.getElementById('chapterImg2').classList.add('hoverOther');
		document.getElementById('chapterImg3').classList.add('hoverOther');

	});

	document.getElementById('sticker_chapter1').addEventListener("mouseout", (event) => {

		document.getElementById('chapterImg2').classList.remove('hoverOther');
		document.getElementById('chapterImg3').classList.remove('hoverOther');
	})



	//footer hover - 챕터 2
	document.getElementById('sticker_chapter2').addEventListener("mouseover", (event) => {

		document.getElementById('chapterImg1').classList.add('hoverOther');
		document.getElementById('chapterImg3').classList.add('hoverOther');

	});

	document.getElementById('sticker_chapter2').addEventListener("mouseout", (event) => {

		document.getElementById('chapterImg1').classList.remove('hoverOther');
		document.getElementById('chapterImg3').classList.remove('hoverOther');
	})


	//footer hover - 챕터 3
	document.getElementById('sticker_chapter3').addEventListener("mouseover", (event) => {

		document.getElementById('chapterImg2').classList.add('hoverOther');
		document.getElementById('chapterImg1').classList.add('hoverOther');

	});


	document.getElementById('sticker_chapter3').addEventListener("mouseout", (event) => {

		document.getElementById('chapterImg2').classList.remove('hoverOther');
		document.getElementById('chapterImg1').classList.remove('hoverOther');
	})

})