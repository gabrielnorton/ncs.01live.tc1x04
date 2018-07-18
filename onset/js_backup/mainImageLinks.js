

(function($){

  // top_stories_images:
  $('.view-top-stories-slider').find('.carousel-inner').find('img').each(function(){
    var link = $(this).parent().parent().siblings().eq(0).find('a');
    var newlink = link.attr('href');
    $(this).parent().attr('href', newlink);
  });

  // blockgroup_frontpage_identifier_view_images:
  $('.frontpage-identifier').find('img').each(function(){
    var link = $(this).parent().parent().siblings().eq(0).find('a');
    var newlink = link.attr('href');
    $(this).wrap($('<a>',{href: newlink}));
  });

  // blockgroup_largestyle_view_images:
  $('.large-style').find('img').each(function(){
    var link = $(this).parent().parent().siblings().eq(0).find('a');
    var newlink = link.attr('href');
    $(this).wrap($('<a>',{href: newlink}));
  });

  // section front images:
  $('.section-front-teaser').find('img').each(function() {
    $(this).wrap($('<a>', {
      href: $(this).parent().parent().siblings().eq(0).find('.node__title').find('a').attr('href')
    }));
  });
  

})(jQuery);