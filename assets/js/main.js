(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (event){ 
    event.preventDefault()
    $('.mobile-menu').toggleClass('siteBar');   
  }); 

  $(window).scroll(function(){
    if($(this).scrollTop() > 1){
        $('.header-area').addClass('sticky')
    } else{
        $('.header-area').removeClass('sticky')
    }
});

let navBtns = document.querySelectorAll('.menuActive nav ul li a')
let mMenu = document.querySelector('.mobile-menu')
let Sidebar = document.querySelector('.siteBar')

navBtns.forEach(navBtn => {
navBtn.addEventListener('click', () => {
navBtnRemove()
navBtn.classList.add('active')
mMenu.classList.remove('siteBar')
})
})

function navBtnRemove() {
navBtns.forEach(navBtns => {
navBtns.classList.remove('active')
})
}



  $('.hero__slider').owlCarousel({
    stagePadding: 500,
    loop:true,
    margin: 50,
    items:1,
    center:true,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        margin: 20,
        stagePadding: 20
      },
      450: {
        margin: 20,
        stagePadding: 100
      },
      767: {
        margin: 20,
        stagePadding: 150
      },
      992: {
        stagePadding: 300
      },
      1200: {
        stagePadding: 400
      },
      1420: {
        stagePadding: 400
      },
      1600: {
        stagePadding: 500
      }
    }
})


  // owlCarousel
  $(".team__slider").owlCarousel({
    loop: true,
    margin: 50,
    navText: [
      '<i ><img src="assets/img/left-arrow.svg" alt=""></i>',
      '<i ><img src="assets/img/right-arrow.svg" alt=""></i>'
    ],
    center: true,
    smartSpeed: 1500,
    nav: true,
    dots: false,
    responsive: {
      0: {
        stagePadding: 20,
        items: 1
      },
      767: {
        stagePadding: 180,
        items: 1
      },
      992: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });


  // owlCarousel
  $(".token_slider").owlCarousel({
    loop: true,
    margin: 30,
    stagePadding:0,
    navText: [
      '<i ><img src="assets/img/left-arrow.svg" alt=""></i>',
      '<i ><img src="assets/img/right-arrow.svg" alt=""></i>'
    ],
    center: true,
    animateIn:true,
    animateOut:true,
    nav: true,
    dots: false,
    responsive: {
      0: {
        stagePadding: 20,
        items: 1
      },
      450: {
        stagePadding: 100,
        items: 1
      },
      550: {
        margin: 20,
        stagePadding: 150,
        items: 1
      },
      767: {
        stagePadding: 100,
        items: 2
      },
      992: {
        stagePadding: 150,
        items: 2
      },
      1200: {
        items: 4
      },
      1420: {
        items: 4
      }
    }
  });


  // owlCarousel
  $(".board__slider").owlCarousel({
    loop: true,
    margin: -60,
    stagePadding:100,
    navText: [
      '<i ><img src="assets/img/left-arrow.svg" alt=""></i>',
      '<i ><img src="assets/img/right-arrow.svg" alt=""></i>'
    ],
    center: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        margin: -20,
        stagePadding: 70,
        items: 1
      },
      767: {
        stagePadding: 180,
        items: 1
      },
      992: {
        items: 2
      },
      1200: {
        items: 4
      },
      1420: {
        items: 5
      }
    }
  });

  // page Animation
  AOS.init({
    mirror: true,
    duration: 1500,
    initClassName: 'aos-init',
    once: true,
  });

  // data-aos="fade-up" 
  // data-aos-delay="00" 
  $('.play').magnificPopup({
    type: 'iframe'
});
 
})(jQuery);
