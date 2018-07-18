(function($) {

  $('#myCarousel-full').carousel({ interval: 8000 });

  $("#myCarousel-full .item:first").addClass("active");

  $('.carousel-showmeonebyone .item').each(function () {
    var itemToClone = $(this);
    if (!itemToClone.length) {
      return false;
    }
    for (var i = 1; i < 4; i++) {
        itemToClone = itemToClone.next();

        // /*wrap around if at end of item collection*/
        if (!itemToClone.length) {
            itemToClone = $(this).siblings(':first');
        }

        // /*grab item, clone, add marker class, add to collection*/
        itemToClone.children(':first-child').clone().addClass("cloneditem-" + (i)).appendTo($(this));
    }
    $(this).next().remove();
    $(this).next().remove();
    $(this).next().remove();
  });
  $(".top-stories-tot").html($('.carousel-showmeonebyone .item').length);
  $(".carousel-showmeonebyone .item:first").addClass("active");

  $('#carousel-half').on('slid.bs.carousel', function () {
    $(".top-stories-current-pos").html(parseInt(jQuery('#carousel-half .carousel-inner .active').index()) + 1);
  })

 /* $('#carousel-half').bind('slid', function() {
      currentIndex = parseInt($('.top-stories-current-pos').html()) + 1;
     $('.top-stories-current-pos').html(currentIndex);
  });*/



  $(".Scroll-top-slow").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "6000");
    return false;
  });

  $("#edit-keys").attr('placeholder',""); /*Thuy - remove "Search Sponsored By SAXOTECH,Inc." default value for search box */
  $(".region-primary-menu .clearfix > .menu-item:first-child").addClass("home-icon");
  $(".region-primary-menu .clearfix > .menu-item:first-child a").html("<img src='/themes/custom/onset/images/home.png'>");

  // /*article page*/

  $("#content .field__items").find("img").appendTo(".article-image");
  $(".article-main-title").appendTo("#article-main-image");
  $(".article-main-title").append("<div class='article-main-date'><div class='article-date'>06</div><div class='article-month'>jan</div><div class='article-year'>2016</div></div>");

  if($(".article-main-date").length){
    var months = [ "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
               "JUL", "AUG", "SEP", "OCT", "NOV", "DEC" ];
    var dateString = $(".field--type-created").html().split(" ")[1];
    var date = dateString.split("/");
    $('.article-date').html(date[1]);
    $('.article-year').html(date[2]);
    $('.article-month').html(months[parseInt(date[0])-1]);

  }

  $('.todays-edition').prependTo("#block-onset-footer .content");
  $("#block-todaysedition img").appendTo('.todays-edition a');
  $(".todays-edition img").addClass("footer-img-sec");
  $("#block-todaysedition").remove();


  $('<div data-example-id="collapse-accordion" class="bootstrap"><div aria-multiselectable="true" role="tablist" id="accordion" class="panel-group"></div></div>').insertBefore(".block-views-blocktrending-now-trending-now");
  $('.panel-default').appendTo('#accordion');

  $('.collapse').on('shown.bs.collapse', function(){
    $(this).parent().find(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus");
  }).on('hidden.bs.collapse', function(){
    $(this).parent().find(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus");
  });

  if($(".node--type-story .node--view-mode-full").length !== 0){
    $(".node--type-story .node--view-mode-full .node__content .field__item:contains('Deactivate')").next().remove();
    $(".node--type-story .node--view-mode-full .node__content .field__item:contains('Deactivate')").remove();
    $(".node--type-story .node--view-mode-full .node__content .field__item:contains('Activate')").remove();
  }

  // (TEMPORY FIX!!!!) Change padding of body if too much is added:
  $(window).scroll(function() {
    if ($(this).scrollTop() == 0) {
      if(/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        var size = parseInt($("body").css("padding-top").substring(0, 3), 10);
        if (size > 39 && !($('#toolbar-administration').length)) {
          $("body").css("padding-top", "39px");
        }
        else if (size > 89 && $('#toolbar-administration').length) {
          $("body").css("padding-top", "89px");
        }
      }
    }
  });

  // Add image carousel for stories with extra images

  if ($('.field--name-field-image-reference-list').length !== 0) {

    $('.field__label:contains("Extra Images")').html("");
    $('.field--name-field-image-reference-list').unwrap(); 
    $('.field--name-field-image-reference-list').addClass('well well-sm');

    var imagelist = $('.field--name-field-image-reference-list').find('img');

    imagelist.each(function(){

      var image = $(this);

      image.attr({'height': '75px', 'width': '75px'});
      image.addClass ('img-responsive thumbnail slick-carousel-thumbnail'); // borrowed from bootstrap
      image.nextAll('.field--name-field-caption').hide();
	  image.nextAll().find('.field--name-field-byline').hide();													   
      image.unwrap();

	  // Attach click handler
      image.on('click', function(){
        
        $('.field--name-field-main-image-reference').find('img').attr('src', image.attr('src'));
        
		if (image.nextAll('.field--name-field-caption').html()){

          $('.field--name-field-main-image-reference').find('.field--name-field-caption').html(image.nextAll('.field--name-field-caption').html());

        }

        else {

          $('.field--name-field-main-image-reference').find('.field--name-field-caption').html("");

        }

        if (image.nextAll().find('.field--name-field-byline').html()){

          $('.field--name-field-main-image-reference').find('.field--name-field-byline').html(image.nextAll().find('.field--name-field-byline').html());

        }

        else {

          $('.field--name-field-main-image-reference').find('.field--name-field-byline').html("");

        }
      });

    });

  }

  // slick.min.js is only added on node pages, only want this on node pages as well
  if (typeof drupalSettings.theme !== 'undefined') {
    if (drupalSettings.theme.page.is_node) {
      $(document).ready(function(){
        $('.field--name-field-image-reference-list .field__items').first().slick({
          slidesToShow: 6,
          slidesToScroll: 1,
          speed: 0,
          swipeToSlide: true,
          infinite: true,
          arrows: true,
          prevArrow: '<button type="button" class="slick-carousel-controls-left"></button>',
          nextArrow: '<button type="button" class="slick-carousel-controls-right"></button>',
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            }
          ]
        });
      });
    }
  }
})(jQuery);