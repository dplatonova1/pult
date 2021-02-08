$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    mobileFirst: true,
    dots: false,
    prevArrow: `<a class="prev"> 
      <svg class="slick-prev" width="16" height="32">
        <use xlink:href="#arrow-left"></use>
      </svg> </a>`,

    nextArrow: `<a class="next">
      <svg class="slick-next" width="16" height="32">
        <use xlink:href="#arrow-right"></use>
      </svg> </a>`,

    dotsClass: "my-dots",
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        },
      },

      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        },
      },
      {
        breakpoint: 925,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          appendDots: $(".slider"),
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

