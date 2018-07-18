(function($) {
$(document).ready(function(){
	//$("#block-views-block-latest-block-block-2").prependTo("#block-views-block-poll-position-block-2");
	var path = window.location.pathname;
	var pathArray = path.split('/');
	// console.log( + " !!path!!");
	if(pathArray[1]=='user'){
		$(".profile").prependTo(".region-content")
	//	$("#block-views-block-poll-position-block-1").contents().remove();
		
	}
});
 
})(jQuery); 