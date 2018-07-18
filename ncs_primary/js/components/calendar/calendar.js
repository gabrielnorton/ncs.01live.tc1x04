(function(jQuery) {

  jQuery('.ncs_primary_event_calendar #add-events').addClass('btn-primary');
  jQuery('.ncs_primary_event_calendar table').addClass('table');

  jQuery(document).ajaxComplete(function(){
    if( jQuery('#add-events').hasClass('btn-primary') ){
      //console.log('btn-primary already exists!');
    } else {
      jQuery('#add-events').addClass('btn-primary')
    }
    
    if( jQuery('#block-ncs-primary-eventcalendar table').hasClass('table') ){
      //console.log('table already exists!');
    } else {
      jQuery('#block-ncs-primary-eventcalendar table').addClass('table');
    }
  });
})
(jQuery);