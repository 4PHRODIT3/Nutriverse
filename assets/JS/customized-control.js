// Nav-btn toggle icons
let nav_close = document.querySelector("#nav-close");
let mobile_nav = document.querySelector(".nav-open");
let nav_open = document.querySelector("#nav-open");
let nav_bar = document.querySelector(".navbar");
let client_height = window.screen.height;
let client_width = window.screen.width;

$("#nav-open").click(function () {
  $(".navbar").animate({ left: "0" });
  $(this).hide();
});
$("#nav-close").click(function () {
  $(".navbar").animate({ left: "-100%" });
  $("#nav-open").show();
});

$(".package-collection").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
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

$(".countings").counterUp({
  delay: 10,
});

window.onscroll = (_) => {
  let current_height = document.documentElement.scrollTop;

  if (current_height > client_height - 100) {
    if (client_width > 870) {
      nav_bar.classList.add("navbar-on-scroll");
    } else {
      mobile_nav.classList.add("navbar-on-scroll");
    }
  } else {
    if (client_width > 870) {
      nav_bar.classList.remove("navbar-on-scroll");
    } else {
      mobile_nav.classList.remove("navbar-on-scroll");
    }
  }
};

window.onload = (_) => {
  document.querySelector(".loader").remove();
};

wow = new WOW({
  boxClass: "wow", // default
  animateClass: "animate__animated", // default
  offset: 100, // default
  mobile: true, // default
  live: true, // default
});
wow.init();

const setActive = (id) => {
  $(".nav-link").removeClass("active");
  $(`.nav-link[href='#${id}']`).addClass("active");
};

const setUpNavActions = (_) => {
  let sections = $("section[id]");
  sections.waypoint(
    function (direction) {
      let current_id = $(this.element).attr("id");
      if (direction == "down") {
        setActive(current_id);
      } else {
        setActive(current_id);
      }
    },
    {
      offset: "10%",
    }
  );
};

setUpNavActions();
