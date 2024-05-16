var menuBtn =  document.querySelector("#menu");
var menuBgOverlay = document.querySelector(".menu-bgoverlay");
var menu = document.querySelector("nav ul");
var menuBgLayer = document.querySelector(".menu-bglayer")

menuBtn.addEventListener(
    "click",
    function(){
       document.body.classList.add("open-menu");  
    }
)
menuBgOverlay.addEventListener(
    "click",
    function(){
        document.body.classList.remove("open-menu");
    }
)
document.addEventListener(
    "scroll",
    function(event){
        if (window.scrollY>=64){
            document.body.classList.add("stick-menu")
        }
        else{
            document.body.classList.remove("stick-menu")
        }
    }
)

$('.testi-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true, 
    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 500,
          settings: {
            arrows: false,
            centerMode: true,
            // centerPadding: '60px',
            slidesToShow: 1
          }
        }
      ]
    
    
  });
  
