

(function($) {

	($(document).ready(function() {
      var tabs = '<div class="tab-list"><ul class="tabs"><li id="latest-tab" class="active first"><a class="active sidebar-tab" href="JavaScript:void(0);">Latest</a></li><li id="recommended-tab"><a class="sidebar-tab" href="JavaScript:void(0);">Recommended</a></li><li id="popular-tab" class="last"><a class="sidebar-tab" href="JavaScript:void(0);">Popular</a></li></ul></div>';

    $('.region-category-news-first').prepend(tabs);

	}));

})(jQuery);
