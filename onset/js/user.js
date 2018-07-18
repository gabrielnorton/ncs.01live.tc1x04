jQuery(document).ready(function(){

  // depending on if the user is signed in or not 
  // this appends current logged in user name to the main menu
  // or appends welcome user to the user form block
  // drupalSettings.login_mod.module.user is inserted into the page via login_mod module

  var loginForm = jQuery('.block-user-login-block .onset-login-nav');
  var loginMenuLink = jQuery('.navigation.menu--account').find("a:contains(My account)");

  if(typeof drupalSettings.login_mod !== 'undefined'){
    var insert = 'Welcome, <a href=\'/user\'>' + drupalSettings.login_mod.module.user + '</a>';
  } else {
    var insert = 'Welcome, User';
  }

  if ( loginForm.length !== 'undefined' && loginForm.length !== 0){
    jQuery(loginForm).prepend("<li id=\"welcome-user\">");
    jQuery('#welcome-user').append(insert);
  } else {
    jQuery(loginMenuLink).parent().append("<span id=\"welcome-user\">");
    var newLoginMenuLink = jQuery('#welcome-user').append(insert);
    jQuery(loginMenuLink).replaceWith(newLoginMenuLink);
  }

});