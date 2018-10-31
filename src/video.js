// JQuery Slider
$(document).ready(function() {
    $('#slider').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      variableWidth: true,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 777,
          settings: {
            prevArrow: ' ',
            nextArrow: ' ',
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            variableWidth: true,
            adaptiveHeight: true
          }
        }
      ]
    })
  })