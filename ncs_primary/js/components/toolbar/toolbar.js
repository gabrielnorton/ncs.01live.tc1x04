jQuery(document).ready(function(){

  // this is the white 'tray' menu toolbar on the frontend.
  // hide these on first page load. they are annoying during webdev.
  var drupal_admin_toolbar = jQuery('#toolbar-item-administration');
  var drupal_admin_tray = jQuery('#toolbar-item-administration-tray');
  jQuery(drupal_admin_toolbar).removeClass("is-active");
  jQuery(drupal_admin_tray).removeClass("is-active");

});