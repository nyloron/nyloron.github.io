// Slideshow control

let slideIndex = 0;
let intervalId;

function showSlides() {
    const slides = document.querySelector('.wrapper');
    const totalSlides = document.querySelector('.wrapper').querySelectorAll('img').length;

    slideIndex = (slideIndex + 1) % totalSlides;
    const translateValue = -slideIndex * 100;
    slides.style.transform = `translateX(${translateValue}%)`;

}

function showPreviousSlide() {
    const slides = document.querySelector('.wrapper');
    const totalSlides = document.querySelector('.wrapper').querySelectorAll('img').length;

    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides; // Ensure a positive index
    const translateValue = -slideIndex * 100;
    slides.style.transform = `translateX(${translateValue}%)`;

    resetTimer();
}

function showNextSlide() {
    const slides = document.querySelector('.wrapper');
    const totalSlides = document.querySelector('.wrapper').querySelectorAll('img').length;

    slideIndex = (slideIndex + 1) % totalSlides;
    const translateValue = -slideIndex * 100;
    slides.style.transform = `translateX(${translateValue}%)`;

    resetTimer();
}

function resetTimer() {
  clearInterval(intervalId); // Clear the current interval
  intervalId = setInterval(showSlides, 10000); // Set a new interval
}

// Auto-play the slideshow
intervalId = setInterval(showSlides, 10000);


// Navbar snapping

document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", function() {
      navSnapping();
  });
});

function navSnapping() {
  if (document.body.scrollTop > 347 && screen.width >= 992 || document.documentElement.scrollTop > 347 && screen.width >= 992 ) {
    document.getElementById("topnav").style.position = "fixed";
    document.getElementById("topnav").style.top = "0";
    document.getElementById("topnav").style.bottom = "";
    document.getElementById("topnav").style.background = "rgb(37, 39, 39, 0.9)";
    document.getElementById("topnav").style.transition = "all 100ms";
  } 
  else {
    document.getElementById("topnav").style.position = "absolute";
    document.getElementById("topnav").style.bottom = "0";
    document.getElementById("topnav").style.top = "";
    document.getElementById("topnav").style.background = "rgb(37, 39, 39, 0.6)";
    document.getElementById("topnav").style.transition = "all 100ms";
  }
}