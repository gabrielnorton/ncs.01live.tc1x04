(function($) {
  


 /* var tabs = '<div class="tab-list"><ul class="tabs"><li id="football-tab" class="first"><a class="active sidebar-tab" href="JavaScript:void(0);">Football</a></li><li id="basketball-tab"><a class="sidebar-tab" href="JavaScript:void(0);">Baketball</a></li><li id="baseball-tab" class="last"><a class="sidebar-tab" href="JavaScript:void(0);">Baseball</a></li></ul></div>';
  //$(".view-display-id-football").prepend(tabs);
  $("#football-tab a").addClass("active");
  var index = 0;
  jQuery('.region-category-news-first h2').remove();
  $(".region-category-news-first").addClass("clearfix");
  $(".region-category-news-first .contextual-region.block-views").each(function( index ) {
    if ($(this).find('.view-display-id-football').length) {
      //console.log("each: " + $(this).text());
      $(this).addClass("active-block");
      $(this).before("<h3 class='category-heading-1' >Local</h3>");
      $(this).before(tabs);

    } else if ($(this).find('.view-display-id-basketball').length || $(this).find('.view-display-id-baseball').length) {
      $(this).addClass("hidden-block");
    } 
    // else {
    //  $(this).addClass("hidden-block");
    // }
  });

  $("#football-tab").click(function() {
    $("#football-tab a").addClass("active");
    $("#basketball-tab a").removeClass("active");
    $("#baseball-tab a").removeClass("active");

    var index = 0;
    $(".region-category-news-first .contextual-region.block-views").each(function( index ) {
      // if (index == 0) {
      //  $(this).addClass("active-block");
      //  $(this).removeClass("hidden-block");
      // } else if (index >= 3) {
      //  return false;
      // } else {
      //  $(this).addClass("hidden-block");
      //  $(this).removeClass("active-block");
      // }
      if ($(this).find('.view-display-id-football').length) {
        $(this).addClass("active-block");
        $(this).removeClass("hidden-block");
      } else if ($(this).find('.view-display-id-basketball').length || $(this).find('.view-display-id-baseball').length) {
        $(this).addClass("hidden-block");
        $(this).removeClass("active-block");
      } 
    });
  });

  $("#basketball-tab").click(function() {
    $("#basketball-tab a").addClass("active");
    $("#football-tab a").removeClass("active");
    $("#baseball-tab a").removeClass("active");

    var index = 0;
    $(".region-category-news-first .contextual-region.block-views").each(function( index ) {
      // if (index == 1) {
      //  $(this).addClass("active-block");
      //  $(this).removeClass("hidden-block");
      // } else if (index >= 3) {
      //  return false;
      // } else {
      //  $(this).addClass("hidden-block");
      //  $(this).removeClass("active-block");
      // }
      if ($(this).find('.view-display-id-basketball').length) {
        $(this).addClass("active-block");
        $(this).removeClass("hidden-block");
      } else if ($(this).find('.view-display-id-baseball').length || $(this).find('.view-display-id-football').length) {
        $(this).addClass("hidden-block");
        $(this).removeClass("active-block");
      } 
    });
  });

  $("#baseball-tab").click(function() {
    $("#baseball-tab a").addClass("active");
    $("#basketball-tab a").removeClass("active");
    $("#football-tab a").removeClass("active");

    var index = 0;
    $(".region-category-news-first .contextual-region.block-views").each(function( index ) {
      // if (index == 2) {
      //  $(this).addClass("active-block");
      //  $(this).removeClass("hidden-block");
      // } else if (index >= 3) {
      //  return false;
      // } else {
      //  $(this).addClass("hidden-block");
      //  $(this).removeClass("active-block");
      // }
      if ($(this).find('.view-display-id-baseball').length) {
        $(this).addClass("active-block");
        $(this).removeClass("hidden-block");
      } else if ($(this).find('.view-display-id-football').length || $(this).find('.view-display-id-basketball').length) {
        $(this).addClass("hidden-block");
        $(this).removeClass("active-block");
      } 
    });
  });
*/
//$(".region-category-news-first .attachment-before").addClass("col-md-4");
//$(".region-category-news-first .attachment-before").next().addClass("col-md-8");


})(jQuery);