/*-- Navigation Bar Section --*/
var navLinks = document.getElementById("navLinks");
  function showMenu(){
    navLinks.style.right = "0";
}
  function hideMenu(){
    navLinks.style.right = "-300px";
};

/*-- Text Typing animation --*/
var typed = new Typed('.type', {
    strings: ['Drop Shipping', 'App Develoment', 'Software Solution', 'ERP Software Solution'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
});

/*-- Counter Up Section --*/
$(document).ready(function(){
  $(".counter").counterUp({
      delay: 10,
      time: 1200
  });
});


/*-- Slick-slider --*/
$('.slick_slide1').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  dots:true,
  speed: 800,
  autoplaySpeed: 2000,
});

$('.slick_slide2').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  dots:true,
  speed: 800,
  autoplaySpeed: 2000,
});



/*-- Clients Section --*/
