(function($){
		
	$.fn.mediaQuery = function(options){
				
		if (window.matchMedia) {

			var keys = '';
			var queries = options.queries;
			var $this = $(this);
				
			for (var key in queries) {
				
				keys += key + ' ';
				var mq = window.matchMedia(queries[key]);
				
				if (mq.addListener) {
					(function(key, keys, mq) {
						mq.addListener(function() {
							$this .removeClass(keys);
							$this .addClass(key);
						});
					})(key, keys, mq);
				}	
			}
				
			return this;
		};
	}	
})(jQuery);


// {queries : {
// 	w320: 'only screen and (min-width: 320px)',
// 	w480: 'only screen and (min-width: 480px) ',
// 	w768: 'only screen and (min-width: 768px)',
// 	w1024: 'only screen and (min-width: 1024px)'
// }
		
