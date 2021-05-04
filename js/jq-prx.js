;(function($, window, document, undefined) {

	setTimeout( function() {
		$.fn.parallax = function( options ) {

			var settings = $.extend({
					friction: 0.1
				}, options);

			var $win = $(window);

			return this.each( function() {
				
				var element = $(this),
					startingPosition = {
						left: element.css('backgroundPosition').split(' ')[0],
						top: parseInt(element.css('backgroundPosition').split(' ')[1], 10)
					};

				render( element, startingPosition );

			});

			function render(element, startingPosition) {

				$win.on('scroll', function() {
					
					var	bgTop = element.offset().top,
						winTop = $win.scrollTop();

					var newBgTop = Math.floor( (bgTop + startingPosition.top - winTop) * settings.friction );

					element.css({ backgroundPosition: startingPosition.left + ' ' + newBgTop + 'px' });	

				});
			}
		}
	}, 1500);

})(jQuery, window, document);