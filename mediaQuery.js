
/* A jQuery plugin that uses media queries to add classes to any element */
/* 
/* Copyright James Westgate 2013 */
/* Dual licensed under the MIT and GPL licenses */

(function($){
		
	$.fn.mediaQuery = function(options){
		
		//Feature detect
		if (!window.matchMedia) return;
		if (!window.matchMedia('only screen').addListener) return;

		var queries = options.queries;
		var $this = $(this);
			
		for (var key in queries) {
			
			var mq = window.matchMedia(queries[key]);
			
			(function(key) {
				mq.addListener(function(mql) {
					(mql.matches) ? $this.addClass(key) : $this.removeClass(key);
				});
				(mq.matches) ? $this.addClass(key) : $this.removeClass(key);
			})(key);
		}	
		
		return this;
	}	
})(jQuery);
