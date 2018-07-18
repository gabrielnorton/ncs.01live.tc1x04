// user log in modal
jQuery(document).ready(function($){
  $('#ncs-user-login').modal({
    show: false,
    focus: true
  });

  //auto-focus when modal is shown
  $(document).on('click', '[data-toggle^="modal"]', function(e){
    $('#ncs-user-login').on('shown.bs.modal', function () {
      // $('#ncs-user-login #edit-name').focus();
      $('#ncs-user-login input').first().focus(); //put the cursor inside

      //when the save button is clicked while logged out, it adds you must be logged in.
      if($(e.target).hasClass('login-needed')){
        if($('#ncs-user-login').find('#login-error-message').length){
          //do nothing, it already has block
        }
        else{
          //add block
          $('#ncs-user-login .modal-body').prepend(
              '<div id="login-error-message" role="contentinfo" aria-label="Error message" class="messages messages--error" style="margin-top: 20px;">' +
                '<div role="alert">' +
                  '<h2 class="visually-hidden">Error message</h2>You must be logged in to save'+
                '</div>'+
              '</div>'
          );
        }
      } else{
        if($('#ncs-user-login').find('#login-error-message')){
          //remove block
          $(this).find('#login-error-message').remove();
        }
      }
    });
  });

  var url = window.location.href; // Returns full URL
  if(url.indexOf("node?destination=/node") > -1){
    var $login = $('.ncs-user-login-nav').find('a');
    $login.trigger('click');
  }

  // Clone the login message to the login popup so it's visible to the user:
  if (($('.messages--error').text().indexOf("Unrecognized username or password.")>=0) || ($('.messages--error').text().indexOf("failed login attempts for this account")>=0)) {
    $('.messages--error').clone().prependTo('#ncs-user-login .modal-body');
    /**/
    $('.messages--error').css('margin-top', '20px');
  }

  // depending on if the user is signed in or not 
  // this appends current logged in user name to the main menu
  // or appends welcome user to the user form block
  // drupalSettings.login_mod.module.user is inserted into the page via login_mod module

  // login form (prompts modal)
  var loginForm = jQuery('.block-user-login-block .ncs-login-nav');
  var userMenu  = jQuery('.menu--account ul');

  // add bootstrap classes to uls
  jQuery('.navigation.menu--account > ul, ul.ncs-login-nav').addClass('navbar-nav nav');
  jQuery('.navigation.menu--account > ul').addClass('ncs-menu-account');

  // Set the welcome text and user name
  var loginMenuLink = jQuery('.navigation.menu--account').find("a:contains(My account)");
  if(typeof drupalSettings.login_mod !== 'undefined'){
    var insert = 'Welcome, <a href=\'/user\'>' + drupalSettings.login_mod.module.user + '</a>';
  } else {
    var insert = 'Welcome, User';
  }

  if ( loginForm.length !== 'undefined' && loginForm.length !== 0){
    jQuery(loginForm).prepend("<li id=\"welcome-user\" class=\"navbar-text\">");
    jQuery('#welcome-user').append(insert);
    jQuery(loginForm).prepend("<li class=\"navbar-text user-icon\">");
    jQuery('.user-icon').append("<i class=\"fa fa-user-circle-o\" aria-hidden=\"true\"></i>");
  } else {
    jQuery(loginMenuLink).parent().append("<span id=\"welcome-user\" class=\"navbar-text\">");
    jQuery(loginMenuLink).parent().addClass("user-welcome");
    var newLoginMenuLink = jQuery('#welcome-user').append(insert);
    jQuery(loginMenuLink).replaceWith(newLoginMenuLink);
    jQuery(userMenu).prepend("<li class=\"navbar-text user-icon\">");
    jQuery('.user-icon').append("<i class=\"fa fa-user-circle-o\" aria-hidden=\"true\"></i>");
  }

});
