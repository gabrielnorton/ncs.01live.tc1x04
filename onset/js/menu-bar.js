(function($, Drupal){
  $(".menu-item--expanded.dropdown").on('mouseenter mouseleave', function() {
    if ($('ul', this).length) {
      var elm = $('ul:first', this);
      var off = elm.offset();
      var l = off.left;
      var w = elm.width();
      var docH = $("#block-mainmenu").height();
      var docW = $("#block-mainmenu").width();
      var isEntirelyVisible = (l + w <= docW);

      if (!isEntirelyVisible) {
        $(this).addClass('edge');
        $(this).removeClass('not-edge');
      } else {
        $(this).removeClass('edge');
        $(this).addClass('not-edge');
      }
    }
  });

  // Grab the search block and move it to the dropdown menu
  var search_block = $('.region-primary-menu .search-api-block-form');
  $('.region-primary-menu .dropdown.search .search-menu').append( search_block );
  // Remove the hidden class that keeps the block hidden if javascript is disabled
  search_block.removeClass('hidden');
})(jQuery);