(function($) {
	$( document ).ready( function() {
		$('.node--view-mode-blog-block-display a span').each(function(){
			var fullTitle = $(this).text();
			var truncTitle=fullTitle.substr(0,19);
			var splits = truncTitle.split(" ");
			splits = splits.splice(0,splits.length-1);
			splits = splits.toString();
			splits = replaceAll(splits, ',', ' ');
			splits = splits + " ...";
			$(this).text(splits);
			function replaceAll(str, find, replace){
				return str.replace(new RegExp(find, 'g'), replace);
			}
		});
		if($('#headingOne .panel-collapse').attr('aria-expanded')==='true'){
			var log = $('#headingOne .panel-title').find('img').attr('src', '/themes/custom/dtatheme/images/accrd-up-arrow.png');
			console.log(log);
		}
	});

	$( '.panel-title').click( function(){
		var imagePath = $(this).find('img').attr('src');
		var upOrDown = imagePath.split('/')[5];
		upOrDown = upOrDown.split('-')[1];
		//console.log(upOrDown);
		if (upOrDown == 'down'){
			imgaePath = $(this).find('img').attr('src', '/themes/custom/dtatheme/images/accrd-up-arrow.png');
			console.log(imagePath);
		}else{
			$(this).find('img').attr('src', '/themes/custom/dtatheme/images/accrd-down-arrow.png');
		}
		//if(upOrDown)

	});
})(jQuery);