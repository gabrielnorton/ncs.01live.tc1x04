jQuery(document).ready(function($){

  // combine menus on collapse
  var mainmenu = jQuery(".region-primary-menu .menu--ncs-primary-main .navbar-collapse > ul.navbar-nav").clone();
  var mobileparent = jQuery('.ncs-primary-mobile-menu');
  jQuery(mobileparent).addClass("ncs-cloned").prepend( jQuery(mainmenu) );

  // navigation fixes for click vs touch
  var tablet = navigator.userAgent.match(/tablet|ipad|android/i) !== null;
  var navlinkcaret = jQuery("a.mobile-dropdown");

  if (jQuery(window).innerWidth() < 768) {
    jQuery(navlinkcaret).click( function(event) {
      event.preventDefault();
      var menu = $("ul.menu_ncs-primary-main");
      var parent = $(this).closest("li");
      if (parent.hasClass("opened")) {
        parent.removeClass("opened");
        $(this).find(">:first-child").addClass("fa-caret-down");
        $(this).find(">:first-child").removeClass("fa-caret-up");
      } else {
        menu.find(".fa-caret-up").removeClass("fa-caret-up");
        menu.find(".opened").removeClass("opened");
        parent.addClass("opened");
        $(this).find(">:first-child").addClass("fa-caret-up");
      }

    });
  }

});