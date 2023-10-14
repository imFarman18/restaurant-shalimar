(function($) {
  "use strict"; // Start of use strict

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $("#show-top").addClass( "show-top" );
    }
    else {
      $("#show-top").removeClass( "show-top" );    
    }
  });

  var current_width = $(window).width();


  


  // menu sticky
  $(window).on("scroll", function () {
    if(current_width > 992){
      
      $(".navbar-collapse").addClass( "show" );

      if ($(this).scrollTop() > 1) {
        $("header").addClass( "sticky" );
      }
      else {
        $("header").removeClass( "sticky" );     
      }
    }
    else{
      if ($(this).scrollTop() > 1) {
        $("header").addClass( "sticky-mobile" );
      }
      else {
        $("header").removeClass( "sticky-mobile" );     
      }
    }
  });


  $( document ).ready(function() {
    if(current_width > 992){
        
      $(".navbar-collapse").addClass( "push-right" );
    }
    else{
      
      $(".navbar-collapse").removeClass( "push-right" );
    }
  });
  

  $(".list-toggle").click(function(event) {
    event.preventDefault();
    $(this).next("ul.inner").slideToggle();
    
  });


  // remove And add

  if(current_width > 1200){
    $(".dropdown-menu").removeAttr('style')
    $(".dropdown").hover(function(){
        var dropdownMenu = $(this).children(".dropdown-menu");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
    });
  }


    // dropdown responsive

    if(current_width < 920){

      $(".dropdown .icon").click(function(event) {

        $(this).toggleClass('open');

        $(this).next().toggle();

      });

    }



  
    
  $("#home-gallery").owlCarousel({
    dots: true,
    responsiveClass:true,
    loop: true,
    autoplay: true,
    smartSpeed: 300, 
    navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
    nav: false,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2.5
        }
    }
  });


  $("#home-testimonials").owlCarousel({
    dots: true,
    responsiveClass:true,
    loop: true,
    autoplay: true,
    smartSpeed: 300, 
    navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
    nav: false,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });

  


})(jQuery); // End of use strict
