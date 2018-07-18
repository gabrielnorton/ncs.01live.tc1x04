jQuery(document).ready(function(){

  jQuery('div.article-media').has('img.low-res').addClass("article-media-align-left");

  // the {{ links }} var on a node will create the 'login or register to post comments'
  // this sets the link to use the modal instead of going to /user/login
  // also adding classes to the menu, because Links in drupal is more trouble than they are worth.
  jQuery('.comment-forbidden a').attr('href', '').attr('data-toggle','modal').attr('data-target','#ncs-user-login');
  jQuery('.comment-forbidden').parent().addClass('list-unstyled');
  
});