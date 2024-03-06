/*-- Navigation Bar Section --*/
var navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-300px";
}

/*-- Text Typing animation --*/
if ($("#type").length > 0) {
  var Typed = new Typed("#type", {
    strings: [
      "Drop Shipping",
      "App Develoment",
      "Software Solution",
      "ERP Software Solution",
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  });
}

if ($(".item-menu").length > 0) {
  // init Isotope
  setTimeout(function () {
    var $grid = $(".item-details").isotope({
      // options
    });

    // filter items on button click
    $(".item-menu").on("click", "li", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({
        filter: filterValue,
      });
    });
  }, 2000);
}

/*-- Counter Up Section --*/
if ($(".counter").length > 0) {
  $(".counter").counterUp({
    delay: 10,
    time: 1200,
  });
}

/*-- Blog slick-slider --*/
setTimeout(function () {
  if ($(".blog_slider").length > 0) {
    $(".blog_slider").slick({
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 7,
      slidesToScroll: 1,
      centerMode: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
}, 2000);
/*-- Slick-slider --*/

if ($(".team_slider").length > 0) {
  /*-- Team slick-slider --*/
  $(".team_slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    speed: 800,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768, // Breakpoint for tablets
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600, // Breakpoint for tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Breakpoint for mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
}

/*-- Review slick-slider --*/
if ($(".review_slider").length > 0) {
  $(".review_slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    speed: 800,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768, // Breakpoint for tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // Breakpoint for 600px screens
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // Breakpoint for mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
}

/*-- Pre Loader --*/
// Define meaningful variables
const preloader = document.getElementById("preloader");
const pageContent = document.getElementById("page-content");

// Perform actions directly within the body
document.addEventListener("DOMContentLoaded", function () {
  // Simulate loading time (you can replace this with actual loading code)
  setTimeout(function () {
    preloader.style.display = "none";
    pageContent.style.display = "block";
  }, 1000);
});
