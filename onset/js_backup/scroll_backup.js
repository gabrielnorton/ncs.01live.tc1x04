(function($) {

  var nav = $(".region-primary-menu");
  var navMenu = $("#block-onset-main-menu .content");
  if (nav.length > 0) {
    var pos = nav.offset();
    pos.top = nav[0]['offsetTop'];
    var login = $(".Login");
    var myAccount = $(".My.Account");
    var addPhotos = $(".Add.Photos");
    var logout = $(".Log.out");
    var viewPhotos = $(".View.Photos");
    var isMobile = false;
    var is_iPad = (/iPhone|iPad|iPod/i.test(navigator.userAgent));
    nav.prepend('<div id="nav-menu-down-arrow" class="hidden"></div>');
    var navArrow = $("#nav-menu-down-arrow");
    if (is_iPad) {
      var portrait = window.innerHeight > window.innerWidth;
    }

    // if drupal settings were passed
    if (typeof drupalSettings !== 'undefined') {
    	// ON-1699 Hiding the menu is no longer needed since we have the onset-admin-theme to restrict admin pages by user role
//      // if user is logged in as reporter then don't give access
//      if (drupalSettings.scroll_menu.user) {
//        var user = drupalSettings.scroll_menu.user.roles;
//        if (user.indexOf("reporter") > -1 && user.indexOf("administrator") == -1) {
//          //$("#toolbar-item-administration").css('display', 'none');
//          $("#toolbar-item-shortcuts").click();
//        }
//      }

      // if user is logged in
      if (drupalSettings.scroll_menu.module.user) {
        var user = drupalSettings.scroll_menu.module.user;
        $(login).addClass('hide');
        $(myAccount).addClass('visible');
        $(addPhotos).addClass('visible');
        $(viewPhotos).addClass('visible');
        $(logout).addClass('visible');


        if ($("#toolbar-administration").length) {
          $(window).scroll(function() {
            if (!is_iPad) {
              // if scrolled below pos.top which is the nav menu offset
              if ($(this).scrollTop() > pos.top) {
                $(nav).addClass('position-fixed-admin');
                $(navMenu).addClass('position-fixed-admin-nav-menu');
                $(navArrow).removeClass('hidden');
              } else {
                $(nav).removeClass('position-fixed-admin');
                $(navMenu).removeClass('position-fixed-admin-nav-menu');
                $(navArrow).addClass('hidden');
              }
            } else if (is_iPad) {
              var manage_is_active = $('#toolbar-item-administration-tray').hasClass('is-active');
              var shortcuts_is_active = $('#toolbar-item-shortcuts-tray').hasClass('is-active');
              var admin_is_active = $('#toolbar-item-user-tray').hasClass('is-active');
              // Any bar that shows between the menu bar and the admin bar.
              var is_active = (manage_is_active || shortcuts_is_active || admin_is_active);

              // if scrolled below pos.top which is the nav menu offset
              if ($(this).scrollTop() > pos.top) {
            	// Delaying the menu reveal button until the menu bar appears
                if ((!$('.reveal-menu-visible').length) && (portrait)){
                  $('.reveal-menu').addClass('reveal-menu-visible');
                  $('.reveal-menu-visible').css('display', 'none');
                }
                if (is_active) {
                  $(nav).addClass('position-fixed-admin-ipad');
                  $('.reveal-menu-visible').delay(1500).fadeIn('slow');

                } else {
                  $(nav).addClass('position-fixed-admin-ipad-non-active');
                  $('.reveal-menu-visible').delay(1400).fadeIn('slow');
                }
              } else {
                $(nav).removeClass('position-fixed-admin-ipad');
                $(nav).removeClass('position-fixed-admin-ipad-non-active');
                $('.reveal-menu').removeClass('reveal-menu-visible');

              }
            }
          });

          // Limiting the click event to the iPad in landscape
          if (is_iPad && (!portrait)) {
            var swap = function(){
              if ($('.position-fixed-admin-ipad').length > 0) {
                $(nav).toggleClass('position-fixed-admin-ipad position-fixed-admin-ipad-non-active');
              } else if ($('.position-fixed-admin-ipad-non-active').length > 0){
                $(nav).toggleClass('position-fixed-admin-ipad-non-active position-fixed-admin-ipad');
              }
            }

            $("#toolbar-item-administration").click(function() {
              if (!$('#toolbar-item-shortcuts-tray').hasClass('is-active') && !$('#toolbar-item-user-tray').hasClass('is-active')) {
                swap();
              }
            });

            $("#toolbar-item-shortcuts").click(function() {
              if (!$('#toolbar-item-administration-tray').hasClass('is-active') && !$('#toolbar-item-user-tray').hasClass('is-active')) {
                swap();
              }
            });

            $("#toolbar-item-user").click(function() {
              if (!$('#toolbar-item-shortcuts-tray').hasClass('is-active') && !$('#toolbar-item-administration-tray').hasClass('is-active')) {
                swap();
              }
            });
          }
        } else {
          // add window scroll for users without admin bar
          $(window).scroll(function() {
            if ($(this).scrollTop() > pos.top) {
              $(nav).addClass('position-fixed');
              $(navMenu).addClass('position-fixed-nav-menu');
              $(navArrow).removeClass('hidden');
            } else {
              $(nav).removeClass('position-fixed');
              $(navMenu).removeClass('position-fixed-nav-menu');
              $(navArrow).addClass('hidden');
            }
          });
        }

      } else { // php passed variable defined, but not logged in
        $(login).removeClass('hide');
        $(login).addClass('visible');
        $(myAccount).removeClass('visible');
        $(addPhotos).removeClass('visible');
        $(viewPhotos).addClass('visible');
        $(logout).removeClass('visible');

        // add scroll function for anonymous users
        $(window).scroll(function() {
          if ($(this).scrollTop() > (pos.top)) {
            if ((!$('.reveal-menu-visible').length) && (is_iPad) && (portrait)){
              $('.reveal-menu').addClass('reveal-menu-visible');
              $('.reveal-menu-visible').css('display', 'none');
            }
            $(nav).addClass('position-fixed');
            $(navMenu).addClass('position-fixed-nav-menu');
            $(navArrow).removeClass('hidden');
            if (is_iPad && (portrait)){
              $('.reveal-menu-visible').delay(1800).fadeIn('slow');
            }
          } else {
            $(nav).removeClass('position-fixed');
            $(navMenu).removeClass('position-fixed-nav-menu');
            $(navArrow).addClass('hidden');
            $('.reveal-menu').removeClass('reveal-menu-visible');
          }
        });
      }
    } else {
      $(login).removeClass('hide');
      $(login).addClass('visible');
      $(myAccount).removeClass('visible');
      $(addPhotos).removeClass('visible');
      $(viewPhotos).addClass('visible');
      $(logout).removeClass('visible');

      // adds scroll function when drupal can't return drupal settings
      $(window).scroll(function() {
        if ($(this).scrollTop() > pos.top) {
          $(nav).addClass('position-fixed');
        } else {
          $(nav).removeClass('position-fixed');
        }
      });
    }

    // adding down arrows to the items with content for full view
    $("#block-onset-main-menu .menu-item--expanded > a").each(function(count) {
      $(this).append('<span class="expand-down-arrow">▾</span>');
    });

    // adding on the expand links to nested lists
    $(".menu-item--expanded").each(function(count) {
      if ($(this).find(".region-primary-menu #expand-ul").length == 0) {
        $(this).append('<a id="expand-ul' + count + '" class="reveal-list" style="font-size: 18px"></a>');
        $(this).find(".reveal-list").click(function() {
          $(this).toggleClass("expanded");
          $(this).siblings(".menu").toggleClass("menu-opened");
        });
      }
    });

    // Adds the hamburger image for the reveal
    if ($("#reveal-menu").length == 0) {
      $(".region-primary-menu").prepend('<a id="reveal-menu" class="reveal-menu"></a>');
      $("#block-onset-main-menu .content").addClass("mobile-collapsed");
      $(navArrow).addClass("more-hidden");
      $("#reveal-menu").click(function() {
        $("#block-onset-main-menu .content").toggleClass("mobile-expanded");
        $("#block-onset-main-menu .content").toggleClass("mobile-collapsed");
        $("#block-onset-main-menu ul.menu").show();

        $(navArrow).toggleClass("more-hidden");
      });
    }
  }
})(jQuery);
