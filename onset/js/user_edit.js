(function($){

  var current_location = window.location.href;
  var href = current_location + "/edit";
  $(".page-title").append("<a href='"+href+"' data-toggle='tooltip' title='Edit Profile'><img class='user-edit-button' src='/core/themes/stable/images/core/icons/787878/pencil.svg'></img></a>");

})(jQuery);