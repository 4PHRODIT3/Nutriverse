// Nav-btn toggle icons
let nav_btn = document.querySelector(".navbar-toggler");
let nav_icon = document.querySelector("#nav-icon");
let nav_bar = document.querySelector(".navbar");
let client_height = window.screen.height;

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
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
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
                  
$('.countings').counterUp({
    delay: 10,
});

window.onscroll = _ => {
  let current_height = document.documentElement.scrollTop;
  if(current_height > client_height - 100){
    nav_bar.classList.add("navbar-on-scroll");
  }
  else{
    nav_bar.classList.remove("navbar-on-scroll");
  }
};

window.onload = _ => {
  document.querySelector('.loader').remove();
}