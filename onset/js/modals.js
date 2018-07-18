
// user log in modal
jQuery(document).ready(function($){
  $('#onset-login').modal({
    show: false,
    focus: true
  });

  //auto-focus when modal is shown
  $(document).on('click', '[data-toggle^="modal"]', function(e){
    $('#onset-login').on('shown.bs.modal', function () {
      // $('#onset-login #edit-name').focus();
      $('#onset-login input').first().focus(); //put the cursor inside

      //when the save button is clicked while logged out, it adds you must be logged in.
      if($(e.target).hasClass('login-needed')){
        if($('#onset-login').find('#login-error-message').length){
          //do nothing, it already has block
        }
        else{
          //add block
          $('#onset-login .modal-body').prepend(
              '<div id="login-error-message" role="contentinfo" aria-label="Error message" class="messages messages--error" style="margin-top: 20px;">' +
                '<div role="alert">' +
                  '<h2 class="visually-hidden">Error message</h2>You must be logged in to save'+
                '</div>'+
              '</div>'
          );
        }
      } else{
        if($('#onset-login').find('#login-error-message')){
          //remove block
          $(this).find('#login-error-message').remove();
        }
      }
    });
  });

  var url = window.location.href; // Returns full URL
  if(url.indexOf("node?destination=/node") > -1){
    var $login = $('.onset-login-nav').find('a');
    $login.trigger('click');
  }

  // Clone the login message to the login popup so it's visible to the user:
  if (($('.messages--error').text().indexOf("Unrecognized username or password.")>=0) || ($('.messages--error').text().indexOf("failed login attempts for this account")>=0)) {
    $('.messages--error').clone().prependTo('#onset-login .modal-body');
    /**/
    $('.messages--error').css('margin-top', '20px');
  }
});
