

(function($){

  // top_stories_images:
  $('.view-top-stories-slider').find('.carousel-inner').find('img').each(function(){
    var link = $(this).parent().parent().siblings().eq(0).find('a');
    var newlink = link.attr('href');
    $(this).parent().attr('href', newlink);
  });
  
  //section front images:
  $('.section-front-teaser').find('img').each(function() {
    var link = $(this).parent().parent().parent().siblings().eq(0).find('.node__title').find('a');
    var newlink = link.attr('href');
    $(this).wrap($('<a>',{href: newlink}));
  });
  
  //main page sections:
  $('#block-frontpagecategorytabs').find('img').each(function() {
    var link = $(this).parent().parent().siblings().eq(0).find('a');
    var newlink = link.attr('href');
    $(this).wrap($('<a>',{href: newlink}));
  });
  
  //latest blogs block
  $('.latest-blogs-block').find('img').each(function() {
    var link = $(this).parent().parent().siblings().eq(0).find('a');
    var newlink = link.attr('href');
    $(this).wrap($('<a>',{href: newlink}));
  });
  
})(jQuery);