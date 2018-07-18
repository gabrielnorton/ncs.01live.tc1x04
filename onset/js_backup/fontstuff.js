/*(function($) {
	$( document ).ready( function() {

            var $body = $('.abheading');

            var setBodyScale = function() {
                var scaleSource = $body.width(),
                    scaleFactor = 0.375,
                    maxScale = 95,
                    minScale = 50; //Tweak these values to taste

                var fontSize = scaleSource * scaleFactor; //Multiply the width of the body by the scaling factor:

                if (fontSize > maxScale) fontSize = maxScale;
                if (fontSize < minScale) fontSize = minScale; //Enforce the minimum and maximums

                $('.large-style .shrinkify .node__title').css('font-size', fontSize + '%');
                $('.frontpage-identifier .shrinkify .node__title').css('font-size', fontSize + '%');
                console.log(fontSize);
            }

            $(window).resize(function(){
                setBodyScale();
            });

            setBodyScale();
        });

})(jQuery);*/