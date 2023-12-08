document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", function() {
      scrollTop();
  });
});

function scrollTop() {
  if (document.body.scrollTop > 100 && screen.width <= 992 || document.documentElement.scrollTop > 100 && screen.width <= 992) {
    document.getElementById("mobileButton").style.display = "block";
  } 
  else {
    document.getElementById("mobileButton").style.display = "none";
  }
  if (document.body.scrollTop > 100 && screen.width >= 992 || document.documentElement.scrollTop > 100 && screen.width >= 992) {
    document.getElementById("topButton").style.display = "flex";
  } 
  else {
    document.getElementById("topButton").style.display = "none";
  }
}