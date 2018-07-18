jQuery(document).on('ready', function() {
  jQuery(".slideshow .single-item").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="btn pull-left"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>',
    nextArrow: '<button type="button" class="btn pull-right"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>',
    appendArrows: '#slider-arrows'
  });

  jQuery('.slideshow .multiple-items-3').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });

  jQuery('.slideshow .multiple-items-4').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    prevArrow: '<button type="button" class="btn"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>',
    nextArrow: '<button type="button" class="btn pull-right"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>',
    appendArrows: '#slider-arrows-ncs_primary_latest_blogs',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

});

