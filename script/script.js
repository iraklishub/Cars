function toggleMenu() {
	let span1, span2, span3;
	let navIco = document.querySelector('.nav-ico');
	let menu = document.querySelector('.menu');
	let logo = document.querySelector('.logo');
	span1 = document.querySelector('.nav-ico-sp1')
	span2 = document.querySelector('.nav-ico-sp2')
	span3 = document.querySelector('.nav-ico-sp3')
	navIco.addEventListener('click', function() {
		if (menu.style.display == 'none') {
			menu.style.display = 'flex';
			span2.style.display = 'none';
			span1.style.transform = 'translateY(170%) rotate(-45deg)'
			span3.style.transform = 'translateY(-170%) rotate(45deg)'
			span1.style.backgroundColor = 'red'
			span3.style.backgroundColor = 'red'
			span1.style.height = '15%'
			span3.style.height = '15%'
			logo.src = "style/images/logored.png";
		} else if (menu.style.display != 'none') {
			menu.style.display = 'none';
			span2.style.display = 'block';
			span1.style.transform = 'translateY(0) rotate(0)'
			span3.style.transform = 'translateY(0) rotate(0)'
			span1.style.backgroundColor = 'white'
			span3.style.backgroundColor = 'white'
			span1.style.height = '13%'
			span3.style.height = '13%'
			logo.src = "style/images/logowhite.png";
		}
	})
}
function carouselSlider() {
	let slides = document.querySelector('.slides')
	let sliderImagesNumber = slides.querySelectorAll('img').length
	slides.style.width = sliderImagesNumber*100 + '%';
	let prevBtn = document.querySelector('.left-arrow')
	let nextBtn = document.querySelector('.right-arrow')
	let index = 0;
	nextBtn.addEventListener('click', function() {
		index++;
		if (index < sliderImagesNumber) {
			slides.style.transition = 'left 0.7s';
			slides.style.left = index*(-100) + '%';
		} else {
			slides.style.transition = 'left 0.7s'; /*or 'none'*/
			index = 0;
			slides.style.left = index*(-100) + '%';
		}
	})
	prevBtn.addEventListener('click', function() {
		index--;
		if (index >= 0) {
			slides.style.transition = 'left 0.7s';
			slides.style.left = index*(-100) + '%';
		} else {
			slides.style.transition = 'left 0.7s'; /*or 'none'*/
			index = sliderImagesNumber-1;
			slides.style.left = index*(-100) + '%';
		}
	})
	function autoSlide() {
		setTimeout(function() {
			if (index < sliderImagesNumber-1) {
				slides.style.transition = 'left 0.7s';
				index++;
				slides.style.left = index*(-100) + '%';
				autoSlide();
			}
			else {	
				slides.style.transition = 'left 0.7s'; /*or 'none'*/
				index=0;
				slides.style.left = index*(-100) + '%';
				autoSlide();
			}
		}, 3500)
	}
	autoSlide();
}
toggleMenu();
carouselSlider();