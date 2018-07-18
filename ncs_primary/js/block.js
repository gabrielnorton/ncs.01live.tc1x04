jQuery(document).ready(function(){

  // Since we can't place blocks inside menus, we place the
  // blocks as 'hidden' and then relocate them to the menu

  function moveBlock(elem, blockparent, type){
    elem.detach();
    if (blockparent) {
    elem.appendTo(blockparent);
    elem.removeClass('hidden');

    // add a moved-block style to your debug.css to see which blocks are moved.
    // ex,  .moved-block { border:solid 1px red; }
    elem.addClass('moved-block')
    }
  }

  // moving user login and user account to the topbar menu
  var user_login_menu = jQuery('ul.ncs-login-nav');
  var user_account_menu = jQuery('ul.ncs-menu-account');
  var login_parent = jQuery('.ncs-primary-topbar-login-nav');
  moveBlock(user_login_menu, login_parent);
  moveBlock(user_account_menu, login_parent);

  // moving the user login modal, too, see: \templates\block\block--user-login-block.html.twig
  var user_login_modal = jQuery('#ncs-user-login');
  var user_login_modal_parent = jQuery('#page-footer');
  moveBlock(user_login_modal, user_login_modal_parent);

  // moving the easy social block to its place
  var easy_social_block = jQuery('.ncs_primary_easy_social');
  var easy_social_parent = jQuery('#ncs-social-media');
  moveBlock(easy_social_block, easy_social_parent);

  // moving the minitemp weather code to the topbar
  var mini_temp = jQuery('.ncs_primary_mini_temp');
  var mini_temp_parent = jQuery('.ncs-primary-topbar-mini-temp');
  moveBlock(mini_temp, mini_temp_parent);

  // mini temp decimal fix
  jQuery(mini_temp).html(function (i, html) {
   return html.replace(/\.\d/, "");
  });

  // creating hyperlink to weather page
  jQuery(mini_temp).click(function(event){
    if (event.target.tagName == 'DIV' || event.target.tagName == 'IMG'){
      location.href = '/weather';
    }
  });

  // moving search form
  var search_form = jQuery('.ncs_primary_search_form');
  var search_form_parent = jQuery('.ncs-primary-topbar-search');
  moveBlock(search_form, search_form_parent);

  var form_elem = jQuery('#search-api-block-form');
  var form_elem_input = jQuery('.ncs-primary-topbar-search input[data-drupal-selector="edit-search-api-fulltext"]');
  var form_elem_submit = jQuery('.ncs-primary-topbar-search input[data-drupal-selector="edit-submit"]');

  // add 'Search...' placeholder
  form_elem_input.attr('placeholder','Search...');
  
  // add bootstrap classes
  form_elem.addClass('form-inline');
  form_elem_submit.addClass('hidden');
  form_elem_input.addClass('form-control');
  form_elem_input.attr('placeholder','Search...');

});