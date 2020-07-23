(function ($) {
  'use strict';

  jQuery(document).ready(function ($) {
    $('.testimonials').owlCarousel({
      items: 1,
      margin: 30,
      loop: false,
      dots: false,
      nav: true,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      autoplay: true,
      smartSpeed: 500,
    });

    /*==============================
            BOTTOM SCROLL TOP BUTTON
        ================================*/

    var scrollTop = $('.scrollTop');
    $(window).scroll(function () {
      var topPos = $(this).scrollTop();
      if (topPos > 100) {
        $(scrollTop).css('opacity', '1');
      } else {
        $(scrollTop).css('opacity', '0');
      }
    });
    $(scrollTop).on('click', function () {
      $('html, body').animate(
        {
          scrollTop: 0,
        },
        800
      );
      return false;
    });

    /*==============================
        Slick Nav
        ================================*/
    var $ourmenu = $('#ourmenu');
    $ourmenu.slicknav();
  });

  jQuery(window).on('load', function () {});
})(jQuery);
