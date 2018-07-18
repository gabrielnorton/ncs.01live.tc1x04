(function($){

  // 20171009 JSS: When clicking the main publishing status checkbox (at bottom of page), trigger the other (ON-8057)
  $('#edit-status-wrapper > .form-item-status-value > input').change(function() {
    $('#edit-meta > .form-item-status-value > input').prop('checked', this.checked);
  });

})(jQuery);
