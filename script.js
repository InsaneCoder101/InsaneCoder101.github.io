//Process the slideshow
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function delA(){
document.getElementById('tl').classList.remove('activemn')
document.getElementById('ttwo').classList.remove('activemn')
document.getElementById('tthree').classList.remove('activemn')
document.getElementById('tfour').classList.remove('activemn')
}

function giveOne(){
delA()
document.getElementById('tl').classList.add('activemn')
}
function giveTwo(){
delA()
document.getElementById('ttwo').classList.add('activemn')
}
function giveThree(){
delA()
document.getElementById('tthree').classList.add('activemn')
}
function giveFour(){
delA()
document.getElementById('tfour').classList.add('activemn')
}
