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