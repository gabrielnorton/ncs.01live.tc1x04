(function($) {
	$( document ).ready( function() {
		$('.blog-title a').each(function(){
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
	});
})(jQuery);