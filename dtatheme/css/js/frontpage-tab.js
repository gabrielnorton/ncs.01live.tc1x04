(function($) {

//category-news-first
/*
  var tab_html = '';
  tab_html = tab_html + '<div class="tab-list"><ul class="tabs">';
  var list = jQuery('.region-category-news-first h2');
  var cat_news_first_arr = [];
  list.each(function(idx, li){
    var id = jQuery(li).html();
    cat_news_first_arr.push(id);
    tab_html = tab_html + '<li class="'+id+'-tab" class="first"><a class="sidebar-tab" href="JavaScript:void(0);">'+ id +'</a></li>';
  })
  tab_html = tab_html + '</ul></div>';

  var index = 0;
  $(".region-category-news-first").addClass("clearfix");
  $(".region-category-news-first .contextual-region.block-views").each(function( index ) {
    $(this).find('.hidden:first').removeClass("hidden");
    if ($(this).find('.view-display-id-'+cat_news_first_arr[0]).length) {
      $(this).addClass("active-block");
      $(this).before("<h3 class='category-heading-1'><a href='/category/Local'>Local</a></h3>");
      $(this).before(tab_html);
    } else {
      $(this).addClass("hidden-block");
    } 
  });

  $('.region-category-news-first .'+cat_news_first_arr[0]+'-tab a').addClass("active");

  $.each(cat_news_first_arr, function( index, value ) {
    $(".region-category-news-first ."+value+"-tab").click(function() {
      $.each(cat_news_first_arr, function( ind, val ) {
        $(".region-category-news-first ."+val+"-tab a").removeClass("active");
      });
      $(".region-category-news-first ."+value+"-tab a").addClass("active");
      var index = 0;
      $(".region-category-news-first .contextual-region.block-views").each(function( index ) {
        if ($(this).find('.view-display-id-'+value).length) {
          $(this).addClass("active-block");
          $(this).removeClass("hidden-block");
        } else {
          $(this).addClass("hidden-block");
          $(this).removeClass("active-block");
        } 
      });
    });
  });
jQuery('.region-category-news-first h2').remove();
//jQuery('.region-category-news-first .view-category-news-block-1 .hidden:first').removeClass("hidden");
*/


//category-news-second
/*
  var tab_html = '';
  tab_html = tab_html + '<div class="tab-list"><ul class="tabs">';
  var list = jQuery('.region-category-news-second h2');
  var cat_news_sec_arr = [];
  list.each(function(idx, li){
    var id = jQuery(li).html();
    cat_news_sec_arr.push(id);
    tab_html = tab_html + '<li class="'+id+'-tab" class="first"><a class="sidebar-tab" href="JavaScript:void(0);">'+ id +'</a></li>';
  })
  tab_html = tab_html + '</ul></div>';

  var index = 0;
  $(".region-category-news-second").addClass("clearfix");
  $(".region-category-news-second .contextual-region.block-views").each(function( index ) {
    if ($(this).find('.view-display-id-'+cat_news_sec_arr[0]).length) {
      $(this).addClass("active-block");
      $(this).before("<h3 class='category-heading-1' ><a href='/category/Sports'>Sports</a></h3>");
      $(this).before(tab_html);
    } else {
      $(this).addClass("hidden-block");
    } 
  });

  $('.region-category-news-second .'+cat_news_sec_arr[0]+'-tab a').addClass("active");

  $.each(cat_news_sec_arr, function( index, value ) {
    $(".region-category-news-second ."+value+"-tab").click(function() {
      $.each(cat_news_sec_arr, function( ind, val ) {
        $(".region-category-news-second ."+val+"-tab a").removeClass("active");
      });
      $(".region-category-news-second ."+value+"-tab a").addClass("active");
      var index = 0;
      $(".region-category-news-second .contextual-region.block-views").each(function( index ) {
        if ($(this).find('.view-display-id-'+value).length) {
          $(this).addClass("active-block");
          $(this).removeClass("hidden-block");
        } else {
          $(this).addClass("hidden-block");
          $(this).removeClass("active-block");
        } 
      });
    });
  });
jQuery('.region-category-news-second h2').remove();
*/

$(".region-category-news-second .attachment-before").addClass("row-fluid");
//$(".region-category-news-second .attachment-after").addClass("col-md-7 pull-left");
//$(".region-category-news-second .category-news-block-3-main").addClass("col-md-5 pull-right");



//category-news-third
/*
  $(".region-category-news-third").addClass("clearfix");
  var tab_html = '';
  tab_html = tab_html + '<div class="tab-list"><ul class="tabs">';
  var list = jQuery('.region-category-news-third h2');
  var cat_news_thr_arr = [];
  list.each(function(idx, li){
    var id = jQuery(li).html();
    cat_news_thr_arr.push(id);
    tab_html = tab_html + '<li class="'+id+'-tab" class="first"><a class="sidebar-tab" href="JavaScript:void(0);">'+ id +'</a></li>';
  })
  tab_html = tab_html + '</ul></div>';

  var index = 0;
  $(".region-category-news-third .contextual-region.block-views").each(function( index ) {
    if ($(this).find('.view-display-id-'+cat_news_thr_arr[0]).length) {
      $(this).addClass("active-block");
      $(this).before("<h3 class='category-heading-1' ><a href='/category/Marketplace'>Market</a></h3>");
      $(this).before(tab_html);
    } else {
      $(this).addClass("hidden-block");
    } 
  });

  $('.region-category-news-third .'+cat_news_thr_arr[0]+'-tab a').addClass("active");

  $.each(cat_news_thr_arr, function( index, value ) {
    $(".region-category-news-third ."+value+"-tab").click(function() {
      $.each(cat_news_thr_arr, function( ind, val ) {
        $(".region-category-news-third ."+val+"-tab a").removeClass("active");
      });
      $(".region-category-news-third ."+value+"-tab a").addClass("active");
      var index = 0;
      $(".region-category-news-third .contextual-region.block-views").each(function( index ) {
        if ($(this).find('.view-display-id-'+value).length) {
          $(this).addClass("active-block");
          $(this).removeClass("hidden-block");
        } else {
          $(this).addClass("hidden-block");
          $(this).removeClass("active-block");
        } 
      });
    });
  });
jQuery('.region-category-news-third h2').remove();
*/






//category-news-fourth
/*
  $(".region-category-news-fourth").addClass("clearfix");
  var tab_html = '';
  tab_html = tab_html + '<div class="tab-list"><ul class="tabs">';
  var list = jQuery('.region-category-news-fourth h2');
  var cat_news_fourth_arr = [];
  list.each(function(idx, li){
    var id = jQuery(li).html();
    cat_news_fourth_arr.push(id);
    tab_html = tab_html + '<li class="'+id+'-tab" class="first"><a class="sidebar-tab" href="JavaScript:void(0);">'+ id +'</a></li>';
  })
  tab_html = tab_html + '</ul></div>';

  var index = 0;
  $(".region-category-news-fourth .contextual-region.block-views").each(function( index ) {
    if ($(this).find('.view-display-id-'+cat_news_fourth_arr[0]).length) {
      $(this).addClass("active-block");
      $(this).before("<h3 class='category-heading-1' ><a href='/category/Business'>Business</a></h3>");
      $(this).before(tab_html);
    } else {
      $(this).addClass("hidden-block");
    } 
  });

  $('.region-category-news-fourth .'+cat_news_fourth_arr[0]+'-tab a').addClass("active");

  $.each(cat_news_fourth_arr, function( index, value ) {
    $(".region-category-news-fourth ."+value+"-tab").click(function() {
      $.each(cat_news_fourth_arr, function( ind, val ) {
        $(".region-category-news-fourth ."+val+"-tab a").removeClass("active");
      });
      $(".region-category-news-fourth ."+value+"-tab a").addClass("active");
      var index = 0;
      $(".region-category-news-fourth .contextual-region.block-views").each(function( index ) {
        if ($(this).find('.view-display-id-'+value).length) {
          $(this).addClass("active-block");
          $(this).removeClass("hidden-block");
        } else {
          $(this).addClass("hidden-block");
          $(this).removeClass("active-block");
        } 
      });
    });
  });
jQuery('.region-category-news-fourth h2').remove();
*/


//category-news-fifth
/*
  $(".region-category-news-fifth").addClass("clearfix");
  var tab_html = '';
  tab_html = tab_html + '<div class="tab-list"><ul class="tabs">';
  var list = jQuery('.region-category-news-fifth h2');
  var cat_news_fifth_arr = [];
  list.each(function(idx, li){
    var id = jQuery(li).html();
    cat_news_fifth_arr.push(id);
    tab_html = tab_html + '<li class="'+id+'-tab" class="first"><a class="sidebar-tab" href="JavaScript:void(0);">'+ id +'</a></li>';
  })
  tab_html = tab_html + '</ul></div>';

  var index = 0;
  $(".region-category-news-fifth .contextual-region.block-views").each(function( index ) {
    if ($(this).find('.view-display-id-'+cat_news_fifth_arr[0]).length) {
      $(this).addClass("active-block");
      $(this).before("<h3 class='category-heading-1' ><a href='/category/Nation'>Nation & World</a></h3>");
      $(this).before(tab_html);
    } else {
      $(this).addClass("hidden-block");
    } 
  });

  $('.region-category-news-fifth .'+cat_news_fifth_arr[0]+'-tab a').addClass("active");

  $.each(cat_news_fifth_arr, function( index, value ) {
    $(".region-category-news-fifth ."+value+"-tab").click(function() {
      $.each(cat_news_fifth_arr, function( ind, val ) {
        $(".region-category-news-fifth ."+val+"-tab a").removeClass("active");
      });
      $(".region-category-news-fifth ."+value+"-tab a").addClass("active");
      var index = 0;
      $(".region-category-news-fifth .contextual-region.block-views").each(function( index ) {
        if ($(this).find('.view-display-id-'+value).length) {
          $(this).addClass("active-block");
          $(this).removeClass("hidden-block");
        } else {
          $(this).addClass("hidden-block");
          $(this).removeClass("active-block");
        } 
      });
    });
  });
jQuery('.region-category-news-fifth h2').remove();
*/



//category-news-sixth
/*
  $(".region-category-news-sixth").addClass("clearfix");
  var tab_html = '';
  tab_html = tab_html + '<div class="tab-list"><ul class="tabs">';
  var list = jQuery('.region-category-news-sixth h2');
  var cat_news_sixth_arr = [];
  list.each(function(idx, li){
    var id = jQuery(li).html();
    cat_news_sixth_arr.push(id);
    tab_html = tab_html + '<li class="'+id+'-tab" class="first"><a class="sidebar-tab" href="JavaScript:void(0);">'+ id +'</a></li>';
  })
  tab_html = tab_html + '</ul></div>';

  var index = 0;
  $(".region-category-news-sixth .contextual-region.block-views").each(function( index ) {
    if ($(this).find('.view-display-id-'+cat_news_sixth_arr[0]).length) {
      $(this).addClass("active-block");
      $(this).before("<h3 class='category-heading-1' ><a href='/category/Arts%20%26%20Lifestyle'>Arts & Lifestyle</a></h3>");
      $(this).before(tab_html);
    } else {
      $(this).addClass("hidden-block");
    } 
  });

  $('.region-category-news-sixth .'+cat_news_sixth_arr[0]+'-tab a').addClass("active");

  $.each(cat_news_sixth_arr, function( index, value ) {
    $(".region-category-news-sixth ."+value+"-tab").click(function() {
      $.each(cat_news_sixth_arr, function( ind, val ) {
        $(".region-category-news-sixth ."+val+"-tab a").removeClass("active");
      });
      $(".region-category-news-sixth ."+value+"-tab a").addClass("active");
      var index = 0;
      $(".region-category-news-sixth .contextual-region.block-views").each(function( index ) {
        if ($(this).find('.view-display-id-'+value).length) {
          $(this).addClass("active-block");
          $(this).removeClass("hidden-block");
        } else {
          $(this).addClass("hidden-block");
          $(this).removeClass("active-block");
        } 
      });
    });
  });
jQuery('.region-category-news-sixth h2').remove();
*/



//category-news-sidebar

  var tab_html = '';
  tab_html = tab_html + '<div class="tab-list"><ul class="tabs">';
  var list = jQuery('.region-sidebar-category-news-first h2');
  var cat_news_sidebar_arr = [];
  list.each(function(idx, li){
    var id = jQuery(li).html();
    cat_news_sidebar_arr.push(id);
    tab_html = tab_html + '<li class="'+id+'-tab" class="first"><a class="sidebar-tab" href="JavaScript:void(0);">'+ id +'</a></li>';
  })
  tab_html = tab_html + '</ul></div>';

  var index = 0;
  $(".region-sidebar-category-news-first .contextual-region.block-views").each(function( index ) {
    if ($(this).find('.view-display-id-'+cat_news_sidebar_arr[0]).length) {
      $(this).addClass("active-block");
      $(this).before("<h3 class='category-heading-1'><a href='/category/Opinion'>Opinion</a></h3>");
      $(this).before(tab_html);
    } else {
      $(this).addClass("hidden-block");
    } 

    $(this).find(".attachment-after").appendTo($(this).find(".contextual-region"));
  });

  $('.region-sidebar-category-news-first .'+cat_news_sidebar_arr[0]+'-tab a').addClass("active");

  $.each(cat_news_sidebar_arr, function( index, value ) {
    $(".region-sidebar-category-news-first ."+value+"-tab").click(function() {
      $.each(cat_news_sidebar_arr, function( ind, val ) {
        $(".region-sidebar-category-news-first ."+val+"-tab a").removeClass("active");
      });
      $(".region-sidebar-category-news-first ."+value+"-tab a").addClass("active");
      var index = 0;
      $(".region-sidebar-category-news-first .contextual-region.block-views").each(function( index ) {
        if ($(this).find('.view-display-id-'+value).length) {
          $(this).addClass("active-block");
          $(this).removeClass("hidden-block");
        } else {
          $(this).addClass("hidden-block");
          $(this).removeClass("active-block");
        } 
      });
    });
  });
$('.region-sidebar-category-news-first h2').remove();

//$('.region-sidebar-category-news-first 


})(jQuery);