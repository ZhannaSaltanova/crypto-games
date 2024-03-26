const swiper = new Swiper('.swiper', {
    slidesPerView: 3, 
    spaceBetween: 5, 
    slidesPerGroup: 2, 
    autoplay: {
        delay: 6000, 
        disableOnInteraction: false, 
      },
    loop:true,
    breakpoints: {
      1: {
        slidesPerView: 1, 
        spaceBetween: 10, 
        slidesPerGroup: 1, 
      },
      500: {
        slidesPerView: 2, 
        spaceBetween: 10, 
        slidesPerGroup: 1, 
      },
      768: {
        slidesPerView: 2, 
        spaceBetween: 10, 
        slidesPerGroup: 1, 
      },
      1024: { 
        slidesPerView: 3, 
        spaceBetween: 15  
      }
    },
  });


  // $(document).ready(function() {
  //   $('.burger-button').on('click', function(e) {
  //     e.preventDefault();  
  //     $('aside').toggleClass('active');
  //   });
  
  // });

  document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.burger-button').addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('aside').classList.toggle('active');
    });
  });