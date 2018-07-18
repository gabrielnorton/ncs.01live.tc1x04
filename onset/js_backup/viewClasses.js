(function($){


	$('.frontpage-identifier').children().addClass('embiggen');
	$('.frontpage-identifier').children().next().nextAll().removeClass('embiggen');

	$('.frontpage-identifier').children().nextAll().addClass('shrinkify');
	$('.frontpage-identifier').children().next().addClass('shrunk-first');
	$('.frontpage-identifier').children().next().next().addClass('shrunk-second');
	$('.frontpage-identifier').children().next().next().removeClass('shrunk-first');



	$('.large-style').children().addClass('embiggen');
	$('.large-style').children().next().nextAll().removeClass('embiggen');

	$('.large-style').children().nextAll().addClass('shrinkify');
	$('.large-style').children().next().addClass('shrunk-first');
	$('.large-style').children().next().next().addClass('shrunk-second');
	$('.large-style').children().next().next().removeClass('shrunk-first');

})(jQuery);

