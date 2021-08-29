// Nav-btn toggle icons
let nav_btn = document.querySelector(".navbar-toggler");
let nav_icon = document.querySelector("#nav-icon");

nav_icon.addEventListener("click", e => {
    e.preventDefault();
})
nav_btn.addEventListener("click", e => {
    nav_icon.classList.toggle("fa-times");
    nav_icon.classList.toggle("fa-bars");
})

$('.package-collection').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      
    ]
  });
                  
  