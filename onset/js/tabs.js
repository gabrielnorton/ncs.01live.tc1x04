function makeSafeForCSS(name) {
  return name.replace(/[^a-z0-9]/g, function(s) {
      var c = s.charCodeAt(0);
      if (c == 32) return '-';
      if (c >= 65 && c <= 90) return '_' + s.toLowerCase();
      return '__' + ('000' + c.toString(16)).slice(-4);
  });
}

//finds and returns the full class name of element to be used in a jquery function
function getFullClassName(elem){
	//get the classes
	var elemClass = elem.attr("class");
	var classesArray = elemClass.split(' ');
	var finalString = "";
	//make classes into selector by adding '.'
	classesArray.forEach(function(value){
		finalString += "." + value;
	});
	return finalString;
}

(function($){

  //create the tab list, to be used in the block of code afterwards
  $('<div class="tab-list"><ul class="tabs"></ul></div>').prependTo($('.block-blockgroup.tabbed').children('.content'));

  $('.block-blockgroup.tabbed').addClass('clearfix');
  $('.block-blockgroup.tabbed').each(function(index0){

    var parents = [];
    var children = [];
    $(this).children('.content').children('div').find('h2').each(function(index1){
      var me = $(this);
      var parent = getFullClassName($(this).parent());
      parents.push(parent);

      var name = me.text();
      var the_class = makeSafeForCSS(name);
      me = $(me).appendTo($(this).parent().parent().find('.tabs'));
      $(me).replaceWith('<li class=' + the_class + '><a class="a-' + the_class + '">' + name + '</a></li>');
      me = $(parent).parent().find('.a-' + the_class);
      children.push(me);

      $(me).click(function(){
        for(var z = 0; z < parents.length; z++){
          $(parents[z]).css('display','none');
          $(children[z]).removeClass('active');
        };
        $(parent).css('display','block');
        $(this).addClass('active');
      });

      if(index1 == 0){
        $(parent).css('display','block');

      }
    });

  });
  $('.tabs').find('li:first-of-type').find('a').addClass('active');

})(jQuery);
