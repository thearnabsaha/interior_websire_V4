// count up function
jQuery(document).ready(function ($){
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });
  });


// mobile navbar
let humburger = document.querySelector(".navbar-toggler");
let times = document.querySelector(".times");
let mobileNav = document.querySelector(".mobileNav");

humburger.addEventListener('click',function(){
    mobileNav.classList.toggle('open')
})
humburger.addEventListener('blur',function(){
    mobileNav.classList.remove('open')
})