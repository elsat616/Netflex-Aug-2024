$(document).ready(function() {
  $(".footer-links-wrapper h3").click(function() {
    if ($(window).width() < 768) {
      $(this).toggleClass("expanded");
      $(this).next().slideToggle();
    }
  });


  $(window).resize(function() {
    if ($(window).width() >= 769) {
      location.reload();
    }
  });
});

// slider start
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // Change image every 2 seconds
}
// slider End







