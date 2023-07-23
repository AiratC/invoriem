$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 3,
      margin: 10,
      loop: true,
      nav: true,
      responsive:{
        0:{
          items:1
        },
        768:{
          items:2
        },
        1180:{
          items:3
        }
      }
    });
  });


  $(".next_button").click(function(){
    owl.trigger("next.owl.carousel");
  });
   
  $(".prev_button").click(function(){
    owl.trigger("prev.owl.carousel");
  });



// ##### VIDEO #####

const videoButton = document.querySelector('#video_button');
const videoImg = document.querySelector('.video__img');
const video = document.querySelector('.video__travel');
const playImg = document.querySelector('.video__btn-img');

video.addEventListener('click', function() {

    
    if (video.paused) {
        video.play()
    } else {
        video.pause();

    }
});




/* BTN BURGER */

const btnOpen = document.querySelector('#btn-open');
const btnOpenImg = document.querySelector('.btn-open-img');

const btnClose = document.querySelector('#btn-close');
const btnCloseImg = document.querySelector('.btn-close-img');

const mobileContainer = document.querySelector('.mobile-container');




// const mobileNav = document.querySelector('#mobile-nav');

btnOpen.addEventListener('click', function() {
    mobileContainer.classList.toggle('none');
    btnCloseImg.src = './img/close.svg';
    document.body.classList.toggle('no-scroll');
})

btnClose.addEventListener('click', function() {
    mobileContainer.classList.toggle('none');
    btnOpen.src = './img/burger-btn.svg';
    document.body.classList.toggle('no-scroll');
})



















AOS.init();