// //////////////////////////////////////////////////
// ==================================================
// ––––––––––––––––––––––––––––––––––––––––––––––––––
// O W L   C A R O U S E L
// ––––––––––––––––––––––––––––––––––––––––––––––––––
// ==================================================
// //////////////////////////////////////////////////

import 'owl.carousel';

document.addEventListener('DOMContentLoaded', function() {

   $('.owl-carousel.portfolio').owlCarousel({
      loop:true,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:false,
      margin:54,
      nav:false,
      dots:false,
      autoHeightClass: true,
      responsive:{
         0:{
            items:1
         },
         768:{
            items:2
         }
      }
   });
   $('.owl-carousel.blog').owlCarousel({
      loop:false,
      autoplay:false,
      autoplayTimeout:2000,
      autoplayHoverPause:false,
      // margin:54,
      margin: 10,
      nav:true,
      navText: ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
      dots:false,
      autoHeightClass: false,
      responsive:{
          0:{
              items:1
          },
          768:{
              items:2
          },
          1200:{
              items:3
          }
      }
  });
  $('.owl-carousel.clients').owlCarousel({
      loop:true,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:false,
      margin:10,
      nav:false,
      navText: ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
      dots:false,
      autoHeightClass: false,
      responsive:{
          0:{
              items:3
          },
          768:{
              items:4
          },
          1200:{
              items:4
          }
      }
  });

}); // document ready