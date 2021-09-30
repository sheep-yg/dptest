// 스크롤 값에 따라 이미지가 변화하도록

document.addEventListener('scroll', function() {

    var currentScrollValue = document.documentElement.scrollTop;
    //console.log('currentScrollValue is ' + currentScrollValue);

    var intro = document.querySelector('.intro');
    var intro1 = document.querySelector('.intro_1');
    var intro2 = document.querySelector('.intro_2');
    var intro3 = document.querySelector('.intro_3');
    var intro4 = document.querySelector('.intro_4');



    if (currentScrollValue < 2600) {
    	intro.style.position = "sticky";
    	intro.style.top = "50px";
    	//console.log ("intro fixed");
    
    } else {
    	intro.style.position = "relative";
    	intro.style.top = "287.5vh";
    	//console.log ("intro not fixed");
	}
    
    

    if (currentScrollValue < 400) {
    	intro1.style.display = "block";
    	intro2.style.display = "none";
		intro3.style.display = "none"; 
		intro4.style.display = "none"; 

		document.querySelector('.scroll_info_p').innerText = "스크롤해서 계속 보기"; 
		document.querySelector('.scroll_info_p').style.display = "block";  

    } else if (currentScrollValue >= 400 && currentScrollValue <1100) {
    	intro1.style.display = "none";
    	intro2.style.display = "block";
		intro3.style.display = "none"; 
		intro4.style.display = "none";  

		document.querySelector('.scroll_info_p').innerText = "스크롤해서 계속 보기"; 
		document.querySelector('.scroll_info_p').style.display = "block";  

    } else if (currentScrollValue >= 1100 && currentScrollValue < 1800) {
    	intro1.style.display = "none";
    	intro2.style.display = "none";
		intro3.style.display = "block"; 
		intro4.style.display = "none";  

		document.querySelector('.scroll_info_p').innerText = "스크롤";

    } else if (currentScrollValue >= 1700) {
    	intro1.style.display = "none";
    	intro2.style.display = "none";
		intro3.style.display = "none"; 
		intro4.style.display = "block"; 

		document.querySelector('.scroll_info_p').style.display = "none";  

    }

    

});